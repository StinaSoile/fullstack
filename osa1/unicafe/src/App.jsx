import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ value, text }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (all === 0) return <p>No feedback given</p>;
  const avg = (good - bad) / all;
  const per = (good / all) * 100;
  return (
    <table>
      <tbody>
        <StatisticLine value={good} text="good" />
        <StatisticLine value={neutral} text="neutral" />
        <StatisticLine value={bad} text="bad" />
        <StatisticLine value={all} text="all" />
        <StatisticLine value={avg} text="average" />
        <StatisticLine value={per} text="positive" />
      </tbody>
    </table>
  );
};

const App = () => {
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
