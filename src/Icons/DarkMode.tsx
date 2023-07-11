import { Icon } from "@iconify/react";
import "../Styles/styles.sass";

function DarkMode() {
  return (
    <>
      <div className="dark">
        <button>
          <Icon icon="gg:dark-mode" color="#ffffff" width="25" height="25" />
        </button>
      </div>
    </>
  );
}

export default DarkMode;
