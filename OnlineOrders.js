
import {useState} from "react";
import withOrders from "./withOrders";

const OnlineOrders = (props) =>{
      // value comes from wrappedComponent withorders via props
    const status = [
        "Order Placed",
        "Pending",
        "Preparing",
        "Out of Dilevery",
        "Delivered",
    ];


    // we  written the logic from wrapped component inside withOrders component
    // const [value, setValue] = useState(0);
    // const onClickHandler = () =>{
    //     setValue(value + 1);
    // };

    return(
        <>
        <h1> Online Orders</h1>
        <div>Cureent status : {status[props.value]}</div>
        <button onClick={props.onClickHandler}> next Status</button>
        </>
    )
}

export default withOrders(OnlineOrders);
    //  we have to bind the offline component with withOrders component