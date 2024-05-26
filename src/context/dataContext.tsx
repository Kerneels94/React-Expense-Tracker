// context
import {createContext, useState} from "react"

interface IData {

};

const DefaultState = {

};


export const DataContext = createContext(DefaultState as unknown as IData);

const dataProvider = () => {

    const [expenseName, setExpenseName] = useState("");
    const [expenseDate, setExpenseDate] = useState("");
    const [expenseAmount, setExpenseAmount] = useState(Date());

    const updateExpenseName = () => {
        setExpenseName(expenseName)
    }

    const updateExpenseAmount = () => {
        setExpenseAmount(expenseDate)
    }

    const updateExpenseDate = () => {
        setExpenseDate(expenseDate)
    }

    const state = {
        expenseName,
        expenseAmount,
        expenseDate,
        updateExpenseAmount,
        updateExpenseDate,
        updateExpenseName
    }

    return <DataContext.Provider value={state}></DataContext.Provider>
}

export default dataProvider
