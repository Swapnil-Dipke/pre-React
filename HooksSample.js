import axios from "axios";
import { useEffect, useState } from "react";

export default () => {
  const [postsList, setPostsList] = useState([]);

  const [title, setTitle] = useState("");

  //const [titleEditMode, setTitleEditMode] = useState("");

  const [body, setBody] = useState("");

  const [bodyEditMode, setBodyEditMode] = useState("");

  const [postId, setPostId] = useState(0);

  const [isEditMode, setIsEditMode] = useState(false);

  const [editObject, setEditObject] = useState({});

  //-----------------
  const [postObject, setPostObject] = useState({});

  const [selectedPostId, setSelectedPostId] = useState(-1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    //code to fetch data from server
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      if (response && response.data) {
        setPostsList(response.data);
      }
    });
  };

  // ---------------eventObject handler for edit all the functions without writing sepertae ones -------

  const onEditObjectHandler = (event) => {
    //  const titleOld={
    //       title:0,
    //       body:0,
    // }
    // const titleNew = {
    //   title: titleOld.title,
    //   body: bodyOld.body,
    //   ...titleOld,
    //   title:const,
    // }

    if (event) {
      const { name, value } = event.target;
      setEditObject({
        ...editObject,
        [name]: value,
      });
    }
  };

  // ------------------------------------------------------

  // const onTitleChange = (event) => {
  //   setTitle(event.target.value);
  // };

  // const onTitleEditModeChange = (event) => {
  //   setTitleEditMode(event.target.value);
  // };

  // const onBodyChange = (event) => {
  //   setBody(event.target.value);
  // };

  // const onBodyEditModeChange = (event) => {
  //   setBodyEditMode(event.target.value);
  // };

  //---------- global handler ------

  const onPostChangeHandler = (event) => {
    if (event) {
      const { name, value } = event.target;
      setPostObject({
        ...postObject,
        [name]: value,
      });
    }
  };


    const onResetEditRow = () =>{
        setSelectedPostId(-1);
      
        setEditObject({title:"",body:""})
    }

    const onUpdateRow = () =>{
      if (postId > 0) {
            axios
              .put("https://jsonplaceholder.typicode.com/posts/" + postId, {
                // id: postId,
                // title,
                // body,
                // postId: 1,
                 ...editObject,
                // ...postObject,
              })
              .then((response) => {
                if (response) {
                  fetchData();
                  alert("Updated...!");
                  // onResetClickHandler();
                  onResetEditRow();
                }
              });
          }
          
    }



  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(title, body);

    if (!isEditMode) {
      //code to add new records
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          ...postObject,
          userId: 1,
        })
        .then((response) => {
          console.log(response);
          alert("Added...!");

          //fetch the data again
          fetchData("");

          //reset from
          setPostObject({
            title: "",
            body: "",
          });

          //------ we set the ibject instead set individual properties.. -------------
          // setTitle("");
          // setBody("");
        });

      // } else {
      //   //code to edit the records
      //   if (postId > 0) {
      //     axios
      //       .put("https://jsonplaceholder.typicode.com/posts/" + postId, {
      //         id: postId,
      //         title,
      //         body,
      //         postId: 1,
      //       })
      //       .then((response) => {
      //         if (response) {
      //           fetchData();
      //           alert("Updated...!");
      //           onResetClickHandler();
      //         }
      //       });
      //   }
    }
  };

  const onDeleteClickHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        alert("Deleted...!");
        fetchData("");
      });
  };

  const onEditClickHandler = (postObject) => {
    console.log(postObject);

    // setIsEditMode(true);

    // // setTitle(postObject.title);
    // setTitleEditMode(postObject.title);

    // // setBody(postObject.body);
    // setBodyEditMode(postObject.body);
    // setPostId(postObject.id);
    // setSelectedPostId(postObject.id);

    setEditObject({
      ...postObject,
    });
    setPostId(postObject.id);
    setSelectedPostId(postObject.id);
  };

  const onResetClickHandler = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditMode(false);

    setPostObject({
      title: "",
      body: "",
    });
  };

  return (
    <>
      <h1>From HooksSample</h1>
      <h2>Post Form</h2>
      {/* ---------------------------------------------------------- */}
      <form onSubmit={onFormSubmit}>
        <label>Title:</label>
        <input
          name="title"
          value={postObject.title}
          onChange={onPostChangeHandler}
        />

        <label>Body:</label>
        <input
          name="body"
          value={postObject.body}
          onChange={onPostChangeHandler}
        />
        <br />
        <button type="submit">{isEditMode ? "Update" : "Submit"}</button>
        {isEditMode && <button onClick={onResetClickHandler}>Reset</button>}
      </form>

      {/* --------------------------------------------------------- */}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {postsList.map((post, index) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>

                <td>
                  {" "}
                  {selectedPostId === post.id ? (
                    <input
                      name="title"
                      value={editObject.title}
                      onChange={onEditObjectHandler}
                    />
                  ) : (
                    post.title
                  )}
                </td>

                <td>
                  {" "}
                  {selectedPostId === post.id ? (
                    <input
                      name="body"
                      value={editObject.body}
                      onChange={onEditObjectHandler}
                    />
                  ) : (
                    post.body
                  )}
                </td>


                <td>
                  {selectedPostId === post.id ? (
                    <>
                      <button 
                        onClick={()=>{
                          onUpdateRow();
                        }}
                      >Update</button>

                      <button 
                        onClick ={()=>{
                          onResetEditRow()
                        }}
                      > Reset </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          onDeleteClickHandler(post.id);
                        }}
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => {
                          onEditClickHandler(post);
                        }}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </td>


                
                {/*----------------- we write the code above ternary  opeator----------- 
                <td>
                  <button
                    onClick={() => {
                      onDeleteClickHandler(post.id);
                    }}
                  >
                    Delete
                  </button>
                </td>

                <td>
                  <button
                    onClick={() => {
                      onEditClickHandler(post);
                    }}
                  >
                    Edit
                  </button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
