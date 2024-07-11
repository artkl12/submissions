import { useState } from "react";
import Button from "./Button";
import Statistic from "./Statistic";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState(0);

  const increaseGood = () => {
    setGood((prevGood) => prevGood + 1);
    setAll((prevAll) => prevAll + 1);
  };
  const increaseNeutral = () => {
    setNeutral((prevNeutral) => prevNeutral + 1);
    setAll((prevAll) => prevAll + 1);
  };
  const increaseBad = () => {
    setBad((prevBad) => prevBad + 1);
    setAll((prevAll) => prevAll + 1);
  };

  const average = () => {
    return ((good - bad) / allClicks).toFixed(2);
  };

  const positive = () => {
    return ((good * 100) / allClicks).toFixed(2);
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <h1>statistics</h1>

      {good || neutral || bad ? (
        <table>
          <tbody>
            <tr>
              <td>good: </td>
              <td>
                <Statistic value={good} />
              </td>
            </tr>
            <tr>
              <td>neutral: </td>
              <td>
                <Statistic value={neutral} />
              </td>
            </tr>
            <tr>
              <td>bad: </td>
              <td>
                <Statistic value={bad} />
              </td>
            </tr>
            <tr>
              <td>average: </td>
              <td>
                <Statistic value={average()} />
              </td>
            </tr>
            <tr>
              <td>positive: </td>
              <td>
                <Statistic value={`${positive()} %`} />
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <Statistic text={"No feedback given"} />
      )}
    </>
  );
};

export default App;
