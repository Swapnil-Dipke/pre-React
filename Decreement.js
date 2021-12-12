import { useState } from "react";


export default( props) =>{

    return(
        <>
        <h1>  In decreement  </h1>
        value : {props.value}
        <button onClick={props.onClickHandler} >  Decreement </button>



        </>
    )
}