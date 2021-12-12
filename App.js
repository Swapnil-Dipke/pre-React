import logo from "./logo.svg";
import "./App.css";
// import Person from './Person';
// import PersonList from './PersonList';
import Course from "./Course";
import ClassComponentConversion from "./ClassComponentConevrsion";
import FunctionalComponent from "./FunctionalComponent";
import OnlineOrders from "./OnlineOrders";
import OfflineOrders from "./OfflineOrders";
import HooksSample from "./HooksSample";
import RefParent from "./RefParent";
import PortalDemo from "./PortalDemo";
import ProfilerDemo from "./ProfilerDemo";
import HookSampleUser from "./HookSampleUser";

import PropsComponent from "./PropsComponent";
import Increementer from "./Increementer";
import Increement from "./Increement";
import NewIncreement from "./NewIncreement";
import Decrementer from "./Decrementer";
import Decreement from "./Decreement";
import NewDecreement from "./NewDecreement";
import DemoComponent from "./DemoComponent";
import Reconcillation from "./Reconcillation";
import PersonForm from "./PersonForm";
import PersonList from "./PersonList";
import Person from "./Person";

function App() {
  const onClickhandler = () => {
    console.log("Clicked");
  };

  return (
    <div className="App" onClick={onClickhandler}>
      {/*     -------------------- 12/12/2021 -----------------

RENDER PROPS ----------------


<PropsComponent
render={(someValue) => {return "oldValue" + someValue}}
/> */}
      {/* 
< Increementer 
    render={(value, onClickHandler) =>{
      return<Increement value={value}  onClickHandler={onClickHandler} />
    }}
/>


<Increementer 
        render={(value, onClickHandler)=>{
          return<NewIncreement  value={value} onClickHandler={onClickHandler} />
        }}
/>

<br/> <br/>
<Decrementer 
        render={(value, onClickHandler)=>{
          return<Decreement  value={value} onClickHandler={onClickHandler} />
        }}
/>


<Decrementer 
        render={(value, onClickHandler)=>{
          return<NewDecreement  value={value} onClickHandler={onClickHandler} />
        }}
/>



//----------- RENDER PROPS BY CREATE ELEMENT----------------
*/}
      {/*
      --------------------------------- RENDER
      <DemoComponent /> */}

      {/* <Reconcillation /> */}

      {/* <HookSampleUser /> */}
      {/* <HooksSample /> */}

      {/* <ProfilerDemo /> */}

      {/* <PortalDemo /> /}

    



    {/* <RefParent /> */}
      {/* <HooksSample /> */}

      {/* <Person /> */}
      <br />
      <br />
      <br />
      <br />
      {/* <Course /> */}

      {/* <ClassComponentConversion /> */}
      {/* <FunctionalComponent /> */}

      {/* <OnlineOrders /> */}
      {/* <OfflineOrders /> */}

      <Person />

      {/* <PersonForm />
      <PersonList /> */}
    </div>
  );
}

export default App;
