import { useSelector } from "react-redux";
import IncomeItem from "./IncomeItem.component";

const IncomeList = () => {
  let income = useSelector((state) => state.budget.income);
  const currency = useSelector((state) => state.budget.currency);
  // console.log(income);

  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>

      <div className="income__list">
        {income?.map((item, idx) => (
          <IncomeItem item={item} key={item.id} currency={currency} />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
