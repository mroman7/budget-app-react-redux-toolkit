import { TrashOutline } from "react-ionicons";
import { useDispatch } from "react-redux";
import {
  deleteIncome,
  allIncome,
  allExpense,
  allbudget
} from "../redux/slices/budgetSlice";

const IncomeItem = ({ item, currency }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteIncome({ item: item }));
    dispatch(allIncome());
    dispatch(allExpense());
    dispatch(allbudget());
  };

  return (
    <div className="item clearfix" id="income-0">
      <div className="item__description">{item.incomeName}</div>
      <div className="right clearfix">
        <div className="item__value">
          + {currency} {item.value}
        </div>
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

export default IncomeItem;
