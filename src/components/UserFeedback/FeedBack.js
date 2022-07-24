import "./FeedBack.css";
import ali_pic from "../../assets/avatar-ali.png";
import anisha_pic from "../../assets/avatar-anisha.png";
import richard_pic from "../../assets/avatar-richard.png";
import shanai_pic from "../../assets/avatar-shanai.png";
import UserSlide from "./UserSlide";

const FeedBack = () => {
  const lol = (e) => {
    console.log(e.target.getBoundingClientRect());
  };

  return (
    <section className="feedback_main">
      <h1 className="feedback_header">What they've said</h1>

      <div className="slider">
        <div className="feedback_content" onScroll={lol}>
          <UserSlide
            class="first"
            image={anisha_pic}
            name="Anisha Li"
            content={`"Manage has superchanged our team's workflow. The ability to maintain visibilty on larger milestones at all times keeps everyone motivated."`}
          />

          <UserSlide
            class="second"
            image={ali_pic}
            name="Ali Bravo"
            content="We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused."
          />

          <UserSlide
            class="third"
            image={richard_pic}
            name="Richard Watts"
            content={`"Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone i talk to!"`}
          />

          <UserSlide
            class="four"
            image={shanai_pic}
            name="Richard Watts"
            content={`"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."`}
          />
        </div>
        <div className="slider_counter">
          <div className="slider-counter-box active"></div>
          <div className="slider-counter-box"></div>
          <div className="slider-counter-box"></div>
          <div className="slider-counter-box"></div>
        </div>
        <button className="get-started_btn">Get started</button>
      </div>
    </section>
  );
};

export default FeedBack;
