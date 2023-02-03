import React from "react";
import { Container } from "react-bootstrap";

const styles = {
  h1: {
    color: "var(--purple)",
  },
  p: {
    fontSize: "18px",
    padding: "10px 20px",
  },
};
function Registry() {
  return (
    <>
      <h1 style={styles.h1}>Registry</h1>
      <Container>
        <p style={styles.p} className="text-white">
          If you know me (Sabrina), you should know I am a major
          thrifter/hoarder. In simple terms, we have so much stuff it's
          overflowing out of every cabinet in our apartment. We are not
          registered for gifts anywhere, as we would prefer not to receive them.
          We mostly just want to see your faces and dance with you! In lieu of
          physical gifts, we would love a hand-written card, monetary gift, or
          your presence alone.
        </p>
      </Container>
    </>
  );
}

export default Registry;
