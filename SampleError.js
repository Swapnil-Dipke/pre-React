import { Component } from "react";


export default class SampleError extends Component {
myArr = [1,2,'third','fourth'];
render(){
    return <h1> in SampleError {this.myArr[3].toString()}</h1>
}
}