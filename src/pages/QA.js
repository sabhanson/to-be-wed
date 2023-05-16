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
        <span style={styles.span}>The ceremony will start at 4:30pm. We plan to rock on until 10:30pm.</span>
      </li>
      <li style={styles.ul} className="list-group-item">
        Are kids allowed? <br />
        <span style={styles.span}>Sorry, no!</span>
      </li>
      <li style={styles.ul} className="list-group-item">
        What's the dress code?<br />
        <span style={styles.span}>
          Think "colorful garden party". Obviously no white (hehe). 
        </span>
      </li>
      <li style={styles.ul} className="list-group-item">
        What's the venue like? <br />
        <span style={styles.span}>
          There will be grass and concrete to walk on, so consider your shoes. The wedding
          will be mainly outside and the weather will likely be warm
          that day.
        </span>
      </li>
      <li style={styles.ul} className="list-group-item">
        Where can I park?<br />
        <span style={styles.span}>
          There will not be any parking directly at the venue. Ride share and Uber/Lyft are strongly recommended. Please view the RSVP form to learn more about parking options.
        </span>
      </li>
    </ul>
  );
}

export default QA;
