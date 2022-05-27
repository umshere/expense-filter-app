import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  if (props.items.length <= 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  } else {
    return props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    ));
  }
}

export default ExpenseList;
