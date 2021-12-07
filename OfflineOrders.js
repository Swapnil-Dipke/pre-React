


import {useState} from "react";
import withOrders from "./withOrders";

const OfflineOrders = (props) =>{  
    // value comes from wrappedComponent withorders via props
    const status = [
        "order placed",
        "Preparing ...",
        "Serving..",
        "Bill  Payment"
    ];


    // we  written the logic from wrapped component inside withOrders component
    // const [value, setValue]= useState(0);

    // const onClickHandler = () =>{
    //     setValue(value + 1);
    // };


        return (
            <>
            <h1> Offline orders </h1>
            <div> Current Status : { status[props.value]}</div>
            <button onClick={props.onClickHandler}> next Status</button>
            </>
        )
    }
    export default withOrders(OfflineOrders);  
    //  we have to bind the offline component with withOrders component