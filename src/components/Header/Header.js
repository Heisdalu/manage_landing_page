import "./Header.css";
import Logo from "./Logo";
import Hamburger from "../../assets/icon-hamburger.svg";
import Lg from "../../assets/illustration-intro.svg";
import PatternImg from "../../assets/bg-tablet-pattern.svg";

const Header = () => {
  return (
    <div className="header_wrapper">
      <header className="header">
        <div className="header_box">
          <Logo />
          <button className="nav_button">
            <img src={Hamburger} alt="" />
          </button>
        </div>
        <section className="header_main">
          <figure className="header_illustrations">
            <img src={PatternImg} alt="" className="other" />
            {/* <img src={PatternImg} alt="" className="other2" /> */}
            <img src={Lg} alt="" className="main_ill" />
          </figure>
          <div className='header_content'>
            <h1 className='header_title'>Bring everyone together to build better products.</h1>
            <p className='header_detail'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>


            <button className='header_btn'>Get Started</button>
          </div>

        </section>
      </header>
    </div>
  );
};

export default Header;
