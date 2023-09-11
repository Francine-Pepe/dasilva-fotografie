import { Icon } from "@iconify/react";
import "../Styles/styles.sass";

function DarkMode() {
  return (
    <>
      <button>
        <Icon className="icon-darkmode" icon="ph:sun" width="25" height="25" />
      </button>
    </>
  );
}

export default DarkMode;
