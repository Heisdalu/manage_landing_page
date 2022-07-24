import { useRef } from "react";
import "./UserSlide.css";

const UserSlide = (props) => {
const InputRef= useRef(); 

console.log(InputRef);

  return (
    <section ref={InputRef}  className={`user_feedback ${props.class}`}>
      <figure className="user_pic">
        <img src={props.image} alt="" />
      </figure>
      <h2 className="user_name">{props.name}</h2>
      <p className="user_testimony">{props.content}</p>
    </section>
  );
};

export default UserSlide;
