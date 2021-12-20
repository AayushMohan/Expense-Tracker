import React from "react";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-us", { month: "long" }); // "en-us" is the locale for US
  const day = props.date.getDate(); // getDate() returns the day of the month
  const year = props.date.getFullYear(); // getFullYear() returns the year

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDate;
