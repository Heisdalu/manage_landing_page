import "./OurService.css";

const OurService = () => {
  return (
    <div className="main_detail">
      <section className="main_detail_section">
        <h1 className="main_detail_title one">Track company-wide progress</h1>

        <p className="main_detail_content">
          See how your day-to-day tasks fit into the wider vision. Go from
          tracking progress at the milestone level all the way done to the
          smallest of details. Never lose sight of the biggest picture again.
        </p>
      </section>

      <section className="main_detail_section">
        <h1 className="main_detail_title two">Advanced built-in reports</h1>

        <p className="main_detail_content">
          Set internal delivery estimates and track progress toward company
          goals. Our customisable dashboard helps you build out the reports you
          need to keep stakeholders informed.
        </p>
      </section>

      <section className="main_detail_section">
        <h1 className="main_detail_title three">
          Everything you need in one place
        </h1>
        <p className="main_detail_content">
          Stop jumping from one service to another to communicate, store files,
          track tasks and share documents. Manage offers an all-in-one team
          productivity solution.
        </p>
      </section>
    </div>
  );
};

export default OurService;
