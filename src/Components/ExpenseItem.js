import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "long" }); // "en-us" is the locale for US
  const day = props.date.getDate(); // getDate() returns the day of the month
  const year = props.date.getFullYear(); // getFullYear() returns the year

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
