const DisplayMost = (props) => {
  const maxVote =
    props.anecdotes[props.votes.indexOf(Math.max(...props.votes))];
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{maxVote}</p>
      <p>has {Math.max(...props.votes)} votes</p>
    </>
  );
};

export default DisplayMost;
