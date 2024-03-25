import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Feedback = ({ value, text }) => {
  return (
    <li
      style={{
        listStyleType: "none",
      }}
    >
      {text}: {value}
    </li>
  );
};

const Average = ({ avg }) => {
  if (!Number.isFinite(avg)) avg = 0;
  return (
    <li
      style={{
        listStyleType: "none",
      }}
    >
      average: {avg}
    </li>
  );
};

const Positive = ({ per }) => {
  if (!Number.isFinite(per)) per = 0;
  return (
    <li
      style={{
        listStyleType: "none",
      }}
    >
      positive: {per}%
    </li>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (all === 0) return <p>No feedback given</p>;
  const avg = (good - bad) / all;
  const per = (good / all) * 100;
  return (
    <ul>
      <Feedback value={good} text="good" />
      <Feedback value={neutral} text="neutral" />
      <Feedback value={bad} text="bad" />
      <Feedback value={all} text="all" />
      <Average avg={avg} />
      <Positive per={per} />
    </ul>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
    console.log(good);
  };

  const increaseNeutral = () => {
    setNeutral(neutral + 1);
    console.log(neutral);
  };

  const increaseBad = () => {
    setBad(bad + 1);
    console.log(bad);
  };

  return (
    <div>
      <Header text="Give feedback" />
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <Header text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
