import { useContext } from "react";
import TableItem from "./TableItem";
import { ContextData } from "../App";

const Table = () => {
  const data = useContext(ContextData);
  return (
    <div>
      <h3>Players List</h3>
      {data.length > 0 ? (
        data.map((dataItem, index) => {
          return (
            <TableItem
              key={index}
              id={index}
              name={dataItem.name}
              country={dataItem.country}
              playerScore={dataItem.playerScore}
            />
          );
        })
      ) : (
        <h3>We don't have any player added!</h3>
      )}
    </div>
  );
};

export default Table;
