import { aboutPage } from "../data";
import Camera from "../Assets/camera.png";
import { motion as m } from "framer-motion";

function About() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <main className="about-container">
        {aboutPage.map((data, index) => {
          return (
            <div className="about-content" key={index}>
              <div className="about-img">
                <img src={data.image} alt={data.alt} />
              </div>
              <div className="about-text">
                <p>{data.text}</p>
                <div className="about-bg-image">
                  <img src={Camera} alt="camera" />
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </m.div>
  );
}

export default About;
