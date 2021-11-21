import { Component } from "react";


class MyChildComponent1 extends Component {


    state = {
        balance: 0,
    }


    onChildProfit = () => {
        this.setState({balance: this.state.balance+1})
  
    }
  
  
    onChildLoss = () => {
      this.setState({balance: this.state.balance-1})
      
  }
  







    render(){
        
        const  {name , onProfit , onLoss }= this.props;

        const onProfitClick =()=> {
                this.onChildProfit();
                onProfit();
                
            }
            const onLossClick=()=> {
                if(this.state.balance === 0) {
                    return;
                }

                this.onChildLoss();
                onLoss();             
            }  

        
        return(<>           
            <div> {name}  balance : {this.state.balance}</div>


            <button onClick={onProfitClick}> increement </button> 

            <button onClick={onLossClick}> Decreement </button> 





            {/* <button onClick={onProfit}> increement </button>  
            <button onClick={onLoss} > Expences </button> */}


          </>
        );
    }
}

export default MyChildComponent1;