import { useState, useContext } from "react";
import styled from "styled-components";
import { ContextData, UpdateContextData } from "../App";

const Form = () => {
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [country, setCountry] = useState("country");
  const [playerScore, setPlayerScore] = useState("Player Score");
  const data = useContext(ContextData);
  const setData = useContext(UpdateContextData);

  const addPlayer = (e) => {
    e.preventDefault();
    if (
      firstName !== "" &&
      lastName !== "" &&
      country !== "" &&
      playerScore !== ""
    ) {
      const player = {
        name: `${firstName} ${lastName}`,
        country,
        playerScore,
      };
      const updatedData = [...data];
      updatedData.push(player);
      setData(updatedData);
      localStorage.setItem("scores", JSON.stringify(updatedData));
    } else {
      console.log("Something is missing!");
    }
  };
  return (
    <StyledForm>
      <StyledFormInput
        placeholder="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <StyledFormInput
        placeholder="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <StyledFormInput
        placeholder="country"
        value={country}
        onChange={(event) => setCountry(event.target.value)}
      />
      <StyledFormInput
        placeholder="Player Score"
        value={playerScore}
        onChange={(event) => setPlayerScore(event.target.value)}
      />
      <StyledFormButton onClick={addPlayer}>Add Player</StyledFormButton>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
`;

const StyledFormInput = styled.input`
  margin-right: 5px;
  border: 1px solid #e8a87c;
  &:focus {
    border: 1px solid #e8a87c;
    background: #e8a87c;
    color: #fff;
    outline: none;
  }

  &:focus::-webkit-input-placeholder {
    color: white;
  }
`;

const StyledFormButton = styled.button`
  background: #e8a87c;
  color: #fff;
  border: none;
  &:focus {
    outline: none;
    cursor: pointer;
    background: #fff;
    color: #e8a87c;
    border: 1px solid #e8a87c;
  }
`;
