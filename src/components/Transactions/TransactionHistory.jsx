import React from 'react';
import css from 'components/Transactions/Transactions.module.css'


export default function TransactionHistory(props) {
  const items = props.items;
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => 
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
          )}
        
      </tbody>
    </table>

  )
  

}
