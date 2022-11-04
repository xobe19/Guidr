import styles from "../styles/ActivityGraph.module.css";

const ActivityGraph = () => {
  function createBoxes() {
    const boxes = [];
    for (var i = 1; i < 365; i++) {
      const level = Math.floor(Math.random() * 3);
      boxes.push(<li data-level={level}></li>);
    }
    return boxes;
  }

  return (
    <div className={styles.graph}>
      <ul className={styles.months}>
        <li>Jan</li>
        <li>Feb</li>
        <li>Mar</li>
        <li>Apr</li>
        <li>May</li>
        <li>Jun</li>
        <li>Jul</li>
        <li>Aug</li>
        <li>Sep</li>
        <li>Oct</li>
        <li>Nov</li>
        <li>Dec</li>
      </ul>
      <ul className={styles.days}>
        <li>Sun</li>
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
      </ul>
      <ul className={styles.squares}>{createBoxes()}</ul>
    </div>
  );
};

export default ActivityGraph;
