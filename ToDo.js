import { Component } from "react";
import axios, { Axios } from "axios";

export class ToDo extends Component{

    state = {
        todo :[],

        toDoObject:{
            title: "",
            body: "",
            userId: "1",
        }
    }

ondeleteHandler= (id) =>{
    axios.delete("https://jsonplaceholder.typicode.com/todos/" +id).then((response)=>{
        console.log(response);
        this.fetchData();
        alert(" Deleted successfylly   :)")
       
    });
}

onChangeHandler=(event)=>{
    const { name, value } = event.target;
    const toDoObjectCopy = this.state.toDoObject;
    toDoObjectCopy[name] = value;
    this.setState({ toDoObject: toDoObjectCopy });

}

onsubmitHandler = (event) =>{
    event.preventDefault();
    console.log(this.state);

    axios.post("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
       
        this.setState({
            toDoObject: {
                title: "",
                body: "",
                userID :"1",
              },
        })


    });


}


    render(){
       
        return(
            <div>
            <div> I ma  inside ToDo Component </div>

            <form onSubmit={this.onsubmitHandler}>
                <label> Title 1 </label>
                <input 
                type="text"
                value={this.state.toDoObject.title}
                />

                <label> Body 2 </label>
                <input 
                type="text"
                value={this.state.toDoObject.body}
                />

                <button type="submit"> submit </button>
            </form>





            {this.state.todo.map((todo,index)=>{
                return (
                    <>
                  <div key={index}>
                    {index + 1},{todo.title}
                  </div>
                  <button onClick={() => {this.ondeleteHandler(todo.id)}}>Delete</button>
                  </>
                );
            })}
            </div>
        );
        
    }


    componentDidMount(){
        this.fetchData();
    }

fetchData() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.setState({ todo: response.data });
    });
}
}
