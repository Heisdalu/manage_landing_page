import "./Header.css";
import Logo from "./Logo";
import Hamburger from "../../assets/icon-hamburger.svg";
import Lg from "../../assets/illustration-intro.svg";
import PatternImg from "../../assets/bg-tablet-pattern.svg";
import DesktopHeader from "./DesktopHeader";

const Header = () => {
  return (
    <div className="header_wrapper">
      <header className="header">
        <div className="header_box">
          <Logo />
          <button className="nav_button">
            <img src={Hamburger} alt="" />
          </button>

          <DesktopHeader />
        </div>

        <section className="header_main">
          <figure className="header_illustrations">
            <img src={PatternImg} alt="" className="other" />
            <img src={Lg} alt="" className="main_ill" />
          </figure>
          <div className="header_content">
            <h1 className="header_title">
              <span>Bring everyone</span>
              <span> together to build</span>
              <span>better products.</span>
            </h1>
            <p className="header_detail">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>

            <button className="header_btn">Get Started</button>
          </div>
          <div className="class">
            <img src={PatternImg} alt="" className="other3" />
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
