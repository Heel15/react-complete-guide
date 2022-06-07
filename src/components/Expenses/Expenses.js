import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

// import ExpenseItem from "./ExpenseItem";

import ExpensesList from "./ExpensesList";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    props.onSelectYear(filteredYear);
  };

  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* there are many type of way to do conditional code in to react */}
        {/* 1st way of condition */}
        {/* {filteredItems.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredItems.length > 0 &&
          filteredItems.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* 2nd way of condition */}
        {/* {filteredItems.length === 0 && <p>No expenses found.</p>}
        {filteredItems.length > 0 &&
          filteredItems.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* 3rd way of condition, which is cleaner approach */}
        {/* {expensesContent} */}

        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
}
export default Expenses;
