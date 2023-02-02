import React from "react";
const styles = {
  span: { color: "white" },
  ul: {
    fontSize: "18px",
    color: "var(--yellow)",
    backgroundColor: "transparent",
    padding: "10px 20px",
  },
};
function QA() {
  return (
    <ul style={styles.ul} className="list-group list-group-flush">
      <li style={styles.ul} className="list-group-item">
        What time of the day? <br />
        <span style={styles.span}>The wedding will start around 5pm.</span>
      </li>
      <li style={styles.ul} className="list-group-item">
        Are kids allowed? <br />
        <span style={styles.span}>Sorry, no!</span>
      </li>
      <li style={styles.ul} className="list-group-item">
        What's the venue like? <br />
        <span style={styles.span}>
          There will be grass to walk on, so consider your shoes. The wedding
          will be held outside in the middle of August. It will likely be warm
          that day.
        </span>
      </li>
    </ul>
  );
}

export default QA;
