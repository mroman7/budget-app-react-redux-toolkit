import { useSelector, useDispatch } from "react-redux";
import ExpenseItem from "./ExpenseItem.component";


const ExpenseList = () => {
  let expense = useSelector((state) => state.budget.expense);
  // let totalIncome = useSelector((state) => state.budget.totalIncome);
  let currency = useSelector((state) => state.budget.currency);


  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">
        {expense.map((item, idx) => (
          <ExpenseItem
            key={item.id}
            item={item}
            currency={currency}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
