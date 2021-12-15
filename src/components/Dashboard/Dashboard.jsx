import styles from "./Dashboard.module.scss";
import Spline from "./Charts/Spline";
import Columns from "./Charts/Columns";
import Pie from "./Charts/Pie";
import Activity from "./Charts/Activity";
import Income from "./Charts/Income";

import People1 from "../../pics/people1.jpg";
import People2 from "../../pics/people2.jpg";
import People3 from "../../pics/people3.jpg";
import People4 from "../../pics/people4.jpg";

import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineWavingHand } from "react-icons/md";
import { GoPlus } from "react-icons/go";
const Dashboard = () => {
  return (
    <main className={styles.container}>
      <div className={styles.welcome}>
        <h1>
          Good afternoon , WebDesign.
          <MdOutlineWavingHand />
        </h1>
        <p>Here is what’s happening with your projects today:</p>
      </div>
      <div className={styles.calendar}>
        <div className={styles.people}>
          <div className={styles.img_container}>
            <img src={People1} alt="people" />
          </div>
          <div className={styles.img_container}>
            <img src={People2} alt="people" />
          </div>
          <div className={styles.img_container}>
            <img src={People3} alt="people" />
          </div>
          <div className={styles.img_container}>
            <img src={People4} alt="people" />
          </div>
          <div className={styles.img_container}>
            <AiOutlinePlus />
          </div>
        </div>
        <div className={styles.options}>
          <button>
            Add view <GoPlus />
          </button>
        </div>
      </div>
      <div className={styles.charts}>
        <div className={styles.lines}>
          <Spline title="Program Plus" sales="45,234" percentage="1.8" />
        </div>

        <div className={styles.lines}>
          <Spline title="Program Advanced" sales="51,274" percentage="-1.2" />
        </div>

        <div className={styles.lines}>
          <Spline title="Program Professional" sales="15,430" percentage="15" />
        </div>

        <div className={styles.columns}>
          <Columns />
        </div>

        <div className={styles.pie}>
          <Pie />
        </div>

        <div className={styles.activity}>
          <Activity />
        </div>

        <div className={styles.income}>
          <Income />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
