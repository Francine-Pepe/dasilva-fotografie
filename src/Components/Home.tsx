import "../Styles/styles.sass";
import DarkLightMode from "./DarkLightMode";

function Home() {
  return (
    <div className="home-container">
      <div className="home-background">
        <DarkLightMode />
      </div>
    </div>
  );
}

export default Home;
