import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  // const postObject = [],
  const [usersList, setUsersList] = useState([]);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditmode, setIsEditmode] = useState(false);
  const [userId, setuserId] = useState(0);
  const [website, setWebsite] = useState("");

  const [editObject, setEditObject] = useState({});
  const [userObject, setUserObject] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(-1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users ")
      .then((response) => {
        console.log(response.data);
        if (response && response.data) {
          setUsersList(response.data);
        }
      });
  };

  // const onNameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const onUserNameChange = (event) => {
  //   setUserName(event.target.value);
  // };

  // const onEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };
  // const onPhoneChange = (event) => {
  //   setPhone(event.target.value);
  // };

  // const onWebsiteChange = (event) => {
  //   setWebsite(event.target.value);
  // };

  const onDeleteHandler = (id) => {
    console.log();
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
            alert("Deleted..");
        fetchData();
    
      });
  };

  const onEditClickHandler = (userObject) => {
    // console.log(userObject);
    // setIseditmode(true);
    // setName(userObject.name);
    // setUserName(userObject.username);
    // setEmail(userObject.email);
    // setPhone(userObject.phone);
    // setuserId(userObject.id);
    // setWebsite(userObject.website);
    setEditObject({
      ...userObject,
    });
    setuserId(userObject.id);
    setSelectedUserId(userObject.id);
  };

  const onReset = (event) => {
    if (event) {
      event.preventDefault();
     }
      setIsEditmode(false);
      setName("");
      setUserName("");
      setEmail("");
      setPhone("");
      setWebsite("");
    
  };

  //--------------------------------------


  const onEditObjectHandler = (event) => {
    
    if (event) {
      const { name, value } = event.target;
      setEditObject({
        ...editObject,
        [name]: value,
      });
    }
   
  
  };





  const onUserChangeHandler = (event) => {
    if (event) {
      const { name, value } = event.target;
      setUserObject = {
        ...userObject,
        [name]: value,
      };
    }
  };

  const onResetEditRow =  () =>{
      setSelectedUserId(-1);
      setEditObject({name:"", username:"", phone:"", email:"",website:""})
  }




  const onUpdateRow = () =>{
    if (userId > 0) {
          axios
            .put("https://jsonplaceholder.typicode.com/posts/" + userId, {
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
    console.log(name, username, email, phone, website);

    if (!isEditmode) {
      axios
        .post("https://jsonplaceholder.typicode.com/users", {
          // name,
          // username,
          // userId: 1,
          // email,
          // phone,
          // website,
          ...userObject,
          userId:1,
        })
        .then((response) => {
          console.log(response);
          alert("Added");

          fetchData();

          // setName("");
          // setUserName("");
          // setEmail("");
          // setPhone("");
          // setWebsite("");
          setUserObject({
             setName:"",
            setUserName:"",
            setEmail:"",
            setPhone:"",
            setWebsite:"",
          });
        });

      // }
      // else{
      //   if (userId > 0) {

      //     axios
      //     .put("https://jsonplaceholder.typicode.com/users"+ userId, {
      //       name,
      //       username,
      //       userId: 1,
      //       email,
      //       phone,
      //       // website,
      //     })
      //     .then((response) => {
      //      if (response) {

      //       fetchData();
      //       onReset();

      //      }

      //   });
      // }
    }

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name,
        username,
        userId: 1,
        email,
        phone,
         website,
      })
      .then((response) => {
        console.log(response);
        alert("Added");

        fetchData();

        setName("");
        setUserName("");
        setEmail("");
        setPhone("");
        setWebsite("");
      });
  };
  return (
    <>
      <h1>From UserHooks</h1>
      <h2>Users Form</h2>
      <form onSubmit={onFormSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={userObject.name}
          onChange={onUserChangeHandler}
        />
        <br />
        <label>User Name</label>
        <input
          name="username"
          value={userObject.username}
          onChange={onUserChangeHandler}
        />
        <br />
        <label>Email</label>
        <input
          name="email"
          value={userObject.email}
          onChange={onUserChangeHandler}
        />
        <br />
        <label>Phone</label>
        <input
          name="phone"
          value={userObject.phone}
          onChange={onUserChangeHandler}
        />
        <br />
        <label>Website</label>
        <input
          name="website"
          value={editObject.website}
          onChange={onUserChangeHandler}
        />
        <br />
        <button type="submit"> {isEditmode ? "update" : "Submit"}</button>
        {isEditmode && <button onClick={onReset}>Reset</button>}
      </form>

      <br />
      <br />
      <br />
      <br />
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>

        <tbody>
          {usersList.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>

                <td>
                  {" "}
                  {selectedUserId === user.id ? (
                    <input
                      name="name"
                      value={editObject.name}
                      onChange={onEditObjectHandler}
                    />
                  ) : (
                    user.name
                  )}
                </td>

                <td>
                  {" "}
                  {selectedUserId === user.id ? (
                    <input
                      name="username"
                      value={editObject.username}
                      onChange={onEditObjectHandler}
                    />
                  ) : (
                    user.username
                  )}
                </td>

                <td>
                  {" "}
                  {selectedUserId === user.id ? (
                    <input
                      name="email"
                      value={editObject.email}
                      onChange={onEditObjectHandler}
                    />
                  ) : (
                    user.email
                  )}
                </td>

                <td>
                  {" "}
                  {selectedUserId === user.id ? (
                    <input
                      name="phone"
                      value={editObject.phone}
                      onChange={onEditObjectHandler}
                    />
                  ) : (
                    user.phone
                  )}
                </td>

                <td>
                  {" "}
                  {selectedUserId === user.id ? (
                    <input
                      name="website"
                      value={editObject.website}
                      onChange={onEditObjectHandler}
                    />
                  ) : (
                    user.website
                  )}
                </td>
                <td></td>

                {/* 

                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td> */}

                <td>
                  {selectedUserId === user.id ? (
                    <>
                      <button
                      onClick={()=>{
                        onUpdateRow();
                      }}
                      >
                        Update
                      </button>

                      <button
                      onClick ={()=>{
                        onResetEditRow()
                      }}
                      >
                        {" "}
                        Reset{" "}
                      </button>
                    </>
                  ) : (
                    <>
                      <button  onClick={onDeleteHandler} >
                        Delete
                      </button>

                      <button
                        onClick={() => {
                          onEditClickHandler(user);
                        }}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </td>

                {/* 
                <td><button onClick={()=>{onEdit(user)}}>Edit</button></td>
                </td>
                <td>
                  <button onClick={onDeleteHandler}>Delete</button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
