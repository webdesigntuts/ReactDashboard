import styles from "./Analytics.module.scss";
import Line from "./Charts/Line";
import StackedColumns from "./Charts/StackedColumns";
import GroupedBars from "./Charts/GroupedBars";
import { Link } from "react-router-dom";
import { WiStars } from "react-icons/wi";
import { FaArrowRight } from "react-icons/fa";

const Statistics = ({ sum, percentage, title }) => {
  return (
    <div className={styles.statistic}>
      <div className={styles.overview}>
        <span className={styles.sum}>{sum}</span>
        <span
          className={`${styles.percentage} ${
            percentage > 7 ? styles.percetange_green : styles.percentage_orange
          }`}
        >{`${percentage > 0 ? "+" : ""}${percentage}%`}</span>
      </div>
      <h3 className={styles.statistic_title}>{title}</h3>
    </div>
  );
};

Statistics.defaultProps = {
  sum: 0,
  percentage: 0,
  title: " Lorem, ipsum.",
};

const Analytics = () => {
  return (
    <main>
      <div className={styles.title}>
        <h1>Analytics</h1>
        <WiStars />
      </div>
      <div className={styles.container}>
        {/* ANALYTICS */}
        <div className={styles.analytics}>
          <h2>Analytics</h2>
          <div className={styles.statistics}>
            <Statistics sum="42.3K" percentage={41} title="Unique Visitors" />
            <Statistics sum="25.6K" percentage={-2} title="Total Pageviews" />
            <Statistics sum="40%" percentage={10} title="Bounce Rate" />
            <Statistics sum="2.3m" percentage={-6} title="Visit Duration" />
          </div>
          <div className={styles.line}>
            <Line />
          </div>
        </div>

        {/* ACTIVE USERS */}
        <div className={styles.active_users}>
          <h2>Active Users</h2>
          <div className={styles.live_visitors}>
            <div className={styles.dot}></div>
            <span className={styles.num}>
              347
              <span className={styles.live}>Live visitors</span>
            </span>
          </div>
          <div className={styles.line}>
            <Line showData={false} background="rgb(240, 244, 248)" />
          </div>
          {/* TABLE */}
          <table>
            <thead>
              <tr>
                <th>
                  <div className={styles.left_col}>TOP PAGES</div>
                </th>
                <th>
                  <div className={styles.right_col}>ACTIVE USERS</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.table_body}>
                <th className={styles.txt_left}>preview.test.com/pro</th>
                <th className={styles.txt_right}>20</th>
              </tr>

              <tr className={styles.table_body}>
                <th className={styles.txt_left}>preview.test.com/pro</th>
                <th className={styles.txt_right}>20</th>
              </tr>

              <tr className={styles.table_body}>
                <th className={styles.txt_left}>preview.test.com/pro</th>
                <th className={styles.txt_right}>20</th>
              </tr>
            </tbody>
          </table>

          {/* SEE MORE */}
          <div className={styles.see_more}>
            <Link to="/analytics">
              <span>Real-Time Report</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Acquisition Channels */}
        <div className={styles.channels}>
          <h2>Acquisition Channels</h2>
          <div className={styles.stacked_columns}>
            <StackedColumns />
          </div>
        </div>

        {/* Audience Overview */}
        <div className={styles.audience}>
          <h2>Audience Overview</h2>
          <div className={styles.audience_overview}>
            <GroupedBars />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Analytics;
