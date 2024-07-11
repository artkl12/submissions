import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

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

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text="good" />
      <Button onClick={increaseNeutral} text="neutral" />
      <Button onClick={increaseBad} text="bad" />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        allClicks={allClicks}
      />
    </>
  );
};

export default App;
