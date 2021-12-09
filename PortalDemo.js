//  import reactDom from "react-dom";
 
//  export default () =>{

//     return reactDom.createPortal(
//         <h1> In Portal demo </h1>,
//         document.getElementById("root-porttal")
//     );
//  }

 import reactDom from 'react-dom';

export default () => {
  //return <h1>in portal<h1>;
  return reactDom.createPortal(
    <h1>In Portal Demo</h1>,
    document.getElementById('root-portal')
  );
};