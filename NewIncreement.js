

import { useState } from "react"

export default (props) =>{
 return(
     <>
     <h1> in NewIncreement  Component</h1>
        value:{props.value}
        <button  onClick={props.onClickHandler}  > New Increement </button>

     </>
 )
}