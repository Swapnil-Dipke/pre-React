import { Component } from "react";
import axios from "axios";

export class Post extends Component {
  state = {
    posts: [],

    postObject: {
      title: "",
      body: "",
      userID : 1,
    },
  };

  ondeleteHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        console.log(response);
        this.fetchData();
        alert("Deleted");
      });
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    const postObbjectCopy = this.state.postObject;
    postObbjectCopy[name] = value;
    this.setState({ postObject: postObbjectCopy });
  };

  onFormSubmitClick = (event) => {

    event.preventDefault();
    console.log(this.state);
    axios.post("https://jsonplaceholder.typicode.com/posts", this.state.postObject).then((response) => {
            console.log(response);
            
            this.fetchData();
            alert("created");
            this.setState({
                postObject: {
                    title: "",
                    body: "",
                    userID :"",
                  },
            })


    });
  };

  render() {
    return (
      <div>
        <h1>In Posts</h1>

        <form onSubmit={this.onFormSubmitClick}>
          <label> Title </label>
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
          <button type="submit"> Submit</button>
        </form>

        {this.state.posts.map((post, index) => {
          return (
            <>
              <div key={index}>
                {index + 1},{post.title}
              </div>
              <button
                onClick={() => {
                  this.ondeleteHandler(post.id);
                }}
              >
                Delete
              </button>
            </>
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
