import React from 'react'

import Transaction from './Transaction';

export default function TransactionTable() {

  

  return (
      <section className="addcal-section">
    <div>
      <div><h3 className="opafont">Your Calories Diary to day</h3></div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="transaction-list">
        
        </tbody>
      </table>
      <button 
        id="clear-history" 
        className="btn btn-danger btn-block"
       >Clear History</button>
    </div>
    </section>
  )
}
