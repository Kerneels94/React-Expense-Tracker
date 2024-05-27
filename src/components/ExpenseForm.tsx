import { useEffect, useState } from "react";
import styles from "./ExpenseForm.module.css";

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
      alert("Data could not be added please fill in the fields");
    }
  }

  return (
    <>
      <form className={styles.container}>
        <h1 className={styles.heading}>Enter expenses</h1>

        <label htmlFor="expenseName">Name</label>
        <input
          className={styles.inputFields}
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />

        <label htmlFor="expenseDate">Date</label>
        <input
          className={styles.inputFields}
          type="date"
          value={expenseDate}
          onChange={(e) => setExpenseDate(e.target.value)}
        />

        <label htmlFor="expenseAmount">Amount</label>
        <input
          className={styles.inputFields}
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
