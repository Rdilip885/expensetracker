const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Components/userRoute');
const expenseRoutes = require('./components/ExpenseRoute');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/expense-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
