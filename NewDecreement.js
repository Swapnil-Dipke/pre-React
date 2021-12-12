import { useState } from "react";

export default (props) =>{
    return(
        <>
        <h1> in New Decreemnet component </h1>
        value:{props.value}
        <button onClick={props.onClickHandler}> New Decreement </button>
        </>
    )
}