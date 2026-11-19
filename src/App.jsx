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
    image: "/images/simple-round-wicks.jpg",
  },
  {
    weight: "200g",
    name: "Family Collection",
    detail: "A thoughtful pack for your family",
    tag: "FAMILY FAVOURITE",
    image: "/images/long-wicks.jpg",
  },
  {
    weight: "300g",
    name: "Value Collection",
    detail: "More devotion for everyday worship",
    tag: "VALUE PACK",
    image: "/images/thick-wicks.jpg",
  },
];

const wickTypes = [
  {
    name: "Simple Cotton Wicks",
    detail: "For everyday worship and daily rituals",
    image: "/images/simple-round-wicks.jpg",
  },
  {
    name: "Long Cotton Wicks",
    detail: "Designed for traditional lamps",
    image: "/images/long-wicks.jpg",
  },
  {
    name: "Thick Cotton Wicks",
    detail: "For a steady traditional flame",
    image: "/images/thick-wicks.jpg",
  },
  {
    name: "Phool Vati",
    detail: "Beautiful flower-shaped cotton wicks",
    image: "/images/flower-wicks.jpg",
  },
  {
    name: "Samai Vati",
    detail: "For traditional samai and lamps",
    image: "/images/samai-wicks.jpg",
  },
  {
    name: "Twisted Vati",
    detail: "Traditional twisted cotton wicks",
    image: "/images/twisted-wicks.jpg",
  },
];

const whatsappLink =
  "https://wa.me/919359183419?text=Hello%20SHIVARTH%2C%20I%20want%20to%20enquire%20about%20cotton%20wicks.";

function App() {
  return (
    <div className="website">
      <div className="announcement">
        <span>PURE COTTON WICKS</span>
        <span>MADE FOR YOUR DAILY DEVOTION</span>
      </div>

      <header className="navbar">
        <a className="brand" href="#home" aria-label="SHIVARTH home">
          <span className="brand-symbol">ॐ</span>
          <span>
            <strong>SHIVARTH</strong>
            <small>DIVINITY IN EVERY THREAD</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#wick-types">Wick Types</a>
          <a href="#story">Our Story</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href={whatsappLink} target="_blank" rel="noreferrer">
          <ShoppingBag size={16} />
          Enquire Now
        </a>
      </header>

      <main>
        <CustomerAuth />

        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              <Sparkles size={15} /> A LITTLE LIGHT, A LOT OF FAITH
            </span>
            <h1>
              Bring home the
              <br />
              warmth of <em>devotion.</em>
            </h1>
            <p>
              Thoughtfully made cotton wicks for your everyday prayers,
              traditional lamps and special moments of worship.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#collections">
                Explore Collections <ArrowRight size={16} />
              </a>
              <a href="#wick-types">Discover wick types</a>
            </div>

            <div className="hero-caption">
              SIMPLE • TRADITIONAL • MADE WITH CARE
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circle">
              <span className="hero-diya" role="img" aria-label="Lit diya">
                🪔
              </span>
            </div>
            <span className="hero-side-note">LIGHT • FAITH • TRADITION</span>
          </div>
        </section>

        <section className="features" aria-label="SHIVARTH values">
          <div className="feature-item">
            <Leaf size={22} />
            <span>Cotton Wicks</span>
          </div>
          <div className="feature-item">
            <ShieldCheck size={22} />
            <span>Carefully Selected</span>
          </div>
          <div className="feature-item">
            <Heart size={22} />
            <span>Made for Devotion</span>
          </div>
          <div className="feature-item">
            <Sparkles size={22} />
            <span>Everyday Pooja Essentials</span>
          </div>
        </section>

        <section className="products" id="collections">
          <div className="section-heading">
            <span className="eyebrow">THE SHIVARTH COLLECTION</span>
            <h2>Made for every <em>prayer.</em></h2>
            <p>Choose a pack that suits your home and daily worship needs.</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.weight}>
                <div className="product-image">
                  <img
                    className="product-real-image"
                    src={product.image}
                    alt={`${product.name} cotton wicks`}
                    loading="lazy"
                  />
                  <span className="image-weight">{product.weight}</span>
                </div>
                <div className="product-info">
                  <span className="product-tag">{product.tag}</span>
                  <h3>{product.name}</h3>
                  <p>{product.detail}</p>
                  <div className="product-bottom">
                    <strong>Price on Request</strong>
                    <a href={`${whatsappLink}%20Pack:%20${encodeURIComponent(product.weight)}`} target="_blank" rel="noreferrer">
                      Enquire <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="products wick-section" id="wick-types">
          <div className="section-heading">
            <span className="eyebrow">FIND YOUR EVERYDAY ESSENTIAL</span>
            <h2>Explore our <em>wick types.</em></h2>
            <p>Different shapes for different lamps, rituals and traditions.</p>
          </div>

          <div className="product-grid">
            {wickTypes.map((wick) => (
              <article className="product-card wick-card" key={wick.name}>
                <div className="product-image wick-image">
                  <img
                    className="product-real-image"
                    src={wick.image}
                    alt={wick.name}
                    loading="lazy"
                  />
                </div>
                <div className="product-info">
                  <span className="product-tag">SHIVARTH WICK RANGE</span>
                  <h3>{wick.name}</h3>
                  <p>{wick.detail}</p>
                  <div className="product-bottom">
                    <span>Available on enquiry</span>
                    <a href={`${whatsappLink}%20Product:%20${encodeURIComponent(wick.name)}`} target="_blank" rel="noreferrer">
                      Ask us <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story" id="story">
          <div className="story-content">
            <span className="eyebrow">OUR THOUGHT, OUR PROMISE</span>
            <h2>A brighter moment begins with a <em>single flame.</em></h2>
            <p>
              At SHIVARTH, we believe that everyday rituals deserve thoughtful
              essentials. Our cotton wick collection brings together familiar
              traditions and the simple warmth of prayer at home.
            </p>
            <a className="primary-button" href="#contact">
              Connect with SHIVARTH <ArrowRight size={16} />
            </a>
          </div>
          <div className="story-symbol">
            <span>ॐ</span>
            <strong>SHIVARTH</strong>
            <small>DIVINITY IN EVERY THREAD</small>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <span className="eyebrow">WE WOULD LOVE TO HEAR FROM YOU</span>
          <h2>Let’s make your next prayer <em>brighter.</em></h2>
          <p>For product details, pack sizes and bulk enquiries, contact us on WhatsApp.</p>
          <p className="contact-number">+91 93591 83419</p>
          <a className="primary-button" href={whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle size={17} /> Chat on WhatsApp
          </a>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <strong>SHIVARTH</strong>
          <span>DIVINITY IN EVERY THREAD</span>
        </div>
        <p>Thoughtful cotton wicks for everyday devotion.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#wick-types">Wick Types</a>
          <a href="#contact">Contact</a>
        </div>
        <small>© {new Date().getFullYear()} SHIVARTH. All rights reserved.</small>
      </footer>

      <a className="whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
        <MessageCircle size={19} />
        WhatsApp
      </a>
    </div>
  );
}

export default App;
