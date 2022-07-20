import "./MainDetail.css";
import OurService from "./OurService";

const MainDetail = () => {
  return (
    <div className="main">
      <section className="about_manage">
        <h1 className="main_header">What's different about Manage?</h1>
        <p className="main_content">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </section>

      <OurService />
    </div>
  );
};
export default MainDetail;
