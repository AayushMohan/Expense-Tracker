import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "long" }); // "en-us" is the locale for US
  const day = props.date.getDate(); // getDate() returns the day of the month
  const year = props.date.getFullYear(); // getFullYear() returns the year

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
