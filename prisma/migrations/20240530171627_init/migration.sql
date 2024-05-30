-- CreateTable
CREATE TABLE "Expenses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "expenseName" TEXT NOT NULL,
    "expenseAmount" INTEGER NOT NULL,
    "expenseDate" DATETIME NOT NULL,
    "createdDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "editDate" DATETIME NOT NULL
);
