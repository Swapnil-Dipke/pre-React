


// -------------step1----------------
// function MySecondComponent(){

//     return <h2> I am inside  MySecondComponent step-1</h2>;
// }

//export default MySecondComponent;




//---------step 2 ----------------------------
// const MySecondComponent = () => {      // MysecondComponent name should be same in App.js file
//     return <h2>I am inside MySecondComponent via step-2</h2>
// }
// export default MySecondComponent;




//----------step 3 -------------------------------
//export default() =>{
//    return <h2>I ma inside second MySecondComponent via step-3</h2>
//}



//------ date: 19-11-21  topic : props fetching data via key value pairs----------------------


// function MySecondComponent(props2) {
//     const {schoolName, since, schoolAddress, pincode} = props2;
//     console.log(schoolName);
//     console.log(since);
//     console.log(schoolAddress);
//     console.log(pincode)
//     return (
//         <>
//         <h2>
//         My school name is  {schoolName}, it is running from  {since} yrs old 
//         <h3>and I am inside Knowledge temple from {schoolAddress}, having {pincode}</h3>
//          </h2>
//          <h2>
      

//         </h2>
//         </>
//     );


// }

// export default MySecondComponent;

//----- coding gaming -------------------

import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";

function MySecondComponent(props) {
   
    const { parentComponentName } = props;
    return (
        <>
        <h2>
        Inside MySecondCompontnt{parentComponentName}
         </h2>

         <FirstChild parentComponentName={"MySecondComponent"}/>
         <SecondChild parentComponentName={"MySecondComponent"}/>
         <ThirdChild parentComponentNamearentComponent={"MySecondComponent"}/>
        
        </>
    );
}
export default MySecondComponent;










