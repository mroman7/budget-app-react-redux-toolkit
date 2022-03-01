import { createSlice } from "@reduxjs/toolkit";

export const budgetSlice = createSlice({
  name: "budget",
  initialState: {
    currency: "PKR",
    totalbudget: 0,
    totalExpense: 0,
    totalIncome: 0,
    totalPercExpense: 0,
    income: [{ id: Date().now, incomeName: "Online Work", value: 8000 }],
    expense: [{ id: Date().now, expenseName: "Groceries", value: 2000 }]
  },
  reducers: {
    addIncome: (state, action) => {
      state.income.push(action.payload);
    },
    addExpense: (state, action) => {
      state.expense.push(action.payload);
    },
    deleteIncome: (state, action) => {
      state.income = state.income.filter(
        (item) => item.id !== action.payload.item.id
      );
    },
    deleteExpense: (state, action) => {
      state.expense = state.expense.filter(
        (item) => item.id !== action.payload.item.id
      );
    },
    allbudget: (state) => {
      // get income + expense
      state.totalbudget = state.totalIncome - state.totalExpense;
    },
    allIncome: (state) => {
      // getting income amount in array format
      let inc = state.income.map((item) => item.value);
      let totalInc =
        inc.length > 0 ? inc.reduce((prev, current) => prev + current) : 0;
      state.totalIncome = totalInc;
    },
    allExpense: (state) => {
      // getting income amount in array format
      let exp = state.expense.map((item) => item.value);
      let totalExp =
        exp.length > 0 ? exp.reduce((prev, current) => prev + current) : 0;
      state.totalExpense = totalExp;
      state.totalPercExpense = ((totalExp / state.totalIncome) * 100).toFixed(
        1
      );
    }
  }
});

export const {
  addIncome,
  addExpense,
  deleteIncome,
  deleteExpense,
  allbudget,
  allIncome,
  allExpense
} = budgetSlice.actions;
export default budgetSlice.reducer;
