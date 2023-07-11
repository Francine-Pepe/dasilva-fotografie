import { Icon } from "@iconify/react";
import "../Styles/styles.sass";

function LightMode() {
  return (
    <>
      <div className="light">
        <button>
          <Icon icon="gg:dark-mode" color="#ffffff" width="25" height="25" />
        </button>
      </div>
    </>
  );
}

export default LightMode;
