  import logo from './logo.svg';

  import './App.css';

   import { Navbar } from './Navbar';

   import { Routes, Route } from "react-router-dom";
   import { Header } from './Header';

    import { posts } from './Post';
   import Post from './Post';
   //import ToDo from './ToDo';
// // // import { User } from './User';

// // import Accessiblity from './Accessiblity';

// // import ContextConsumer from './ContextCunsumer';
// // import { personProvider } from './PersonContext';



// // import {Posts} from './Posts';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;



// import logo from './logo.svg';
// import './App.css';
// import Accessibility from './Accessibility';
// import { PersonProvider } from './PersonContext';
// import ContextCunsumer from './ContextConsumer';
// // import { UserProvider } from './UserContext';
// // import ContextUserConsumer from './ContextUserConsumer';

// function App() {

// return (
// <div className="App">
// <PersonProvider value={{ name: "Swapnil", age :23}}>
// <ContextCunsumer/>
// </PersonProvider>
// {/* <Accessibility/> */}
// </div>
// );
// }

// export default App;





import Buffer from './Buffer';
import React from "react";
import { Suspense } from "react";
import ErrorBoundary from './ErrorBoundary';
import SampleError from './SampleError';
import FragmentSample from './FragmentSample';
//import { Route, Routes } from "react-router";

const CodeSplitting = React.lazy(() => import("./CodeSplitting"));


const ToDo = React.lazy(() => import("./ToDo"))

function App() {
    const name= "Swapnil";
    return(
        <div className="container-fluid">
            {/* <Suspense fallback={<Buffer />}>
                <Header/>
                <Navbar/>
                <CodeSplitting/>
                <Routes>
                    <Route path={"/Post"} element={<Post />} />
                    <Route path={"/ToDo"} element={<ToDo/>}/>
              </Routes>
            </Suspense> */}

            <Header/>
            <Navbar/>
            <ErrorBoundary>
                <SampleError/>
                <FragmentSample/>
            </ErrorBoundary>

        </div>
    )
}
export default App;