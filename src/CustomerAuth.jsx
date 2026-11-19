
import { useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  onAuthStateChanged,
  signOut,
  updateProfile
} from "firebase/auth";

import { auth } from "./firebase";
import "./CustomerAuth.css";

const wickTypes = [
  {
    name: "Simple Vati",
    image: "/images/simple-round-wicks.jpg",
  },
  {
    name: "Long Vati",
    image: "/images/long-wicks.jpg",
  },
  {
    name: "Thick Vati",
    image: "/images/thick-wicks.jpg",
  },
  {
    name: "Phool Vati",
    image: "/images/flower-wicks.jpg",
  },
  {
    name: "Samai Vati",
    image: "/images/samai-wicks.jpg",
  },
  {
    name: "Twisted Vati",
    image: "/images/twisted-wicks.jpg",
  },
];

export default function CustomerAuth() {
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState("email");
  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const [confirmation, setConfirmation] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const recaptchaRef = useRef(null);
  const verifierRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
      if (verifierRef.current) {
        verifierRef.current.clear();
        verifierRef.current = null;
      }
    };
  }, []);

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      if (isSignup) {
        const result = await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );

        if (name.trim()) {
          await updateProfile(result.user, {
            displayName: name.trim()
          });
          setUser(auth.currentUser);
        }

        setMessage("Your SHIVARTH account has been created!");
      } else {
        await signInWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );
        setMessage("Login successful! Welcome to SHIVARTH.");
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const sendOTP = async (e) => {
    e.preventDefault();
    setMessage("");

    const cleanPhone = phone.replace(/\D/g, "");

    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setMessage("कृपया योग्य 10 अंकी Mobile Number टाका.");
      return;
    }

    setLoading(true);

    try {
      if (verifierRef.current) {
        verifierRef.current.clear();
        verifierRef.current = null;
      }

      verifierRef.current = new RecaptchaVerifier(
        auth,
        recaptchaRef.current,
        { size: "normal" }
      );

      const result = await signInWithPhoneNumber(
        auth,
        `+91${cleanPhone}`,
        verifierRef.current
      );

      setConfirmation(result);
      setMessage("OTP पाठवला आहे. कृपया Mobile तपासा.");
    } catch (error) {
      setMessage(error.message);

      if (verifierRef.current) {
        verifierRef.current.clear();
        verifierRef.current = null;
      }
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!confirmation) return;

    setLoading(true);

    try {
      await confirmation.confirm(otp);
      setMessage("Mobile OTP verified successfully!");
      setConfirmation(null);
      setOtp("");
    } catch {
      setMessage("OTP चुकीचा आहे किंवा Expire झाला आहे.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMessage("Logout successful.");
      setConfirmation(null);
    } catch (error) {
      setMessage(error.message);
    }
  };

  if (user) {
    return (
      <section className="auth-section auth-section--profile">
        <div className="auth-card auth-profile-card">
          <div className="auth-emblem">✦</div>
          <div className="auth-logo">SHIVARTH</div>
          <p className="auth-eyebrow">YOUR PERSONAL SPACE</p>
          <h2>Welcome Back.</h2>
          <p className="auth-subtitle">
            Thank you for being a part of our journey.
          </p>

          <div className="profile-info">
            <p><strong>Name</strong><span>{user.displayName || "Customer"}</span></p>
            <p><strong>Email</strong><span>{user.email || "Not linked"}</span></p>
            <p><strong>Mobile</strong><span>{user.phoneNumber || "Not linked"}</span></p>
          </div>

          <button
            className="auth-main-btn"
            onClick={handleLogout}
            disabled={loading}
          >
            Logout
          </button>

          {message && <p className="auth-message">{message}</p>}
        </div>
      </section>
    );
  }

  return (
    <section className="auth-section" id="customer-login">
      <div className="auth-particles" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => (
          <span key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      <div className="auth-visual">
        <div className="visual-topline">
          <span className="visual-star">✦</span>
          <span>THE ART OF PURE DEVOTION</span>
        </div>

        <div className="visual-brand">
          <span className="brand-mark">✦</span>
          <h1>SHIVARTH</h1>
          <p>PURE DEVOTION. PURE LIFE.</p>
        </div>

        <div className="visual-message">
          <p className="visual-kicker">A LIGHT FOR EVERY PRAYER</p>
          <h2>
            Every Prayer
            <br />
            Begins With
            <br />
            <span>A Pure Light.</span>
          </h2>
          <p className="visual-description">
            Handcrafted cotton wicks, made with care
            for your everyday moments of devotion.
          </p>
        </div>

        <div className="diya-stage" aria-label="Decorative animated diya">
          <div className="diya-halo" />
          <div className="diya-orbit orbit-one" />
          <div className="diya-orbit orbit-two" />
          <div className="diya-flame">
            <span />
          </div>
          <div className="diya-glow" />
          <div className="diya-bowl">
            <div className="diya-oil" />
            <div className="diya-rim" />
          </div>
          <div className="diya-base" />
          <span className="diya-spark spark-one">✦</span>
          <span className="diya-spark spark-two">✧</span>
          <span className="diya-spark spark-three">✦</span>
        </div>

        <div className="gallery-heading">
          <span>OUR COLLECTION</span>
          <span className="gallery-line" />
        </div>

        <div className="vati-gallery">
          {wickTypes.map((item) => (
            <div className="vati-item" key={item.name}>
              <div className="vati-image-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add("image-missing");
                  }}
                />
                <span className="vati-fallback">✦</span>
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div className="visual-footer">
          <span>CRAFTED WITH CARE</span>
          <span>MADE FOR EVERY PRAYER</span>
        </div>
      </div>

      <div className="auth-form-side">
        <div className="auth-card">
          <div className="auth-card-top">
            <span className="auth-card-symbol">✦</span>
            <span>WELCOME TO SHIVARTH</span>
          </div>

          <div className="auth-logo">SHIVARTH</div>
          <h2>{isSignup ? "Create Your Account" : "Welcome Back"}</h2>
          <p className="auth-subtitle">
            {isSignup
              ? "Join us and make every prayer special."
              : "Sign in to continue your journey with us."}
          </p>

          <div className="auth-tabs">
            <button
              type="button"
              className={mode === "email" ? "active" : ""}
              onClick={() => {
                setMode("email");
                setMessage("");
                setConfirmation(null);
              }}
            >
              Email Login
            </button>

            <button
              type="button"
              className={mode === "phone" ? "active" : ""}
              onClick={() => {
                setMode("phone");
                setMessage("");
                setConfirmation(null);
              }}
            >
              Mobile OTP
            </button>
          </div>

          {mode === "email" ? (
            <form onSubmit={handleEmailAuth}>
              {isSignup && (
                <label className="auth-field">
                  <span>FULL NAME</span>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    required
                  />
                </label>
              )}

              <label className="auth-field">
                <span>EMAIL ADDRESS</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </label>

              <label className="auth-field">
                <span>PASSWORD</span>
                <input
                  type="password"
                  placeholder="Minimum 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  autoComplete={isSignup ? "new-password" : "current-password"}
                  required
                />
              </label>

              <button className="auth-main-btn" disabled={loading}>
                {loading
                  ? "Please wait..."
                  : isSignup
                  ? "Create Account  →"
                  : "Sign In  →"}
              </button>

              <p className="auth-switch">
                {isSignup
                  ? "Already have an account?"
                  : "New to SHIVARTH?"}
                <button
                  type="button"
                  onClick={() => {
                    setIsSignup(!isSignup);
                    setMessage("");
                  }}
                >
                  {isSignup ? "Sign In" : "Create Account"}
                </button>
              </p>
            </form>
          ) : (
            <form onSubmit={confirmation ? verifyOTP : sendOTP}>
              {!confirmation ? (
                <>
                  <label className="auth-field">
                    <span>MOBILE NUMBER</span>
                    <div className="phone-input">
                      <span>+91</span>
                      <input
                        type="tel"
                        placeholder="10 digit mobile number"
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                        }
                        maxLength={10}
                        autoComplete="tel-national"
                        required
                      />
                    </div>
                  </label>

                  <div ref={recaptchaRef} className="recaptcha-box" />

                  <button className="auth-main-btn" disabled={loading}>
                    {loading ? "Sending OTP..." : "Send OTP  →"}
                  </button>
                </>
              ) : (
                <>
                  <label className="auth-field">
                    <span>ENTER VERIFICATION CODE</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="6 digit OTP"
                      value={otp}
                      onChange={(e) =>
                        setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                      }
                      maxLength={6}
                      required
                    />
                  </label>

                  <button className="auth-main-btn" disabled={loading}>
                    {loading ? "Verifying..." : "Verify OTP  →"}
                  </button>

                  <button
                    type="button"
                    className="auth-back-btn"
                    onClick={() => {
                      setConfirmation(null);
                      setOtp("");
                      setMessage("");
                      if (verifierRef.current) {
                        verifierRef.current.clear();
                        verifierRef.current = null;
                      }
                    }}
                  >
                    ← Change Mobile Number
                  </button>
                </>
              )}
            </form>
          )}

          {message && (
            <p className="auth-message" role="status">
              {message}
            </p>
          )}

          <div className="auth-divider">
            <span />
            <i>PURE DEVOTION</i>
            <span />
          </div>

          <p className="auth-terms">
            By continuing, you agree to SHIVARTH's Terms and Privacy Policy.
            SMS verification may incur standard carrier charges.
          </p>
        </div>

        <p className="auth-side-note">
          <span>✦</span> A little wick. A brighter prayer.
        </p>
      </div>
    </section>
  );
}
