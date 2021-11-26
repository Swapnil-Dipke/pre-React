import logo from './logo.svg';
import './App.css';

import newFormComponent from './NewFormComponent';
import LifeCycle from './LifeCycle';
import LifeCycleUpdtae from './LifeCycleUpdate';
import NewFormComponent from './NewFormComponent';
import RefscallBack from './RefsExample';
import RefsExample from './RefsExample';
import DynamicClass from './DynamicClass';





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




//--------------- parent connects with both child account ---------------


// function App() {
 
//   return (
//    <>
//     <div>
//       <MyParentComponent1/>
//     </div>

//     </>
//   ); 
// }  
//  export default App;



//----------------   Conditional Rendering ------------------


//  function App() {
//  const name="swapnil";
//    return (
//     <>
//      <div>
//      From App
//      </div> 

//      {/* from conditional operator */}
//      {/* { name === "Swapnil" ? <TrueComponent/> : <FalseComponent/>     } */}


//     {/* from if block : if true excutes on RH else blank  */}
//     { name ==="wapnil" && <TrueComponent/>}
//      </>
//    ); 
//  }  
//   export default App;


//---------------- program of show and hide code ------------


  function App() {
  const name="swapnil";
    return (
     <>
      <div>
      From App
      </div> 

       <h1 className={"my-class"}> <p>
        using css
        </p>
        From App</h1>
{/* 
        <div className={"my-true-div"}> I am inside my true div </div>
       <div className={"my-false-div"}> I am inside my false div </div> */}
      
     
      <DynamicClass />
      {/* <newFormComponent/> */}
      {/* <LifeCycle/> */}

      {/* <LifeCycleUpdtae/> */}
     {/* <RefsExample/> */}
     {/* <RefscallBack/> */}
      {/* <NewFormComponent/> */}
      </>
    ); 
  }  
   export default App;


























