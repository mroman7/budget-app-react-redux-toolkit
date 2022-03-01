import { useFormik } from "formik";
import { CheckmarkCircleOutline } from "react-ionicons";
import { useDispatch } from "react-redux";
import { addIncome, addExpense } from "../redux/slices/budgetSlice";

const InsertIncExp = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      budgetType: "income",
      title: "",
      amount: 0
    },
    onSubmit: (values) => {
      const { budgetType, title, amount } = values;

      switch (budgetType) {
        case "income":
          dispatch(
            addIncome({ id: Date.now(), incomeName: title, value: amount })
          );
          break;
        case "expense":
          dispatch(
            addExpense({ id: Date.now(), expenseName: title, value: amount })
          );
          break;
        default:
          console.warn("Type Not Defined!!!");
      }
    },
    validate: (values) => {
      let errors = {};
      if (!values.title) {
        errors.title = true;
      }
      if (values.amount < 1) {
        errors.amount = true;
      }
      return errors;
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="add">
        <div className="add__container">
          <select
            name="budgetType"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.budgetType}
            className="add__type"
          >
            <option value="income">+</option>
            <option value="expense">-</option>
          </select>
          <input
            type="text"
            name="title"
            className={`add__description ${
              formik.touched.title && formik.errors.title ? "red-border" : ""
            } `}
            placeholder="Add Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          <input
            type="number"
            name="amount"
            className={`add__value ${
              formik.touched.amount && formik.errors.amount ? "red-border" : ""
            } `}
            placeholder="Value"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.amount}
          />
          <button className="add__btn" type="submit">
            <CheckmarkCircleOutline
              color={"#00000"}
              height="30px"
              width="30px"
            />
          </button>
        </div>
      </div>
    </form>
  );
};

export default InsertIncExp;
