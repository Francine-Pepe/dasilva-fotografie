import React from "react";

function FooterHome() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <footer className="footer">
        <section>
          <small>
            &copy; Copyright {getCurrentYear()} - Da Silva Fotografie
          </small>
        </section>
      </footer>
    </div>
  );
}

export default FooterHome;
