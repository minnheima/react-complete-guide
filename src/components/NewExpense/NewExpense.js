import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [clicked, setClicked] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setClicked(false);
  };
  const clickedCheckHandler = (prev) => {
    setClicked((prev) => !prev);
  };
  const stopEditingHandler = () => {
    setClicked(false);
  };
  return (
    <div className="new-expense">
      {!clicked && <button onClick={clickedCheckHandler}>Add New Expense</button>}
      {clicked && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
