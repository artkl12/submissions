import StatisticsLine from "./StatisticsLine";

const Statistics = (props) => {
  const average = ((props.good - props.bad) / props.allClicks).toFixed(2);
  const positive = `${((props.good * 100) / props.allClicks).toFixed(2)} %`;

  return (
    <>
      <h1>statistics</h1>
      {props.good || props.neutral || props.bad ? (
        <table>
          <tbody>
            <StatisticsLine value={props.good} text={"Good: "} />
            <StatisticsLine value={props.neutral} text={"Neutral: "} />
            <StatisticsLine value={props.bad} text={"Bad: "} />
            <tr>
              <td>Average: </td>
              <td>{average}</td>
            </tr>
            <tr>
              <td>Positive: </td>
              <td>{positive}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        "No feedback given"
      )}
    </>
  );
};

export default Statistics;
