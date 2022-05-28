// import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
function Expenses(props) {





  return (
    <Card className="expenses">
      <ExpensesList expenses={props.expenses} />
    </Card>
  );
}

export default Expenses;
