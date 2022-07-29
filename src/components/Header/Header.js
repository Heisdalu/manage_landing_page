import React, { createPortal } from "react-dom";
import "./Header.css";
import Logo from "./Logo";
import Hamburger from "../../assets/icon-hamburger.svg";
import close_btn from "../../assets/icon-close.svg";
import Lg from "../../assets/illustration-intro.svg";
import PatternImg from "../../assets/bg-tablet-pattern.svg";
import DesktopHeader from "./DesktopHeader";
import Modal from "./Modal";
import { useState } from "react";

const Header = () => {
  const [clicked, setClicked] = useState(false);

  const toggleHandler = () => {
    setClicked((state) => !state);
  };

  const classes = clicked ? close_btn : Hamburger


  return (
    <>
      {clicked && createPortal(<Modal />, document.querySelector(".modal"))}
      <div className="header_wrapper">
        <header className="header">
          <div className="header_box">
            <Logo />
            <button className="nav_button" onClick={toggleHandler}>
              <img src={classes} alt="" />
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
                Manage makes it simple for software teams to plan day-to-day
                tasks while keeping the larger team goals in view.
              </p>

              <button className="header_btn">Get Started</button>
            </div>
            <div className="class">
              <img src={PatternImg} alt="" className="other3" />
            </div>
          </section>
        </header>
      </div>
    </>
  );
};

export default Header;
