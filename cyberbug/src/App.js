import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import PageHeader from "./components/pageHeader";
import PageContent from "./containers/pageContent";
import PageSidebar from "./components/pageSidebar";

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
        <div>
          <PageHeader />
        </div>
        <div className="page-main">
          {/* Sidebar */}
          <PageSidebar />
          {/* Content */}
          <PageContent />
        </div>
      </div>
      // TODO: Add logic to determine if user is logged in or not and show splash screen if not
    );
  }
}

export default App;
