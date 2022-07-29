/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Footer.css";
import Facebook from "../../assets/icon-facebook.svg";
import Pinterest from "../../assets/icon-pinterest.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Youtube from "../../assets/icon-youtube.svg";
import Instagram from "../../assets/icon-instagram.svg";
import Logo from "../Header/Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="info-header">
        <h1 className="info-title">Simplify how your team works today.</h1>
        <button className="info-btn">Get Started</button>
      </section>

      <footer className="footer">
        <div className="input-wrapper">
          <input
            type="text"
            aria-label="update inbox"
            placeholder="Updates in your inbox..."
            className="input-text"
          />
          <button type="submit" className="go_btn">
            GO
          </button>
        </div>

        <div className="navigation_links">
          <nav className="navigation_main">
            <a href="#">Home</a>
            <a href="#">Pricings</a>
            <a href="#">Products</a>
            <a href="#">About Us</a>
          </nav>
          <nav className="navigation_other">
            <a href="#">Careers</a>
            <a href="#">Community</a>
            <a href="#">Privacy Policy</a>
          </nav>
        </div>

        <section className="social_link">
          <div className="social_media_links">
            <img src={Facebook} alt="facebook icon" />
            <img src={Youtube} alt="youtube icon" />
            <img src={Twitter} alt="twiiter icon" />
            <img src={Pinterest} alt="pinterest icon" />
            <img src={Instagram} alt="instagram icon" />
          </div>
        </section>
        <span className='footer_logo'>
          <Logo color="#ffffff" />
        </span>

        <div className="copyright">Copyright {year}. All Rights Reserved.</div>
      </footer>
    </>
  );
};

export default Footer;
