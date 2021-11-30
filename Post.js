import { Component } from "react";
import axios from "axios";

export default class Post extends Component {
  state = {
    posts: [],
    postObject: {
      title: "",
      body: "",
      userId: 1,
      isEditMode: false,
    },
  };
  onDeleteClickHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        console.log(response);
        this.fetchData();
        alert("Deleted");
      });
  };

  onEditClickHandler = (id) => {
    const editObject = this.state.posts.find((post) => post.id === id);
    if (editObject) {
      this.setState({ postObject: editObject, isEditMode: true });
    }
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    const postObjectCopy = this.state.postObject;
    postObjectCopy[name] = value;
    this.setState({ postObject: postObjectCopy, isEditMode: true });
  };
  onCancelClickhandler = (event) => {
    event.preventDefault();
    this.resetState();
  };

  resetState = () => {
    this.setState({
      postObject: {
        title: "",
        body: "",
        userId: 1,
      },
      isEditMode: false,
    });
  };
  onFormSubmitClick = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (this.state.isEditMode) {
      axios
        .put(
          "https://jsonplaceholder.typicode.com/posts/" +
            this.state.postObject.id,
          this.state.postObject
        )
        .then((response) => {
          console.log(response);
          this.fetchData();
          alert("Updated");
          this.resetState();
        });
    } else {
      axios
        .post(
          "https://jsonplaceholder.typicode.com/posts",
          this.state.postObject
        )
        .then((response) => {
          console.log(response);
          this.fetchData();
          alert("Created");
          this.setState({
            postObject: {
              title: "",
              body: "",
              userId: 1,
            },
          });
        });
    }
  };

  render() {
    return (
      <div>
        <h1>In Posts</h1>
        <form onSubmit={this.onFormSubmitClick}>
          <label>Title</label>
          <input
            name="title"
            value={this.state.postObject.title}
            onChange={this.onChangeHandler}
          />
          <label>Body</label>
          <input
            name="body"
            value={this.state.postObject.body}
            onChange={this.onChangeHandler}
          />
          <button type="submit">
            {this.state.isEditMode ? "Update" : "Submit"}
          </button>
          <button onClick={this.onCancelClickhandler}>Cancel</button>
        </form>
        
        {this.state.posts.map((post, index) => {
          return (
            <div key={index}>
              {index + 1},{post.title}
              <br />
              <button
                onClick={() => {
                  this.onDeleteClickHandler(post.id);
                }}
              >
                Delete
              </button>
              <br />
              <button
                onClick={() => {
                  this.onEditClickHandler(post.id);
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
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      this.setState({ posts: response.data });
    });
  }
}
