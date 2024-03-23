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
    </>
  );
};

export default App;
