import { aboutPage } from "../data";
import Camera from "../Assets/camera.png";

function About() {
  return (
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
  );
}

export default About;
