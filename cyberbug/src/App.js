import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import SplashScreen from "./components/splashScreen";
import AppContent from "./containers/appContent";

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

class App extends Component {
  render() {
    return (
      <div>
        {/* <SplashScreen /> */}
        {/* TODO: Comment out splash screen for now, eventually will be checking for user logged in */}
        <AppContent />
      </div>
      // App content tree goes here
      // Splash screen if not logged in
      // Content Container if logged in
    );
  }
}

export default App;
