import { useEffect, useState } from "react";

/**
 * @description Expenses form to take user input
 * @returns JSX.Element
 */

export default function ExpenseForm() {
  const [dataArray, setDataArray] = useState<{}[]>([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  /**
   * @description Use effect to add data to localstorage
   */
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(dataArray));
  }, [dataArray]);

  /**
   * @description Function that addes a entry
   */
  function addEntry() {
    if (expenseName !== "" && expenseAmount !== "") {
      let newData = [
        ...dataArray,
        { name: expenseName, amount: expenseAmount, date: expenseDate },
      ];
      setDataArray(newData);
      setExpenseName("");
      setExpenseDate("");
      setExpenseAmount("");
    } else {
      console.log("data could not be added");
    }
  }

  return (
    <>
      <form>
        <h1>Enter expenses</h1>

        <label htmlFor="expenseName">Name</label>
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />

        <label htmlFor="expenseDate">Date</label>
        <input
          type="date"
          value={expenseDate}
          onChange={(e) => setExpenseDate(e.target.value)}
        />

        <label htmlFor="expenseAmount">Amount</label>
        <input
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />

        <button type="button" onClick={addEntry}>
          Add Expense
        </button>
      </form>
    </>
  );
}