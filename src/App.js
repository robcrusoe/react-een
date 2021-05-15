import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Baking Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    }
  ];

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    console.log('selectedYear [App.js]: ', selectedYear);
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = (expense) => {
    expenses.push(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      
      {expenses.map(expense => <Expenses key={expense.id} expense={expense} />)}
    </div>
  );
}

export default App;
