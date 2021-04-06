import { useContext } from "react";
import { ContextData, UpdateContextData } from "../App";
import styled from "styled-components";

const TableItem = ({ id, name, country, playerScore }) => {
  const data = useContext(ContextData);
  const setData = useContext(UpdateContextData);

  const removePlayer = () => {
    const updatedData = data.filter((dataItem, index) => index !== id);
    setData(updatedData);
    localStorage.setItem("scores", JSON.stringify(updatedData));
  };

  const pointsOperation = (e) => {
    const updatedData = data.map((dataItem, key) => {
      if (id === key && e.target.dataset.type === "increase") {
        dataItem.playerScore = parseInt(dataItem.playerScore) + 5;
      } else if (id === key && e.target.dataset.type === "decrease") {
        dataItem.playerScore = parseInt(dataItem.playerScore) - 5;
      }
      return dataItem;
    });
    setData(updatedData);
    localStorage.setItem("scores", JSON.stringify(updatedData));
  };

  return (
    <StyledTableItem>
      <StyledSection sectionLeft>
        <StyledTableItemData>{name}</StyledTableItemData>
        <StyledTableItemData>{country}</StyledTableItemData>
        <StyledTableItemData>{playerScore}</StyledTableItemData>
      </StyledSection>
      <StyledSection>
        <StyledButton onClick={removePlayer}>R</StyledButton>
        <StyledButton data-type={"increase"} onClick={pointsOperation}>
          +5
        </StyledButton>
        <StyledButton data-type={"decrease"} onClick={pointsOperation}>
          -5
        </StyledButton>
      </StyledSection>
    </StyledTableItem>
  );
};

export default TableItem;

const StyledTableItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  background-color: #e8a87c;
  padding: 5px 15px 5px 5px;
`;

const StyledSection = styled.div`
  display: flex;
  flex: ${(props) => (props.sectionLeft ? 1 : null)};
`;

const StyledTableItemData = styled.div`
  margin-right: 3%;
  width: 30%;
  color: #000;
`;

const StyledButton = styled.div`
  margin-right: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: #f8ede5;
  }
`;
