const CourseTitle = (props) => {
  return (
    <>
      <h2>{props.courseTitle.name}</h2>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      {props.course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Total = (props) => {
  const sum = props.course.parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);

  return (
    <>
      <b>Total of {sum} exercises</b>
    </>
  );
};

const Course = (props) => {
  return (
    <>
      <CourseTitle courseTitle={props.course} />
      <Content course={props.course} />
      <Total course={props.course} />
    </>
  );
};

export default Course;
