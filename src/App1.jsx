import React, {Component} from 'react';
import 'bootstrap';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import Addcal from './components/Addcal.jsx';
import Caldat from './components/Caldat';
import Footer from './components/Footer';
import About from './components/Aboutt';
import Login from './components/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';



export default class App extends Component {
  render() {

    return(
     
    
      <Router>
      <div className="container mt-8  mb-8 pt-8">
        
      <Route exact path="/" render={ props => (
        <div>
         <Navbar />
          <Header />
          <Body />
          <Addcal />
          <Login />
          
          <Caldat />
          <Footer />
          </div>
          )}  
          />

          <Route path="/about" component={About} />
 
  
    
</div>
</Router>

    )
  }

}
