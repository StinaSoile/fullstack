const Header = ({ course }) => <h2>{course.name}</h2>;

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

export default Course;
