
import CustomerAuth from "./CustomerAuth";
import {
  ShoppingBag,
  MessageCircle,
  Sparkles,
  Leaf,
  ShieldCheck,
  Heart,
  ArrowRight,
} from "lucide-react";
import "./App.css";


const products = [
  {
    weight: "50g",
    name: "Daily Puja Wicks",
    detail: "For everyday prayers and daily rituals",
    tag: "DAILY ESSENTIAL",
    image: "/images/wicks-50g.jpg",
  },
  {
    weight: "200g",
    name: "Family Collection",
    detail: "A thoughtful pack for your family",
    tag: "FAMILY FAVOURITE",
    image: "/images/wicks-200g.jpg",
  },
  {
    weight: "300g",
    name: "Value Collection",
    detail: "More devotion for everyday worship",
    tag: "VALUE PACK",
    image: "/images/wicks-300g.jpg",
  },
];


const wickTypes = [
  {
    name: "Simple Cotton Wicks",
    detail: "For everyday worship and daily rituals",
    symbol: "✦",
  },
  {
    name: "Long Cotton Wicks",
    detail: "Designed for traditional lamps",
    symbol: "〰",
  },
  {
    name: "Thick Cotton Wicks",
    detail: "For a steady traditional flame",
    symbol: "✺",
  },
  {
    name: "Phool Vati",
    detail: "Beautiful flower-shaped cotton wicks",
    symbol: "❀",
  },
  {
    name: "Samai Vati",
    detail: "For traditional samai and lamps",
    symbol: "✧",
  },
  {
    name: "Twisted Vati",
    detail: "Traditional twisted cotton wicks",
    symbol: "≈",
  },
];

function App() {
  const whatsappLink =
    "https://wa.me/919359183419?text=" +
    encodeURIComponent(
      "Hello SHIVARTH, I would like to know about your cotton wicks."
    );

  return (
    <div className="website">
      <div className="announcement">
        <span>✦ PURE COTTON</span>
        <span>MADE WITH CARE</span>
        <span>MADE FOR EVERY PRAYER ✦</span>
      </div>

      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-symbol">✦</span>
          <span>
            <strong>SHIVARTH</strong>
            <small>PURE DEVOTION. PURE LIFE.</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#customer-login">Login</a>
          <a href="#home">Home</a>
          <a href="#products">Collections</a>
          <a href="#wick-types">Wick Types</a>
          <a href="#about">Our Story</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#products" className="nav-button">
          <ShoppingBag size={15} />
          Explore Shop
        </a>
      </nav>

      <main>
        {/* CUSTOMER LOGIN */}
        <CustomerAuth />

        {/* HERO SECTION */}
      
          <div className="hero-content">
            <span className="eyebrow">✦ THE PURE ART OF DEVOTION</span>

            <h1>
              A Little Wick.
              <br />
              <em>A Brighter Prayer.</em>
            </h1>

            <p>
              Every beautiful prayer deserves a pure beginning.
              Discover thoughtfully crafted cotton wicks made
              for your everyday moments of devotion.
            </p>

            <div className="hero-actions">
              <a href="#products" className="primary-button">
                DISCOVER COLLECTION <ArrowRight size={16} />
              </a>

              <a href="#about" className="text-button">
                Our Story →
              </a>
            </div>

            <div className="hero-caption">
              CRAFTED WITH CARE · INSPIRED BY TRADITION
            </div>
          </div>

         

<div className="hero-visual">
  <div className="hero-photo-frame">
    <img
      
src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/A_lit_Diyo.jpg/960px-A_lit_Diyo.jpg"

      alt="Traditional brass diya with a burning cotton wick"
      className="hero-real-image"
    />
    <div className="photo-caption">
      <span>THE LIGHT OF DEVOTION</span> 
      <break> </break>
      <strong>Made for every prayer.</strong>
    </div>
  </div>
</div>



        {/* FEATURES */}
        <section className="features">
          <div className="feature-item">
            <Leaf size={20} />
            <span>Pure Cotton</span>
          </div>

          <div className="feature-item">
            <Heart size={20} />
            <span>Made With Care</span>
          </div>

          <div className="feature-item">
            <ShieldCheck size={20} />
            <span>Quality Focused</span>
          </div>

          <div className="feature-item">
            <Sparkles size={20} />
            <span>Everyday Devotion</span>
          </div>
        </section>

        {/* PRODUCT COLLECTIONS */}
        <section className="products" id="products">
          <div className="section-heading">
            <span className="eyebrow">THE SHIVARTH COLLECTION</span>
            <h2>
              Find a Pack That Fits <em>Your Prayer.</em>
            </h2>
            <p>
              Thoughtfully packed cotton wicks for every home.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.weight}>
                
<div className="product-image">
  <img
    src={product.image}
    alt={`${product.name} pure cotton wicks`}
    className="product-real-image"
  />
  <span className="image-weight">{product.weight}</span>
</div>

                <div className="product-info">
                  <span className="product-tag">{product.tag}</span>
                  <h3>{product.name}</h3>
                  <p>{product.detail}</p>

                  <div className="product-bottom">
                    <span>Price on Request</span>
                    <a
                      href={
                        "https://wa.me/919359183419?text=" +
                        encodeURIComponent(
                          `Hello SHIVARTH, I am interested in ${product.name} (${product.weight}). Please share details.`
                        )
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      Enquire →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* WICK TYPES */}
        <section className="products wick-section" id="wick-types">
          <div className="section-heading">
            <span className="eyebrow">MADE FOR EVERY TRADITION</span>
            <h2>
              Every Wick Has <em>Its Purpose.</em>
            </h2>
            <p>
              Explore different cotton wick styles for your rituals.
            </p>
          </div>

          <div className="product-grid">
            {wickTypes.map((wick) => (
              <article className="product-card wick-card" key={wick.name}>
                <div className="product-image wick-image">
                  <span className="wick-symbol">{wick.symbol}</span>
                </div>

                <div className="product-info">
                  <span className="product-tag">SHIVARTH WICK SERIES</span>
                  <h3>{wick.name}</h3>
                  <p>{wick.detail}</p>

                  <div className="product-bottom">
                    <span>Enquire for details</span>
                    <a
                      href={
                        "https://wa.me/919359183419?text=" +
                        encodeURIComponent(
                          `Hello SHIVARTH, I want to know about ${wick.name}.`
                        )
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      Enquire →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* OUR STORY */}
        <section className="story" id="about">
          <div className="story-content">
            <span className="eyebrow">THE STORY OF SHIVARTH</span>

            <h2>
              Tradition in Every Wick.
              <br />
              <em>Devotion in Every Flame.</em>
            </h2>

            <p>
              SHIVARTH is built around a simple thought:
              every prayer begins with a little light.
              Our brand brings traditional cotton wicks
              closer to everyday homes with care and simplicity.
            </p>

            <a href="#contact" className="primary-button">
              KNOW MORE <ArrowRight size={16} />
            </a>
          </div>

          <div className="story-symbol">
            <span>✦</span>
            <strong>SHIVARTH</strong>
            <small>PURE DEVOTION. PURE LIFE.</small>
          </div>
        </section>

        {/* WHY SHIVARTH */}
        <section className="products why-section">
          <div className="section-heading">
            <span className="eyebrow">THE SHIVARTH PROMISE</span>
            <h2>
              Small Details. <em>Meaningful Moments.</em>
            </h2>
          </div>

          <div className="product-grid">
            <article className="product-card">
              <div className="product-image why-icon">
                <Leaf size={38} />
              </div>
              <div className="product-info">
                <h3>Carefully Selected</h3>
                <p>
                  Our focus is on cotton wick quality and consistency.
                </p>
              </div>
            </article>

            <article className="product-card">
              <div className="product-image why-icon">
                <Heart size={38} />
              </div>
              <div className="product-info">
                <h3>Made With Care</h3>
                <p>
                  Thoughtful products for your everyday rituals.
                </p>
              </div>
            </article>

            <article className="product-card">
              <div className="product-image why-icon">
                <Sparkles size={38} />
              </div>
              <div className="product-info">
                <h3>Inspired By Tradition</h3>
                <p>
                  Keeping the beauty of traditional worship alive.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <span className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</span>
          <h2>
            Let's Make Every Prayer <em>Brighter.</em>
          </h2>
          <p>
            For product enquiries, bulk orders and business
            enquiries, connect with SHIVARTH.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            <MessageCircle size={17} />
            CHAT ON WHATSAPP
          </a>

          <p className="contact-number">+91 93591 83419</p>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          <strong>SHIVARTH</strong>
          <span>PURE DEVOTION. PURE LIFE.</span>
        </div>

        <p>Tradition in every wick. Devotion in every flame.</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#products">Collections</a>
          <a href="#about">Our Story</a>
          <a href="#contact">Contact</a>
        </div>

        <small>
          © {new Date().getFullYear()} SHIVARTH. All Rights Reserved.
        </small>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsappLink}
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with SHIVARTH on WhatsApp"
      >
        <MessageCircle size={19} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
