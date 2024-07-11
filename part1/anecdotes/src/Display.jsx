const Display = (props) => {
  return (
    <>
      <h1>Anectode of the day</h1>
      <p>{props.anecdotes[props.selected]}</p>
      <p>has {props.votes[props.selected]} votes</p>
    </>
  );
};

export default Display