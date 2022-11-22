import React from "react";
import { Container } from "react-bootstrap";

const styles = {
  h1: {
    color: "var(--purple)",
  },
};
function Registry() {
  return (
    <Container>
      <h1 style={styles.h1}>Registry</h1>
      <p className="text-white">Check back later.</p>
      {/* <p className="text-white">
        If you know me (Sabrina), you should know I am a major thrifter/hoarder.
        In simple terms, we own every single item that we could possibly need
        and fit in our house. We are not registered for gifts anywhere, as we
        would prefer monetary gifts. No pressure. Most importantly, we just
        wanna see your faces and dance with you! if you know sabrina, you know
        she's a major hoarder. we have so much stuff it's overflowing out of
        every cabinet in our apartment. in leiu of physical gifts, we would love
        a hand-written card,
      </p> */}
    </Container>
  );
}

export default Registry;
// TODO: finish copy on this page.
