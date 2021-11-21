import { Component } from "react"
import MyChildComponent1 from "./MyChildComponent1"




class MyParentComponent1 extends Component{ 






    state = {
        balance: 0,
    }


  onProfit = () => {
      this.setState({balance: this.state.balance+1})

  }


  onLoss = () => {
      if(this.state.balance === 0) {
          return;
      }
    this.setState({balance: this.state.balance-1})

}





render(){
    return (
      <>
        <div> Family Balance:  {this.state.balance} </div>

        <button onClick={this.onProfit} >Family Profit</button>
        &nbsp;&nbsp;&nbsp;

        <button onClick={this.onLoss} >Family Expences</button>
        
        <br/>
        <br/>


        <MyChildComponent1 name={'Swapnil'} onProfit={this.onProfit} onLoss={this.onLoss}/>
        <MyChildComponent1 name={'Aniket'} onProfit={this.onProfit} onLoss={this.onLoss}/>
         


      </>
    );
}

}
export default MyParentComponent1;