import React from "react";
import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const stopEditingHandler = (hide) => {
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button type="button" onClick={startEditingHandler}>
        Add New Expense
      </button>}
      {isEditing && <ExpenseForm
        onCancel={stopEditingHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />}
    </div>
  );

};

export default NewExpense;
