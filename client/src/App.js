import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
      
       
      </div>
    </Router>
  );
}

export default App;
