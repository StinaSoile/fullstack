const Header = (props) => {
  const { course } = props;
  return <h1>{course.name}</h1>;
};

const Part = (props) => {
  const { part } = props;
  return (
    <div>
      {part.name}, {part.exercises}
    </div>
  );
};

const Content = (props) => {
  const { course } = props;
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </div>
  );
};

const Total = (props) => {
  const { course } = props;
  const ex1 = course.parts[0].exercises;
  const ex2 = course.parts[1].exercises;
  const ex3 = course.parts[2].exercises;
  const sum = ex1 + ex2 + ex3;
  return <p>Total number of exercises: {sum}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
