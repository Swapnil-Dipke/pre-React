import React from "react";

export default () => {
  //------- initial stage-----------
  // return React.createElement(
  //   "div",
  //   null,
  //   "Hello in demo component via node child stage 1"
  // );

  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "Hello in demo component via node child stage 2")
  // );

  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement(
  //     "h2",
  //     null,
  //     React.createElement("h3", null, " inside demo component 3 stage")
  //   )
  // );

  // return React.createElement(
  //   "div",
  //   { style: { backgroundColor: "yellow" } },
  //   React.createElement(
  //     "h1",
  //     { style: { backgroundColor: "red" } },
  //     "inside Demo Component With style object"
  //   )
  // );

  // return (
  //   <div>
  //     <div>
  //       <h1 style={{ backgroundColor: "red" }}> This is my Heading</h1>
  //       <h2 style={{ backgroundColor: "green" }}> This is my Sub-Heading </h2>
  //     </div>

  //     <div style={{ backgroundColor: "yellow" }}>
  //       <p style={{ backgroundColor: "orange" }}>This is my first Paragraph </p>

  //       <p style={{ backgroundColor: "blue" }}>This is my second Paragraph</p>
  //     </div>
  //   </div>
  // );

  return React.createElement(
    "div",
    { style: { backgroundColor: "white" } },
    React.createElement(
      "div",
      { style: { backgroundColor: "red" } },
      React.createElement(
        "h1",
        { style: { backgroundColor: "green" } },
        " my First Heading"
      ),
      React.createElement("h2", { style: { backgroundColor: "green" } }),
      "my sub heading"
    ),
    React.createElement(
      "div",
      { style: { backgroundColor: "yellow" } },
      React.createElement(
        "p",
        { style: { backgroundColor: "orange" } },
        " my first paragraph"
      ),
      React.createElement(
        "p",
        { style: { backgroundColor: "blue" } },
        "my second paragraph"
      )
    )
  );
};
