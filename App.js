//import logo from './logo.svg';
import './App.css';
import ConditionalCompoent from './ConditionalComponent';
import FalseComponent from './FalseComponent';
import MyParentComponent1 from './MyParentComponent1';
import TrueComponent from './TrueComponent';
//import MyChildComponent1 from './MyChildComponent1';





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


  // function App() {
  // const name="swapnil";
  //   return (
  //    <>
  //     <div>
  //     From App
  //     </div> 

  //    <ConditionalCompoent/>

  //     </>
  //   ); 
  // }  
  //  export default App;





  import logo from './logo.svg';
  import './App.css';
  import ListComponent from './ListComponent';
  
  function App() {
    return (<>
  
    <ListComponent/>
    </>
  
    );
  }
  
  export default App;




















