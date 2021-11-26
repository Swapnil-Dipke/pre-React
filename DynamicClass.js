import React, { Component } from "react";


export default class DynamicClass extends Component{

    state = {
        isTrue :true,
        colorList:["red","yellow","blue","green","orange","violet","indigo"],
        incrementer: 0,
    }

    onClickHandler=()=>{
        {this.setState({isTrue :! this.state.isTrue})}
    }

    onUpdateClickHandler=()=>{
        console.log(" in handler ");
        console.log((this.state.incrementer +1)% 7);
        this.setState({incrementer : (this.state.incrementer + 1)% 7})

       
    };
    

     render(){
            return (
                <>
                    <h1> In Dynamic Class </h1>
                    
                    {/* <div className=  {this.state.isTrue ?  "my-true-div" : "my-false-div"}> In a div with {this.state.isTrue ? "true" : "false"} condition </div>
                    <div style={{ color: "red",backgroundColor : "yellow"}}> In a dynamic style div</div> */}
                    
                    {/* <button onClick={this.onClickHandler}>Toggle </button>. */}
                    <button onClick={this.onUpdateClickHandler}>Toggle </button>
                    <div style={{backgroundColor : this.state.colorList[this.state.incrementer],
                    }}> In a dynamic style div</div>
                </>
               );
        }





}