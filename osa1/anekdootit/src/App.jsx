import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const VoteCount = ({ votes, selected }) => {
  if (selected === -1) return <p>no anecdote yet</p>;
  return <p>has {votes[selected]} votes</p>;
};

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const [selected, setSelected] = useState(0);

  const [indexOfBest, setBest] = useState(-1);

  const selectNew = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const vote = () => {
    const copy = { ...votes };
    copy[selected] += 1;
    setVotes(copy);
    // console.log("äänestetty anekdoottia ", selected);
    // console.log("Ääniä nyt ", copy[selected]);

    if (copy[selected] > votes[indexOfBest] || indexOfBest === -1) {
      setBest(selected);
    }
  };

  // console.log(indexOfBest);
  return (
    <div>
      <Header text="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <VoteCount votes={votes} selected={selected} />
      <Button handleClick={selectNew} text="Next anecdote" />
      <Button handleClick={vote} text="Vote" />
      <Header text="Anecdote with most votes" />
      <p>{anecdotes[indexOfBest]}</p>
      <VoteCount votes={votes} selected={indexOfBest} />
    </div>
  );
};

export default App;
