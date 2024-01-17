import "../Styles/styles.sass";
import Filter from "./Filter";
import { motion as m } from "framer-motion";

function Work() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <main className="work-container" >
        <div className="main-containers">
          <Filter />
        </div>
      </main>
    </m.div>
  );
}

export default Work;
