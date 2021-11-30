
import axios from "axios";
import { Component } from "react";

export class User extends Component {
  state = {
    // -----we defies states of every entities of an object ----------

    name: [],
    nameObject: {
      id: "",
      name: "",
      username: "",
      email: "",
      isEditMode: false,
      
    },

    // address: [],
    // addressObject: {
    //   street: "",
    //   suite: "",
    //   city: "",
    //   zipcode: "",
    //   isEditMode: false,
    // },

    // geo: [],
    // geoObject: {
    //   lat: "",
    //   lng: "",
    //   phone: "",
    //   website: "",
    //   isEditMode: false,
    // },

    // company: [],
    // companyObject: {
    //   name: "",
    //   cathPhrase: "",
    //   bs: "",
    //   isEditMode: false,
    // },
  };

  //--------------------- Space for handler ------------------------


  onChangeHandler = (event) => {

    const { name, value } = event.target;
    const nameObjectCopy = this.state.nameObject;
    nameObjectCopy[name] = value;
    this.setState({ nameObject: nameObjectCopy, isEditMode: true });
  };


  onDeleteClickHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        console.log(response);
        this.fetchData();
        alert("Deleted");
      });
  };

  onEditClickHandler = (id) => {
    const editObject = this.state.name.find((name) => name.id === id);
    if (editObject) {
      this.setState({ nameObject: editObject, isEditMode: true });
    }
  };


  onCancelClickhandler = (event) => {
    event.preventDefault();
    this.resetState();
  };


  resetState = () => {
    this.setState({
      nameObject: {
        id: "",
        name: "",
        username: "",
        email: "",
      },
        isEditMode: false,
      
    });
  };

  onFormSubmitClick = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (this.state.isEditMode) {   //if editMode is active, it goes inside  if loop
      axios
        .put(
          "https://jsonplaceholder.typicode.com/users/" +
            this.state.nameObject.id,
          this.state.nameObject,
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
          "https://jsonplaceholder.typicode.com/users/",
          this.state.nameObject,
        )
        .then((response) => {
          console.log(response);
          this.fetchData();
          alert("Created");
          this.setState({
            nameObject: {
                id: "",
                name: "",
                username: "",
                email: "",
                
              },
          });
        });
    }
  };






  //----------------- render() for rendering jsx ----------------------

  render() {
    return (
      <div>
        <h1> User Intreface</h1>
        <form onSubmit={this.onFormSubmitClick}>

         
          <br />
<h5> Name : </h5>
 <label>id : </label>
          <input
            name="id"
            value={this.state.nameObject.id}
            onChange={this.onChangeHandler}
          />
          <br /> 
          <br />
          <label>Name : </label>
          <input
            name="name"
            value={this.state.nameObject.name}
            onChange={this.onChangeHandler}
          />
          <br />
          {/* <label>User Name : </label>
          <input
            name="Username"
            value={this.state.nameObject.username}
            onChange={this.onChangeHandler}
          /> */}
          <br />
          <label>email : </label>
          <input
            name="email"
            value={this.state.nameObject.email}
            onChange={this.onChangeHandler}
          />
{/* 
<h5> Address : </h5>
          <br />

          <label>street : </label>
          <input
            name="street"
            value={this.state.addressObject.street}
            onChange={this.onChangeHandler}
          />
          <br />
          <label>Suite : </label>
          <input
            name="suite"
            value={this.state.addressObject.suite}
            onChange={this.onChangeHandler}
          />
          <br />
          <label>City : </label>
          <input
            name="email"
            value={this.state.addressObject.city}
            onChange={this.onChangeHandler}
          />
          <br />
          <label> zipcode : </label>
          <input
            name="zipcode"
            value={this.state.addressObject.zipcode}
            onChange={this.onChangeHandler}
          />
          <br />
         

  <h5> Geo : </h5>
          <br />

          <label> lat : </label>
          <input
            name="lat"
            value={this.state.geoObject.lat}
            onChange={this.onChangeHandler}
          />
          <br />
          <label>lng : </label>
          <input
            name="lng"
            value={this.state.geoObject.lng}
            onChange={this.onChangeHandler}
          />
          <br />
          <label> Phone : </label>
          <input
            name="phone"
            value={this.state.geoObject.phone}
            onChange={this.onChangeHandler}
          />
          <br />
          <label> website : </label>
          <input
            name="website"
            value={this.state.geoObject.website}
            onChange={this.onChangeHandler}
          />
          <br />

  <h5> company : </h5>
          <br />
          

          <label> Company Name : </label>
          <input
            name="name"
            value={this.state.company.name}
            onChange={this.onChangeHandler}
          />
          <br />
          <label> Catch Phrase : </label>
          <input
            name="catchPhrase"
            value={this.state.company.catchPhrase}
            onChange={this.onChangeHandler}
          />
          <br />
          <label> bs : </label>
          <input
            name="bs"
            value={this.state.company.bs}
            onChange={this.onChangeHandler}
          />
          <br />  */}
          
          <br /> 
          <button type="submit">
            {this.state.isEditMode ? "Update" : "Submit"}
          </button><br /> 
          <button onClick={this.onCancelClickhandler}>Cancel</button>
          <br />
        </form>
        <br />  <br />  <br /> 


          
            
        {this.state.name.map((name, index) => {
          return (
            <div key={index}>
              {index + 1},{name.id}
              <br />

              <button
                onClick={() => {
                  this.onDeleteClickHandler(name.id);
                }}
              >
                Delete
              </button>
              <br />

              <button
                onClick={() => {
                this.onEditClickHandler(name.id);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}


      </div>
    );
  }

  //--------------- space for onDidMount() --------------------


  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        this.setState({ name: response.data });
      });
  }





}
