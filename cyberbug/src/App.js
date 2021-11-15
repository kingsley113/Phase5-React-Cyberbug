import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import SplashScreen from "./components/splashScreen";
import PageContent from "./containers/pageContent";

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
        <SplashScreen />
        <PageContent />
      </div>
      // App content tree goes here
      // Splash screen if not logged in
      // Content Container if logged in
    );
  }
}

export default App;
