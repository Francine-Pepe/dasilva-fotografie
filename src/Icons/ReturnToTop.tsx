import { useState } from "react";
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
            width="30"
            height="30"
            className="icon-return-to-top"
          />
        </button>
      </div>
    </>
  );
}

export default ReturnToTop;
