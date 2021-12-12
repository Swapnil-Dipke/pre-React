import { useState } from "react";


export default( props) =>{
        // onst [value, setValue] =useState(0);

        // const onClickhandler = () =>{
        //     setValue(setValue+1)
        // }

    return(
        <>
        <h1>  In Increement  </h1>
        value : {props.value}
        <button onClick={props.onClickHandler} >  Increement </button>



        </>
    )
}