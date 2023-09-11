import { Icon } from "@iconify/react";
import "../Styles/styles.sass";

function LightMode() {
  return (
    <>
      <button>
        <Icon
          className="icon-lightmode"
          icon="ph:moon"
          width="25"
          height="25"
        />
      </button>
    </>
  );
}

export default LightMode;
