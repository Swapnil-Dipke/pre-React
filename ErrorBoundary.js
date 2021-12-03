import { Component } from "react";

 export default class ErrorBoundary extends Component{
     state = {
         hasError:false,
     };

     static getDerivedStateFromError(error){
            return{
                hasError:false,
            }
     }


     componentDidCatch(error, info){
        console.log(error);
        console.log(info);
    }

        render(){
            if(this.state.hasError){
                return<h1> Spmething went WRONG please check</h1>
            } else {
                 return this.props.children;
            }
        }

 }