import axios, { Axios } from "axios";
import { useEffect, useState } from "react";






export default () => {

    const [userList, setUserList] = useState([]);
    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [email, setEmail]= useState("");

    const fetchData = () =>{

        axios.get("https://jsonplaceholder.typicode.com/users/").then((response)=>{
            console.log(response.data);
            if (response && response.data) {
                setUserList(response.data)
                
            }

        })
    }

    useEffect (() =>{
        fetchData();
   },[]);



  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(name,username,email);

    axios.post("https://jsonplaceholder.typicode.com/users",{
        name,
        username,
        email,
        userId:1,
    }).then((response) =>{
        console.log(response);
        alert("added Successfully...")
        fetchData();
        setName("");
        setUsername("");
        setEmail("");
    })


  };

  const onNameChangeHandler = (event) => {
     setName( event.target.value)
  };

  const onUsernameChangeHandler = (event) => {
    setUsername( event.target.value)
};

const onEmailChangeHandler = (event) => {
    setEmail( event.target.value)
};

  const onClickHandler = () => {};

  return (
    <>
      <h1> User Form ( Hook Sample )</h1>
      <form onSubmit={onFormSubmitHandler}>
        <label>Name : </label>
        <input type="name" value={name} onChange={onNameChangeHandler} />

        <label>User Name : </label>
        <input type="username" value={username} onChange={onUsernameChangeHandler} />

        <label>Email : </label>
        <input type="email" value={email} onChange={onEmailChangeHandler} />

        <input onClick={onClickHandler}>Submit</input>
      </form>
    </>
  );
};
