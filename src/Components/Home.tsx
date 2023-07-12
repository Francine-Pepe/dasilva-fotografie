import "../Styles/styles.sass";
import DarkLightMode from "./DarkLightMode";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="home-container">
      <div className="home-background">
        <div className="home-navbar">
          <Navbar />
        </div>
        <DarkLightMode />
      </div>
    </div>
  );
}

export default Home;
