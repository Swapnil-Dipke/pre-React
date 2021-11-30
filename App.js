import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar';

import { Routes, Route } from "react-router-dom";
import { Header } from './Header';

 import { posts } from './Post';
import Post from './Post';
import ToDo from './ToDo';
import { User } from './User';



// import {Posts} from './Posts';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;





function App() {
  return (
    <div className="App">

      {/* <Header />
  
     <Post/>
     <ToDo/> */}

<Navbar />             
    <Routes>
      <Route path={"/Post"} element={<Post/>}/>
      <Route path={"/ToDo"} element={<ToDo />}/>
      <Route path={"/User"} element={<User />}/>
    </Routes>

    </div>
  );
}

export default App;
