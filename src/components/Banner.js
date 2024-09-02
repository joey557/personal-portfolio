import Typewriter from "./Typewriter.js";
import ComputerImg from "../assets/img/computer3.png";
import "../App.css";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <div className="banner-left">
        <Typewriter text="Hi, I am Zuyi Huang." />
        <p style={{ width: "70%", lineHeight: "1.8" }}>
          Welcome to my personal website! <br />I am deeply interested in coding
          and technology, and this site is a reflection of my ongoing journey
          into this exciting field. Each small project here helps me sharpen my
          skills and gives me insights into the potential applications of
          technology. Take a look around to see what I've been working on!
        </p>
      </div>
      <div>
        <img
          src={ComputerImg}
          alt="Comupter Img"
          style={{ width: "75%", height: "80%" }}
        />
      </div>
    </section>
  );
};
