import Radium from "radium";

//independent no ned of external component of style.scss
//we have to create internal by const scss..

const RadiumDemo = () => {
  return (
    <>
      <div style={[styles.block]}>
        <h1> In radium Demo </h1>
        <button style={[styles.baseButton, styles.primaryButton]}>
          Primary Button
        </button>
        <br />
        <button style={[styles.baseButton, styles.secondaryButton]}>
          Secondary Button
        </button>
      </div>
    </>
  );
};

const styles = {
  block: {
    backgroundColor: "#557a95",
    color: " green",
  },
  baseButton: {
    backgroundColor: "white",
  },
  primaryButton: {
    backgroundColor: "#5d5c61",
  },
  secondaryButton: {
    backgroundColor: "#379683",
  },
};

export default Radium(RadiumDemo);
