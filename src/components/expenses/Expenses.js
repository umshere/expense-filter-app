import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react/cjs/react.development";

function Expenses(props) {
  const [expenseFilterVal, setExpenseFilterVal] = useState("2021");
  // const[expenses, setExpenses] = useState(props.items);
  const saveExpenseFilterVal = (selectedYear) => {
    console.log(selectedYear);
    setExpenseFilterVal(selectedYear);
    // props.onFilterExpense(expenseFilterVal);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === expenseFilterVal;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={expenseFilterVal}
          onExpenseFilterSelection={saveExpenseFilterVal}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
