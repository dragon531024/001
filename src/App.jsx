import React, { Component } from 'react';
import {v4} from 'uuid';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from './firebase/firebase'
import Header from './components/Navbar';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionTable from './components/TransactionTable';
import About from './components/Aboutt';

import './App.css';

export default class App extends Component {
  state = {
    transactions: [],
    image :''
  }

  loadData = () => {
    // get data from variable
    // let data = []
    // this.setState( { transactions: [] } );
    firebase.firestore().collection('transaction').orderBy('date').onSnapshot(doc => {
      const data = []
      doc.forEach(item => {
        data.push({
          id:item.id,
          name:item.data().name,
          amount:item.data().amount,
          date:item.data().date
        })
    })
    this.setState( {  transactions: data.reverse() })
    
  })
  }

  loadJsonData = () => {
    // get data from json file: "public/static/data.json"
    axios.get('/static/data.json')
      .then( res => {
        const data = res.data;
        this.setState( { transactions: data } );
      });
  }

  componentDidMount() {
    this.loadData();   // load data from variable
    // this.loadJsonData();  // load data from JSON file on server
    // this.loadFirebase(); // load data from Firebase
    // firebase.storage().ref('78086851_3275910665771900_5907486477788381184_o.jpg').getDownloadURL().
  }

  validateForm = (name,amount) => {
    if (!name || !amount) {
      window.alert('Please fill the data');
      return false;
    } else if ( !isNaN(name)) {
      window.alert('Transaction name can be just text type');
      return false;
    } else if (+amount === 0) {
      window.alert('Amount cannot be zero!');
      return false;
    }
    else if(!Number.isInteger(Number(amount))){
      window.alert('Amount cannot be float !')
      return false
    }
  
    return true;
  }

  addTransaction = (name,amount) => {

    if(!this.validateForm(name,amount)) {
      return false;
    }

    const newTransaction = {
      id: v4(),
      name: name,
      amount: +amount,
      date: new Date().toISOString()
    }
    firebase.firestore().collection('transaction').add(newTransaction)
    this.state.transactions.unshift(newTransaction);
    this.setState( { transactions: this.state.transactions } );
  }

  clearTransactions = () => {
    let ans = window.confirm("You are going to clear all transaction history!!!")
    if (ans) {
      firebase.firestore().collection('transaction').onSnapshot(doc =>{
        doc.forEach(item => {
          firebase.firestore().collection('transaction').doc(item.id).delete()
        })
      })
      this.setState( { transactions: [] } );
    }
  }

  render() {
    return (
      <Router>
      <div className="container mt-4 mb-5">
        <Header />

        <Route exact path="/" render={ props => (
          <div>
          <AddTransaction addTransaction={this.addTransaction} />
          <Balance transactions={this.state.transactions}/>
          <IncomeExpense transactions={this.state.transactions}/>
          <TransactionTable 
              transactions={this.state.transactions} 
              clearTransactions={this.clearTransactions} />
          </div>
        )} />
          
        <Route path="/about" component={About} />        
      </div>
      </Router>
    )
  }
}