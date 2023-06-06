import React, { Component } from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from"./components/Navbar";
import Contact from "./components/Contact"
import Index from "./components/Index";

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" Component={Index}/>
          <Route path="/contact" Component={Contact}/>
        </Routes>
      </BrowserRouter>
    );
  

  }
   
}



export default App;
