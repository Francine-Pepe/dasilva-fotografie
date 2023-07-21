import "../Styles/styles.sass";
import DarkLightMode from "./DarkLightMode";
import Navbar from "./Navbar/Navbar";

function Home() {
  return (
    <div className="home-container">
      <div className="home-background">
        <div className="home-navbar">
          <DarkLightMode />
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default Home;
