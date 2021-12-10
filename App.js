import logo from './logo.svg';
import './App.css';
// import Person from './Person';
// import PersonList from './PersonList';
import Course from './Course';
import ClassComponentConversion from './ClassComponentConevrsion';
import FunctionalComponent from './FunctionalComponent';
import OnlineOrders from './OnlineOrders';
import OfflineOrders from './OfflineOrders';
import HooksSample from './HooksSample';
import RefParent from './RefParent';
import PortalDemo from './PortalDemo';
import ProfilerDemo from './ProfilerDemo';
import HookSampleUser from './HookSampleUser';

function App() {

  const onClickhandler = () =>{
    console.log("Clicked");
  };

  return (
    <div className="App" onClick={onClickhandler}>
    


    {/* <HookSampleUser /> */}
    <HooksSample />


    {/* <ProfilerDemo /> */}
    
    I am inside App Component 
    {/* <PortalDemo /> /}

    



    {/* <RefParent /> */}
    {/* <HooksSample /> */}

     {/* <Person /> */}
     <br/><br/><br/><br/>
     {/* <Course /> */}

     {/* <ClassComponentConversion /> */}
     {/* <FunctionalComponent /> */}

 
     {/* <OnlineOrders /> */}
     {/* <OfflineOrders /> */}
    </div>
  );
}

export default App;
