import { useEffect, useState } from "react";

/**
 * @description Function to populate the table with data from localhost
 * @returns
 */
const ExpenseTable = () => {
  const [dataArray, setDataArray] = useState<any[]>([]);
  const [arrayUpdated, setArrayUpdated] = useState<boolean>(false);

  const runFunction = () => {
    const data = localStorage.getItem("data");
    if (data !== null) {
      const parsedData = JSON.parse(data);
      setDataArray(parsedData);
    }
  };

  useEffect(() => {
    runFunction();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((item) => {
            return (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
