import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  // const postObject = [],
  const [usersList, setUsersList] = useState([]);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditmode, setIseditmode] = useState(false);
  const [userId, setuserId] = useState(0);

  const [website, setWebsite] = useState("");

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

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const onWebsiteChange = (event) => {
    setWebsite(event.target.value);
  };

  const onDeleteHandler = (id) => {
    console.log();
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        fetchData();
        alert("Deleted..");
      });
  };

  const onEdit = (userObject) => {
    console.log(userObject);
    setIseditmode(true);
    setName(userObject.name);
    setUserName(userObject.username);
    setEmail(userObject.email);
    setPhone(userObject.phone);
    setuserId(userObject.id);
    setWebsite(userObject.website);
  };

  const onReset = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIseditmode(false);
    setName("");
    setUserName("");
    setEmail("");
    setPhone("");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(name, username);

    if (userId > 0) {
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
    }else{
      if (userId > 0) {
        
        axios
        .put("https://jsonplaceholder.typicode.com/users"+ userId, {
          name,
          username,
          userId: 1,
          email,
          phone,
          // website,
        })
        .then((response) => {
         if (response) {
        

          fetchData();
          onReset();

         }
          
        
      });
    }
  }
    

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name,
        username,
        userId: 1,
        email,
        phone,
        // website,
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
        <input name="name" value={name} onChange={onNameChange} />
        <label>User Name</label>
        <input name="username" value={username} onChange={onUserNameChange} />
        <label>Email</label>
        <input name="email" value={email} onChange={onEmailChange} />
        <label>Phone</label>
        <input name="phone" value={phone} onChange={onPhoneChange} />
         <label>Website</label> 
         <input name="website" value={website} onChange={onWebsiteChange} /> 

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
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                <td><button onClick={()=>{onEdit(user)}}>Edit</button></td>
                </td>
                <td>
                  <button onClick={onDeleteHandler}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
