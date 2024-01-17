import "../Styles/styles.sass";
import { motion as m } from "framer-motion";

function Home() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <main className="home-container">
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
      </main>
    </m.div>
  );
}

export default Home;
