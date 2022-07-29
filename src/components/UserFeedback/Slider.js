import UserSlide from "./UserSlide";
import ali_pic from "../../assets/avatar-ali.png";
import anisha_pic from "../../assets/avatar-anisha.png";
import richard_pic from "../../assets/avatar-richard.png";
import shanai_pic from "../../assets/avatar-shanai.png";

const Slider = () => {
    return (
      <>
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
      </>
    );
}

export default Slider;