



// function MyFirstComponent(){

//     return <h2> I am inside  MyfirstComponent</h2>;
// }

// export default MyFirstComponent;



//-----Date 19-11-21   toipic : props ------------------

// function MyFirstComponent(props) {
//     const {name, age, address, pincode} = props;
//     console.log(name);
//     console.log(age);
//     console.log(address);
//     console.log(pincode)
//     return (
//         <>
//         <h2>
//         Hello i am {name}, i am {age} yrs old 
//         <h3>and I am inside MyfirstComponet i am from {address}, having {pincode}</h3>
//          </h2>
//          <h2>
      

//         </h2>
//         </>
//     );


// }

// export default MyFirstComponent;



//------------ using prop via {children}-----------------

// function MyFirstComponent(props) {
//     const {name, age, address, pincode, children } = props;
//     console.log(name);
//     console.log(age);
//     console.log(address);
//     console.log(pincode)
//     return (
//         <>
//         <h2>
//         Hello i am {name}, i am {age} yrs old 
//         <h3>and I am inside MyfirstComponet i am from {address}, having {pincode}</h3>
//          </h2>
//          {children}
//          <h2>
                
//         </h2>
//         </>
//     );


// }

// export default MyFirstComponent;


//------------ coding gaming ----------------
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";

function MyFirstComponent(props) {
   
    const {parentComponentName} = props;
    return (
        <>
        <h2>
        Inside MyFirstCompontnt {parentComponentName}
         </h2>

         <FirstChild parentComponentName={"MyFirstComponent"}/>
         <SecondChild parentComponentName={"MyFirstComponent"}/>
         <ThirdChild parentComponentName={"MyFirstComponent"}/>
        
        </>
    );
}
export default MyFirstComponent;











