const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  const arr = [];
  for (const x of props.parts) {
    const d = (
      <div key={x[0]}>
        Part: {x[0]}, Exercises: {x[1]}
      </div>
    );
    arr.push(d);
  }

  return <div>{arr}</div>;
};

const Total = (props) => {
  return <p>Total number of exercises: {props.total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const total = exercises1 + exercises2 + exercises3;

  const parts = [
    [part1, exercises1],
    [part2, exercises2],
    [part3, exercises3],
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={total} />
    </div>
  );
};

export default App;
