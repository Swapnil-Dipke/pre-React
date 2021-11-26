import React, { Component } from "react";

export default class RefscallBack extends Component{ 
        constructor(){
            super();
            this.inputRef = null;
        }
        render(){
            return (
                <>
                    <h1> In RefscallBack </h1>
                    <input type="text" ref={(ref) =>{
                        this.inputRef = ref;
                    }}/>
                </>
               );
        }

        componentDidMount(){
            console.log(this.inputRef.current);
            this.inputRef.current.focus();
        }

}