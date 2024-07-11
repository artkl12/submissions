import { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import DisplayMost from "./DisplayMost";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const nextAnecdote = () => {
    const nextIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(nextIndex);
  };

  const collectVotes = () => {
    const newVote = [...votes];
    newVote[selected] += 1;
    setVotes(newVote);
  };

  return (
    <>
      <Display anecdotes={anecdotes} selected={selected} votes={votes} />
      <Button onClick={collectVotes} text="vote" />
      <Button onClick={nextAnecdote} text="next anecdote" />
      <DisplayMost anecdotes={anecdotes} votes={votes} />
    </>
  );
};

export default App;
