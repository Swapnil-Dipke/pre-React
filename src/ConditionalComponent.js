import { Component } from "react";



class ConditionalCompoent extends Component{


    state = {
      showText :  true ,
    }

    onToggleShowText=()=>{
        {this.setState({showText :! this.state.showText})}


    }
  



   
    render(){
        

        return(<>       

           { this.state.showText && <h1> I m from condtional component</h1>}

          
          
            <button onClick={this.onToggleShowText}> { this.state.showText ? "HIDE" : "SHOW" }  </button>
           

          </>
        );
    }





}
export default  ConditionalCompoent;