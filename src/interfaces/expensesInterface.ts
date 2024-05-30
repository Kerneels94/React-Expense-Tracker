// Interfaces

export interface Expenses {
  expenseName: string,
  expenseAmount: number,
  expenseDate: Date,
  createdAt?: Date,
  editDate?: Date,
}

export type ExpensesType = {
  isCreated: boolean;
  expenseData: Expenses | null;
}


