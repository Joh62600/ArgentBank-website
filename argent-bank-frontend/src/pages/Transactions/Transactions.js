import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Transactions.css';

function Transactions() {
  const location = useLocation();
  const { title, content, subtitle } = location.state;

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '27/02/20',
      description: 'Golden Sun Bakery',
      amount: '$8.00',
      balance: '$298.00',
      transactionType: 'Electronic',
      category: 'Food',
      note: 'lorem ipsum',
      isEditing: false
    },
    {
      id: 2,
      date: '27/02/20',
      description: 'Golden Sun Bakery',
      amount: '$8.00',
      balance: '$298.00',
      transactionType: 'Electronic',
      category: 'Food',
      note: 'lorem ipsum',
      isEditing: false
    },
    {
      id: 3,
      date: '27/02/20',
      description: 'Golden Sun Bakery',
      amount: '$8.00',
      balance: '$298.00',
      transactionType: 'Electronic',
      category: 'Food',
      note: 'lorem ipsum',
      isEditing: false
    },
    {
      id: 4,
      date: '27/02/20',
      description: 'Golden Sun Bakery',
      amount: '$8.00',
      balance: '$298.00',
      transactionType: 'Electronic',
      category: 'Food',
      note: 'lorem ipsum',
      isEditing: false
    },
    {
      id: 5,
      date: '27/02/20',
      description: 'Golden Sun Bakery',
      amount: '$8.00',
      balance: '$298.00',
      transactionType: 'Electronic',
      category: 'Food',
      note: 'lorem ipsum',
      isEditing: false
    },
  ]);

  const handleEditClick = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id
          ? { ...transaction, isEditing: !transaction.isEditing }
          : transaction
      )
    );
  };

  const handleInputChange = (id, field, value) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id ? { ...transaction, [field]: value } : transaction
      )
    );
  };

  const handleSaveClick = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id ? { ...transaction, isEditing: false } : transaction
      )
    );
  };

  return (
    <main className="main-transactions">
      <div className="transactions-header">
        <h2>{title}</h2>
        <div className="balance">{content}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      <div className="transactions-list">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Balance</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <React.Fragment key={transaction.id}>
                <tr>
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.balance}</td>
                  <td>
                    <button className="edit-button" onClick={() => handleEditClick(transaction.id)}>
                      {transaction.isEditing ? 'Close' : 'Edit'}
                    </button>
                  </td>
                </tr>
                {transaction.isEditing && (
                  <tr>
                    <td colSpan="5" className="expanded-row">
                      <div className="edit-section">
                        <div>
                          <label>Transaction type</label>
                          <span>{transaction.transactionType}</span>
                        </div>
                        <div>
                          <label>Category</label>
                          <input
                            type="text"
                            value={transaction.category}
                            onChange={(e) => handleInputChange(transaction.id, 'category', e.target.value)}
                          />
                        </div>
                        <div>
                          <label>Note</label>
                          <input
                            type="text"
                            value={transaction.note}
                            onChange={(e) => handleInputChange(transaction.id, 'note', e.target.value)}
                          />
                        </div>
                        <button className="save-button" onClick={() => handleSaveClick(transaction.id)}>Save</button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Transactions;
