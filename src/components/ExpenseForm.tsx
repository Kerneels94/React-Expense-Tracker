import { useState } from "react";
import styles from "./ExpenseForm.module.css";
import { Expenses, ExpensesType } from "./../interfaces/expensesInterface";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * @description Expenses form to take user input
 * @returns JSX.Element
 */

export default function ExpenseForm() {
  const [expenseName, setExpenseName] = useState("");
  const [expenseDate, setExpenseDate] = useState(Date);
  const [expenseAmount, setExpenseAmount] = useState(Number);
  const [editDate, setEditDate] = useState(Date);

  async function addEntry(): Promise<ExpensesType> {
    let isExpenseCreated: boolean = false;
    let expenseData: Expenses | null = null;

    // If the expense exists get it
    let expenseExist = await prisma.expenses.findMany({
      where: {
        expenseName: expenseName,
      },
    });

    // Check if expenses ixist
    expenseExist ? !isExpenseCreated : isExpenseCreated;

    try {
      if (expenseExist && isExpenseCreated) {
        let createExpense = await prisma.expenses.create({
          data: {
            expenseName: expenseName,
            expenseAmount: expenseAmount,
            expenseDate: expenseDate,
            editDate: editDate,
          },
        });

        isExpenseCreated = true;
        expenseData = createExpense;

        return {
          isCreated: isExpenseCreated,
          expenseData: expenseData,
        };
      }
    } catch (error) {
      console.log("Expense could not be created", error);
    } finally {
      await prisma.$disconnect();
    }

    return {
      isCreated: isExpenseCreated,
      expenseData: expenseData,
    };
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
          onChange={(e) => setExpenseAmount(parseInt(e.target.value))}
        />

        <button type="button" onClick={addEntry}>
          Add Expense
        </button>
      </form>
    </>
  );
}
