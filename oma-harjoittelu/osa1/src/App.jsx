import { useState } from "react";

const Hello = (props) => {
  const arr = ["kissa", "koira", "apina", "sika", "hevonen"];
  const index = Math.floor(Math.random() * arr.length);
  console.log(props);
  return (
    <h1>
      {arr[index].toUpperCase()}, älä {props.imperatiivi} lattialle!
    </h1>
  );
};

const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div> the app is used by pressing the buttons </div>;
  }
  return <div> button press history: {props.allClicks.join(" ")} </div>;
};

const Matikka = () => {
  const [zeros, setZeros] = useState(0);
  const [counter, setCounter] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  const increaseByOne = () => {
    setCounter(counter + 1);
    setTotal(total + 1);
    setAll(allClicks.concat("1"));
  };
  const setToZero = () => {
    setCounter(0);
    setZeros(zeros + 1);
    setTotal(total + 1);
    setAll(allClicks.concat("0"));
  };
  // setTimeout(() => setCounter(counter + 1), 1000);
  console.log(counter);
  console.log(zeros);
  return (
    <>
      <h1>Matikka</h1>
      <div>
        <Display counter={counter} />
        <Button handleClick={increaseByOne} text="plus" />
        <Button handleClick={setToZero} text="nollaa" />
        <History allClicks={allClicks} />
        <p>Total on: {total}</p>
      </div>
    </>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  return (
    <>
      <Hello imperatiivi="pasko" />
      <Hello imperatiivi="virkkaa" />
      <p>
        Hello world, it is <br />
        {now.toString()}
      </p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <hr />
      <Matikka />
      <h1>KYLLÄ MINÄ TEIN OSAN 1 KAIKKI TEHTÄVÄT TÄNÄÄN!!!111</h1>
    </>
  );
};

export default App;
