import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchExpenses = async () => {
      const userId = "USER_ID"; // Replace with actual user ID
      const { data } = await axios.get(`/api/expenses/${userId}`);
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = "USER_ID"; // Replace with actual user ID
      const { data } = await axios.post('/api/expenses', { user: userId, title, amount, category });
      setExpenses([...expenses, data]);
      setTitle('');
      setAmount('');
      setCategory('');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number"/>
