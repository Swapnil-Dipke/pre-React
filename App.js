import logo from './logo.svg';
import './App.css';

import { Navbarcomponent } from './NavbarComponent';
import { HeaderComponent } from './HeaderComponent';
import { FooterComponent } from './FooterComponent';
import { BodyComponent } from './BodyComponent.';




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
    
      
      <HeaderComponent />
      <Navbarcomponent />
      <BodyComponent />
      <FooterComponent />

    </div>
  );
}

export default App;