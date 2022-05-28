import { useState } from 'react'
import './ExpenseForm.css'
import gif from './giphy.gif'
function ExpenseForm(props) {
  // document.getElementById('').addEventListener('click',(event)=>{event.target.value})
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const [loading, setLoading] = useState(false)
  const [btnTitle, setBtnTitle] = useState('Add Expense')
  const expenses = []
  const [array, setArray] = useState(expenses)

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    // console.log(enteredTitle);
    // setUserInput({ ...userInput, enteredTitle: event.target.value });

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // setUserInput({ ...userInput, enteredDate: event.target.value });
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      id: Math.random().toString(),
    }
    setBtnTitle('Loading....')
    setLoading(true)
    const response = await fetch(
      'https://expense-project-99a8d-default-rtdb.firebaseio.com/expense.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenseData),
      },
    )
    if (response.ok) {
      setBtnTitle('Add Expense')
      setLoading(false)
    }
    
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amout</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>
          {btnTitle} {loading && <img src={gif} alt="loading " />}
        </button>
      </div>
    </form>
  )
}
export default ExpenseForm
