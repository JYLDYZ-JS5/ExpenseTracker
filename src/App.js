import Expenses from './components/expenses/Expenses'
import NewExpense from './components/newExpense/NewExpense'
import './App.css'
import { useState } from 'react'

function App() {
  const [array, setArray] = useState([])
  const [isShowExpense,setisShowExpense]=useState(false)
  const getElements = async () => {
    fetch(
      'https://expense-project-99a8d-default-rtdb.firebaseio.com/expense.json',
    )
      .then((response) => response.json())
      .then((expense) => {
        
        const gotExpense=[]
        for (let exp in expense) {
          gotExpense.push({
            id: exp,
            title: expense[exp].title,
            amount: expense[exp].amount,
            date: new Date(expense[exp].date)
          })
        }
        setArray(gotExpense)
      })
  }

  const showExpenses = () => {
    getElements()
    setisShowExpense(true)

  }
  return (
    <div className="App">
      <NewExpense />
      <button onClick={showExpenses}>Expenes</button>
      {isShowExpense && <Expenses expenses={array} /> }
     
    </div>
  )
}

export default App

//ReactDom
// https://expense-project-99a8d-default-rtdb.firebaseio.com/
