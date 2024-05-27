import { useEffect, useState } from "react";

/**
 * @description Function to populate the table with data from localhost
 * @returns
 */
const ExpenseTable = () => {
  const [dataArray, setDataArray] = useState<any[]>([]);
  const [arrayUpdated, setArrayUpdated] = useState<boolean>(false);

  const runFunction = async () => {
    let parsedData;
    const data = await localStorage.getItem("data");
    if (data) {
      parsedData = JSON.parse(data);
      setDataArray(parsedData);
      setArrayUpdated(true);
    }
  };

  useEffect(() => {
    runFunction();
  }, [dataArray]);

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
          {arrayUpdated &&
            dataArray.map((item) => {
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
