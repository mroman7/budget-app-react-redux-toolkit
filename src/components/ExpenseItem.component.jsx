import { useEffect, useState } from "react";
import { TrashOutline } from "react-ionicons";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteExpense,
  allIncome,
  allExpense,
  allbudget
} from "../redux/slices/budgetSlice";

const ExpenseItem = ({ item, currency }) => {
  const dispatch = useDispatch();
  const [itemPercent, setItemPercent] = useState(0);

  let totalIncome = useSelector((state) => state.budget.totalIncome);

  const itemPerc = () => {
    let perc = (item.value / totalIncome) * 100;
    let itm = perc === "Infinity" ? "-" : perc.toFixed(1);
    setItemPercent(itm);
  };

  useEffect(() => {
    itemPerc();
  }, []);

  const handleDeleteItem = () => {
    dispatch(deleteExpense({ item: item }));
    dispatch(allIncome());
    dispatch(allExpense());
    dispatch(allbudget());
  };

  return (
    <div className="item clearfix" id="expense-0">
      <div className="item__description">{item.expenseName}</div>
      <div className="right clearfix">
        <div className="item__value">
          - {currency} {item.value}
        </div>
        <div className="item__percentage">{itemPercent}%</div>
        <div className="item__delete">
          <button className="item__delete--btn" onClick={handleDeleteItem}>
            <TrashOutline
              color={"#00000"}
              title="Delete"
              height="15px"
              width="15px"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
