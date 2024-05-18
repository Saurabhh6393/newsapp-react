import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={15} country="in" category="general"/>}></Route>
          <Route exact path="/General" element={<News key="general" pageSize={15} country="in" category="general"/>}></Route>
          <Route exact path="/Business" element={<News key="business" pageSize={15} country="in" category="business"/>}></Route>
          <Route exact path="/Entertainment" element={<News key ="entertainment" pageSize={15} country="in" category="entertainment"/>}></Route>
          <Route exact path="/Health" element={<News key="health" pageSize={15} country="in" category="health"/>}></Route>
          <Route exact path="/Science" element={<News key="science" pageSize={15} country="in" category="science"/>}></Route>
          <Route exact path="/Sports" element={<News key="sports" pageSize={15} country="in" category="sports"/>}></Route>
          <Route exact path="/Technology" element={<News key="technology" pageSize={15} country="in" category="technology"/>}></Route>
          
        </Routes>
        </Router>
      </div>
    )
  }
}



