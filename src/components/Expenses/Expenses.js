import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expensesContent}
        {/* {filteredExpenses.length === 0 ? (
          <p>No expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
          ))
        )} */}
      </Card>
    </div>
  );
};
export default Expenses;
