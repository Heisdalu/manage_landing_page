/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./DesktopHeader.css";

const DesktopHeader = () => {
  return (
    <>
      <nav className="desktop_header">
        <a href="#">Pricing</a>
        <a href="#">Product</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Community</a>
      </nav>
      <button className="desktop_navigator_btn">Get started</button>
    </>
  );
};

export default DesktopHeader;
