import React from "react";
import Container from "react-bootstrap/Container";

const styles = {
  h1: {
    color: "var(--orange)",
  },
};
function OurStory() {
  return (
    <Container>
      <h1 style={styles.h1}>Our Story</h1>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. At in tellus integer
        feugiat scelerisque varius morbi. Ullamcorper a lacus vestibulum sed
        arcu non odio euismod. Dis parturient montes nascetur ridiculus mus
        mauris vitae ultricies leo. Mi eget mauris pharetra et ultrices neque.
        Proin sed libero enim sed. Enim lobortis scelerisque fermentum dui
        faucibus in ornare quam. Tortor at risus viverra adipiscing at. Pretium
        fusce id velit ut tortor. Id neque aliquam vestibulum morbi blandit
        cursus risus. Aliquam malesuada bibendum arcu vitae elementum.
        Suspendisse interdum consectetur libero id. At consectetur lorem donec
        massa sapien faucibus et molestie ac. Vitae purus faucibus ornare
        suspendisse. Magnis dis parturient montes nascetur. Elit at imperdiet
        dui accumsan sit. Natoque penatibus et magnis dis. Fringilla phasellus
        faucibus scelerisque eleifend donec pretium vulputate sapien. In tellus
        integer feugiat scelerisque varius morbi enim nunc. Volutpat blandit
        aliquam etiam erat. Consequat id porta nibh venenatis. Sagittis purus
        sit amet volutpat consequat mauris nunc congue. Senectus et netus et
        malesuada fames ac turpis. Lacinia quis vel eros donec ac. Nulla
        porttitor massa id neque aliquam vestibulum morbi blandit cursus. Aenean
        pharetra magna ac placerat vestibulum lectus mauris ultrices. Eget dolor
        morbi non arcu risus quis varius quam quisque. Nunc mattis enim ut
        tellus. Pellentesque eu tincidunt tortor aliquam nulla. Accumsan sit
        amet nulla facilisi. Vulputate sapien nec sagittis aliquam malesuada
        bibendum arcu. Pulvinar mattis nunc sed blandit libero volutpat sed.
        Congue eu consequat ac felis donec. Tincidunt nunc pulvinar sapien et
        ligula ullamcorper. Neque sodales ut etiam sit amet nisl purus. Vitae
        elementum curabitur vitae nunc sed. In vitae turpis massa sed elementum
        tempus. Id venenatis a condimentum vitae. At tellus at urna condimentum
        mattis pellentesque id nibh. Consectetur lorem donec massa sapien
        faucibus et molestie ac. Sagittis orci a scelerisque purus semper eget
        duis. Tellus pellentesque eu tincidunt tortor. Turpis tincidunt id
        aliquet risus feugiat.
      </p>
      {/* <p>
        jayben moved to a small mountain town in colorado not long after
        graduating high school in 2013. he fell in love with the sunsets, great
        skiing, and even better hash. sabrina moved to colorado on a whim in
        2018, after driving through steamboat on a solo road trip. sabrina
        remembers meeting jayben,
        <span style={{ fontStyle: "italic" }}>the hot security guard</span>,
        while working at the front desk of the "grand" hotel.
      </p> */}
    </Container>
  );
}

export default OurStory;
// TODO: need to write copy for this page
// TODO: include pics from times mentioned (jay in steamboat 2014, sab in steamboat 2018)
