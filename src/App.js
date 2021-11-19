import logo from './logo.svg';
import './App.css';

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






//import MyFirstComponent from "./MyFirstComponent";
//import MySecondComponent from "./MySecondComponent";

// import MyThirdComponent from "./MyThirdComponent";
// import MyFourthComponent from "./MyFourthComponent";



// <div>
//   <h1>Hello {name && name.length ? name : "world"}</h1>
// </div>

// import MyThirdComponent from './MyThirdComponent';



// function App(){
// //  const name="ankur";
 // return (
//     <div>
//       {/* <h1>  HEllo World</h1> */}
//       {/* <h1>Hello {name} </h1> */}
//       {/* <MyFirstComponent /> */}
//       {/* <MySecondComponent/> */}
// {/* 

        //  <MyThirdComponent /> 
          
     



//     </div>
//   );
// }



// export default App; */}



//----  19-11-21   props by using key value pair-------------------

// import MyFirstComponent from './MyFirstComponent';
// import MySecondComponent from "./MySecondComponent";

// function App(){
//   const name="ankur";
//   const address="vaishali nagar mouda"
//   const schoolAddress="DCPS mouda"
//   const schoolName="DCPS"
//   return (
//     <div>
//       <h1> Hello {name && name.length ? name : "World"}</h1>
//     <MyFirstComponent name={name} age = {25} address={address}  pincode={41104}  />

//     <MySecondComponent schoolName={schoolName} since={1950} schoolAddress={schoolAddress} pincode={441104}/>  
//     <h2>some data passed from App content via children w/o key value pair</h2>
//     </div>


//   );
// }
// export default App;



//----- props data fetch via using children -----------------------

// import MyFirstComponent from './MyFirstComponent';
// import MySecondComponent from "./MySecondComponent";




// function App(){
//   const name="ankur";
//   const address="vaishali nagar mouda"
//   //const schoolAddress="DCPS mouda"
//   //const schoolName="DCPS"
//   return (
//     <div>
//       <h1> Hello {name && name.length ? name : "World"}</h1>
//     <MyFirstComponent name={name} age = {25} address={address}  pincode={41104}>
    
//     {/* we introduce div or any elements without key value pair by using {children} */}

//     <div>some data passed from App content via children w/o key value pair </div>
//     <div> by h2 tag using children</div>
//     <div> </div>
//     </MyFirstComponent>

//     {/* <MySecondComponent schoolName={schoolName} since={1950} schoolAddress={schoolAddress} pincode={441104}/> */}  
//     </div>
//   );
// }
// export default App;



//---------- coding gaming --------------

import MyFirstComponent from './MyFirstComponent';
import MySecondComponent from "./MySecondComponent";
import MyThirdComponent from "./MyThirdComponent";



function App(){

  const name="ankur";
  const address="vaishali nagar mouda"
  
  return (
    <div>
     
    <MyFirstComponent parentComponentName={"App"}>  
       <div> i am inside my App MyFirstComponent fro app</div>
    </MyFirstComponent>


    <MySecondComponent  parentComponentName={"App"}>  
       <div> i am inside my App MySecondComponent from app</div>
    </MySecondComponent>

    <MyThirdComponent  parentComponentName={"App"}>  
       <div> i am inside my App MyThirdComponent fro</div>
    </MyThirdComponent>


    {/* <MySecondComponent schoolName={schoolName} since={1950} schoolAddress={schoolAddress} pincode={441104}/> */}  
    </div>
  );
}

export default App;





























