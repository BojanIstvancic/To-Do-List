import { useState, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import "./app.css";

export const ContextData = createContext();
export const UpdateContextData = createContext();

function App() {
  const getData = () => {
    let scores;
    let sortedScores;
    if (localStorage.getItem("scores") === null) {
      sortedScores = [];
    } else {
      scores = JSON.parse(localStorage.getItem("scores"));
      sortedScores = scores.sort((a, b) => b.score - a.score);
    }
    return sortedScores;
  };

  const [data, setData] = useState(getData());
  return (
    <div className="App">
      <ContextData.Provider value={data}>
        <UpdateContextData.Provider value={setData}>
          <Switch>
            <Route>
              <HomePage path="/" />
            </Route>
          </Switch>
        </UpdateContextData.Provider>
      </ContextData.Provider>
    </div>
  );
}

export default App;
