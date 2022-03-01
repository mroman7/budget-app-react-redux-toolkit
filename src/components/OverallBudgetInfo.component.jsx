import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { allbudget, allIncome, allExpense } from "../redux/slices/budgetSlice";

const OverallBudgetInfo = () => {
  // defining dispatch
  let dispatch = useDispatch();

  // getting redux state values
  let income = useSelector((state) => state.budget.income);
  let expense = useSelector((state) => state.budget.expense);
  let totalIncome = useSelector((state) => state.budget.totalIncome);
  let totalExpense = useSelector((state) => state.budget.totalExpense);
  let percExpense = useSelector((state) => state.budget.totalPercExpense);
  let totalBudget = useSelector((state) => state.budget.totalbudget);

  let totInc = () => {
    // let inc;
    console.log(JSON.stringify(income));
    if (income.length !== 0) {
      // getting all income amount in array
      // inc = income.map((item) => item.value);
      dispatch(allIncome());
    }
  };
  // calculating total expenses
  let totExp = () => {
    // let exp;
    if (expense.length !== 0) {
      // getting all expense amount in array
      // exp = expense.map((item) => item.value);
      // setting value in store
      dispatch(allExpense());
    }
  };

  useEffect(() => {
    totInc();
    totExp();
    dispatch(allbudget());
  }, [income, expense, totalExpense, totalIncome, totalBudget]);

  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Available Budget in{" "}
          <span className="budget__title--month">%Month%</span>:
        </div>

        <div className="budget__value">
          {totalBudget < 0 ? totalBudget : "+ " + totalBudget}
        </div>

        <div className="budget__income clearfix">
          <div className="budget__income--text">Income</div>
          <div className="right">
            <div className="budget__income--value">
              + {totalIncome === undefined ? 0 : totalIncome}
            </div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>

        <div className="budget__expenses clearfix">
          <div className="budget__expenses--text">Expenses</div>
          <div className="right clearfix">
            <div className="budget__expenses--value">
              - {totalExpense === undefined ? 0 : totalExpense}
            </div>
            <div className="budget__expenses--percentage">
              {percExpense === "Infinity" ? "-" : percExpense + "%"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallBudgetInfo;
