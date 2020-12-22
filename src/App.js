import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
export default function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
          <Card/>
      </div>
      
    </div>
  );
}