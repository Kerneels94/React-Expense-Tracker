import { useEffect, useState } from "react";

/**
 * @description Function to populate the table with data from localstorage
 * @returns
 */
const ExpenseTable = () => {
  const [dataArray, setDataArray] = useState<any[]>([]);
  const [arrayUpdated, setArrayUpdated] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  /**
   * @description Function to filter the data upon user search by name
   */

  const filterFunction = async () => {
    let filterData;
    const data = await localStorage.getItem("data");
    // Check data
    if (data) {
      filterData = JSON.parse(data);
      // filter data by name
      filterData.filter((item: any) => item.name.includes(filter));
      setFilter(filterData);
    }
  };

  /**
   * @description Function to grab data from the localstorage
   */
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
      <input
        type="text"
        name="search"
        id="search"
        value={filter}
        onChange={filterFunction}
      />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {arrayUpdated
            ? dataArray.map((item) => {
                return (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.amount}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
