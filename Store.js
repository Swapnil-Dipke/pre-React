import { createStore } from "redux";

const InitialState = {
  personList: [],
  name: "",
  age: "",
  isEditMode: false,
  id: "",

  //   courseList: [],
  //   courseName: "",
  //   courseFees: "",
};

const reducer = (state = InitialState, action) => {
  const { type, payload } = action;

  const personListCopy = [...state.personList];
  //   const courseListCopy = [...state.courseList];

  switch (type) {
    case "PERSON_ADD":
      // make id conditional if not present make our own id

      const id = payload.id ? payload.id : state.personList.length + 1;
      personListCopy.push({ ...payload, id });

      console.log(payload);

      return {
        // ...state,
        personList: personListCopy,
      };

    case "PERSON_UPDATE":
      let objectToBeUpdateIndex = personListCopy.findIndex(
        (person) => person.id === payload.id
      );
      personListCopy[objectToBeUpdateIndex] = {
        ...personListCopy[objectToBeUpdateIndex],
        ...payload,
      };
      return {
        ...state,
        personList: personListCopy,
      };

    case "PERSON_DELETE":
      console.log(payload);
      personListCopy.splice(payload, 1);
      return { ...state, personList: personListCopy };

    // case "COURSE_ADD":
    //   console.log(payload);
    //   courseListCopy.push(payload);
    //   return {
    //     ...state,
    //     courseList: courseListCopy,
    //   };

    // case "COURSE_DELETE":
    //   courseListCopy.splice(payload, 1);
    //   return {
    //     ...state,
    //     courseList: courseListCopy,
    //   };

    default:
      return state;
  }
};

//store
const store = createStore(reducer);
export default store;
