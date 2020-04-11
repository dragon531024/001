import React, { Component } from 'react'

export default class AddTransaction extends Component {
  
  state = {
    name:'',
    amount:''
  }

  onChange = (e) => {
    this.setState( { [e.target.name]: e.target.value } );
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTransaction(this.state.name, this.state.amount);
    this.setState( { name:'', amount:'' });
  }
  
  render() {
    return (
      <div>
        <label htmlFor="username">Perawit Khasak</label>
        <form id="add-transaction_form" onSubmit={this.onSubmit}>
          <div className="form-group">
            
            <label htmlFor="name">Your meal:</label>
            <input 
              type="text" 
              name="name" 
              className="form-control" 
              placeholder="อาหารที่คุณรับทาน"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Calories</label>
            <input 
              type="number" 
              name="amount" 
              className="form-control" 
              placeholder="จำนวนแคลลอรี่"
              onChange={this.onChange} 
              value={this.state.amount}
            />
          </div>

          <input type="submit" value="บันทึกข้อมูล" className="btn btn-info btn-block mainblackground"/>
        </form>
      </div>
    )
  }
}
