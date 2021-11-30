import React, { Component } from "react";
import axios from "axios";

export default class ToDo extends Component {
  state = {
    todo: [],
    todoObject: {
      title: "",
      id: "",
      userId: 1,
      completed: false,


        	
// userId	1
// id	1
// title	"delectus aut autem"
// completed





    },
  };

  onDeleteClickHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((response) => {
        console.log(response);
        this.fetchData();
        alert("Deleted");
      });
  };

  onEditClickHandler = (id) => {
    const editObject = this.state.todo.find((todo) => todo.id === id);
    if (editObject) {
      this.setState({ nameObject: editObject, isEditMode: true });
    }
  };

  onChangeHandler = (event) => {

    const { name, value } = event.target;
    const nameObjectCopy = this.state.nameObject;
    nameObjectCopy[name] = value;
    this.setState({ nameObject: nameObjectCopy, isEditMode: true });
  };

  onCancelClickhandler = (event) => {
    event.preventDefault();
    this.resetState();
  };

  resetState = () => {
    this.setState({
      todoObject: {
        title: "",
        id: "",
        userId: 1,
      },
      completed: false,
    });
  };


  //-------- to manupulate the default transaction of submit button in <form>-------------

  onFormSubmitClick = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (this.state.completed) {   //if editMode is active, it goes inside  if loop
      axios
        .put(
          "https://jsonplaceholder.typicode.com/todos/" +
            this.state.todoObject.id,
          this.state.todoObject
        )
        .then((response) => {
          console.log(response);
          this.fetchData();
          alert("Updated");
          this.resetState();
        });
    } 
    else {      // or else it  perfomes the as ususual  code 
      axios
        .post(
          "https://jsonplaceholder.typicode.com/todos/",
          this.state.todoObject
        )
        .then((response) => {
          console.log(response);
          this.fetchData();
          alert("Created");
          this.setState({
            todoObject: {
              title: "",
              id: "",
              userId: 1,
            },
          });
        });
    }
  };

  // rendering the method it returns Jsx.
  render() {
    return (
      <div>
        <h1>Inside todo Object</h1>
        <form onSubmit={this.onFormSubmitClick}>
          <label>Title</label>
          <input
            name="title"
            value={this.state.todoObject.title}
            onChange={this.onChangeHandler}
          />
          <label>Body</label>
          <input
            name="body"
            value={this.state.todoObject.id}
            onChange={this.onChangeHandler}
          />
          <button type="submit">
            {this.state.completed ? "Update" : "Submit"}
          </button>
          <button onClick={this.onCancelClickhandler}>Cancel</button>
        </form>


        {this.state.todo.map((todo, index) => {
          return (
            <div key={index}>
              {index + 1},{todo.title}
              <br />
              <button
                onClick={() => {
                  this.onDeleteClickHandler(todo.id);
                }}
              >
                Delete
              </button>
              <br />
              <button
                onClick={() => {
                  this.onEditClickHandler(todo.id);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}


        <br />
      </div>
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        console.log(response.data);
        this.setState({ todo: response.data });
      });
  }
}
