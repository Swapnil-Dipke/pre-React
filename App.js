import logo from "./logo.svg";
import "./App.css";
import "./Style.scss";
import HookSampleUser from "./HookSampleUser";
// import SassDemo from "./SassDemo";
import RadiumDemo from "./RadiumDemo";
import FlowDemo from "./FlowDemo";
import TestComponent from "./TestComponent";

function App() {
  // const onClickhandler = () => {
  //   console.log("Clicked");
  // };

  return (
    <div className="App">
      {/* <SassDemo /> */}
      {/* <RadiumDemo /> */}

      {/* <FlowDemo /> */}
      <TestComponent name={"   SwaPniL"} />
    </div>
  );
}

export default App;
