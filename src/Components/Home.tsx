import "../Styles/styles.sass";

function Home() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="home-container">
      <div className="home-background">
        <div className="home-navbar">
          <footer className="footer-home">
            <section>
              <small>
                &copy; Copyright {getCurrentYear()} - Da Silva Fotografie
              </small>
            </section>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Home;
