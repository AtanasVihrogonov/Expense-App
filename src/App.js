import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 1,
      title: 'Car Insurance',
      amount: 298.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 2,
      title: 'Home Insurance',
      amount: 50.55,
      date: new Date(2021, 9, 22),
    },
    {
      id: 3,
      title: 'Live Insurance',
      amount: 29,
      date: new Date(2021, 11, 8),
    },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
