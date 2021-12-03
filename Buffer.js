



import React, {Component} from "react";

export default  class Buffer extends Component{
    render(){
        return(
       <>
        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
       </>
        );
    }
}
