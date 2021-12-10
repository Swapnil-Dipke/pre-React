import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

export default () => {
  const [postList, setPostlist] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isEditmode, setIsEditMode] = useState(false);
  const [userId, setUserId] = useState(0);

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      if (response && response.data) {
        setPostlist(response.data);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChange = (event) => {
    setBody(event.target.value);
  };

  const onDeleteHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        fetchData();
        alert("Deleted..");
      });
  };

  const onEditHandler = (postObject) => {
    console.log(postObject);
    setIsEditMode(true);
    setTitle(postObject.title);
    setBody(postObject.body);
  };
  const onResetHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditMode(false);
    setTitle("");
    setBody("");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(title, body);

    if (userId > 0) {
      axios
        .post("https://jsonplaceholder.typicode.com/posts/", {
          title,
          body,
          userId: 1,
        })
        .then((response) => {
          console.log(response);
          alert("Added");
          // fetch the  data again
          fetchData();
          // reset the innput fields
          setTitle("");
          setBody("");
        });
    }else{
        if (userId > 0) {
        
            axios
            .put("https://jsonplaceholder.typicode.com/posts/"+ userId, {
            title,
            body,
              userId: 1,
              
            })
            .then((response) => {
             if (response) {
            
    
              fetchData();
              onResetHandler();
    
             }
              
            
          });
    }
}


    axios
    .post("https://jsonplaceholder.typicode.com/posts", {
     title,body,
      userId: 1,
    })
    .then((response) => {
      console.log(response);
      alert("Added");

      fetchData();

        setTitle("");
        setBody("");
    
    });
    }
  

  return (
    <>
      <h1> From HookSample </h1>
      <h2> Post Form</h2>
      <form onSubmit={onFormSubmit}>
        <label>Title</label>
        <input name="title" value={title} onChange={onTitleChange} />

        <label>Body</label>
        <input name="body" value={body} onChange={onBodyChange} />
        <button onClick={onResetHandler}> Reset </button>
        <button type="submit"> {isEditmode ? "Submit" : "Updtae"}  </button>
      </form>

      <br />
      <br />

      <table>
        <thead>
          <tr>
            <th> Id </th>
            <th> Title </th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {postList.map((post, index) => {
            return (
              <tr key={post.id}>
                <td> {post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button onClick={() => {onEditHandler(post)}}> Edit </button>{" "}
                </td>
                <td>
                  <button onClick={onDeleteHandler}> Delete </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
