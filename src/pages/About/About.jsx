import "./about.scss";
import aboutImgTop from "../../assets/img/about/trzask_inside_top-1.jpg";

export default function About(props) {
  return (
    <div className="about">
      <section className="visual-header">
        <img src={aboutImgTop} alt="about-top-img" />
      </section>
    </div>
  );
}
