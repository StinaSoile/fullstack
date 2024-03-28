const Header = ({ course }) => <h1>{course.name}</h1>;

const Total = ({ course }) => {
  let sum = course.parts.reduce((pre, curr) => pre + curr.exercises, 0);

  return <p>Total of {sum} exercises</p>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name}, {part.exercises} exercises
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total course={course} />
    </>
    //   <Part part={course.parts[0]} />
    //   <Part part={course.parts[1]} />
    //   <Part part={course.parts[2]} />
    //   <Total course={course} />
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  );
};

const Courses = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
  // return (
  //   <div>
  //     <Header course={course} />
  //     <Content course={course} />
  //   </div>
  // );
};
// "Sovelluksen komponenttirakenne voi olla esim. seuraava:
// App
//   Course
//     Header
//     Content
//       Part
//       Part
//       ...

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "State of art",
          exercises: 47,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Courses courses={courses} />
    </div>
  );
};

export default App;
