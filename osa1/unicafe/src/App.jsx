import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Feedback = ({ value, text }) => {
  return (
    <p>
      {text}
      {value}
    </p>
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
      <Feedback value={good} text="good: " />
      <Feedback value={neutral} text="neutral: " />
      <Feedback value={bad} text="bad: " />
    </div>
  );
};

export default App;
