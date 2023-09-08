import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

function ReturnToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div className="scroll-to-top">
        <button
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        >
          <Icon
            icon="icon-park-outline:to-top"
            color="#303030"
            width="30"
            height="30"
          />
        </button>
      </div>
    </>
  );
}

export default ReturnToTop;
