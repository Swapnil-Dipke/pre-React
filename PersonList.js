import { Component } from "react";
import { connect } from "react-redux";
import Person from "./Person";

class PersonList extends Component {
  state = {
    selectedObject: null,
  };

  onValueChangeHandler = (event) => {
    // const { name, index } = event.target;
    // this.setState({ [name]: index });
    const { value, name } = event.target;
    this.setState({
      selectedObject: { ...this.state.selectedObject, [name]: value },
    });
  };

  onEditClickHandler = (person) => {
    // const editObject = this.state.person.find((person) => person.id === id);
    // if (editObject) {
    //   this.setState({ personObject: editObject, isEditMode: true });
    // }
    //  we update the select id object with person for data mapping
    console.log("Edit", person);
    this.setState({ selectedObject: person });
  };

  onResetClickHandler = () => {
    this.setState({ selectedObject: null });
  };

  render() {
    console.log(this.props.PersonList);
    return (
      <>
        <h1>Person List</h1>
        <table className={"table table-striped"}>
          <thead>
            <th>Sr no.</th>
            <th> Name </th>
            <th> Age </th>
          </thead>
          <tbody>
            {this.props.personList.map((person, id) => {
              return (
                <tr key={person.id}>
                  <td> {person.id} </td>

                  <td>
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <input
                        name="name"
                        value={this.state.selectedObject.name}
                        onChange={this.onValueChangeHandler}
                      />
                    ) : (
                      person.name
                    )}
                  </td>

                  <td>
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <input
                        name="age"
                        value={this.state.selectedObject.age}
                        onChange={this.onValueChangeHandler}
                      />
                    ) : (
                      person.age
                    )}
                  </td>
                  <td>
                    {" "}
                    {this.state.selectedObject &&
                    this.state.selectedObject.id === person.id ? (
                      <>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              alert("Update..");
                              this.props.updatePerson({
                                ...this.state.selectedObject,
                              });
                              this.onResetClickHandler();
                            }}
                          >
                            Update
                          </button>
                        </td>

                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              this.onResetClickHandler();
                            }}
                          >
                            Reset
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>
                          <button
                            className="btn btn-warning"
                            onClick={() => {
                              this.onEditClickHandler(person);
                            }}
                          >
                            Edit
                          </button>
                        </td>

                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              alert("Delete..");
                              this.props.deletePersonByIndex(id);
                            }}
                          >
                            delete
                          </button>
                        </td>
                      </>
                    )}{" "}
                  </td>

                  {/* <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        this.onEditClickHandler(person);
                      }}
                    >
                      Edit
                    </button>
                  </td>

                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.deletePersonByIndex(id);
                      }}
                    >
                      delete
                    </button>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    personList: state.personList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePersonByIndex: (index) =>
      dispatch({
        type: "PERSON_DELETE",
        payload: index,
      }),

    updatePerson: (person) => {
      dispatch({ type: "PERSON_UPDATE", payload: person });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
