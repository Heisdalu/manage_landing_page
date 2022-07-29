import "./FeedBack.css";
import { useRef } from "react";
import Slider from "./Slider";

const FeedBack = () => {
  const mainSliderRef = useRef();
  const innerSliderRef = useRef();

  let pressed = false;
  let x;
  let startX;

  // get the postion of the mouse when clicked
  const mouseActiveHandler = (e) => {
    console.log(e);
    mainSliderRef.current.style.cursor = "grabbing";
    pressed = true;
    // get the starting point on the slider when clicked
    startX = e.nativeEvent.offsetX - innerSliderRef.current.offsetLeft;
  };

  // get the mouse moving direction
  const mouseMovingHandler = (e) => {
    e.preventDefault();
    if (!pressed) return;
    // as mouse moves, subtract mouse position from mouse initial click
    x = e.nativeEvent.offsetX - startX;
    innerSliderRef.current.style.left = `${x}px`;
    boundaries(x);
  };

  const mouseNotActiveHandler = () => {
    mainSliderRef.current.style.cursor = "grab";
    pressed = false;
  };

  const boundaries = (value) => {
    const inner = innerSliderRef.current.getBoundingClientRect();
    const outer = mainSliderRef.current.getBoundingClientRect();
    // prevent slider from moving when there is no element on the left
    if (value > 0) {
      innerSliderRef.current.style.left = "0";
    }
    // prevent slider from moving when there is no element on the right
    if (outer.right > inner.right) {
      console.log(inner.width - outer.width);
      innerSliderRef.current.style.left = `-${inner.width - outer.width}px`;
    }
  };

  return (
    <section className="feedback_main">
      <h1 className="feedback_header">What they've said</h1>

      <div
        className="slider"
        onMouseDown={mouseActiveHandler}
        onMouseUp={mouseNotActiveHandler}
        onMouseMove={mouseMovingHandler}
        ref={mainSliderRef}
      >
        <div
          className="feedback_content feedback_content_desktop"
          ref={innerSliderRef}
        >
          <Slider />
        </div>
      </div>
      <button className="get-started_btn">Get started</button>
    </section>
  );
};

export default FeedBack;
