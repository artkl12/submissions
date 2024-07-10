const Part = ({ name, exercise }) => {
  console.log({ name }, { exercise });
  return (
    <p>
      {name} {exercise}
    </p>
  );
};

const Content = ({ course }) => {
  console.log(course);
  return (
    <>
      <Part name={course.parts[0].name} exercise={course.parts[0].exercise} />
      <Part name={course.parts[1].name} exercise={course.parts[1].exercise} />
      <Part name={course.parts[2].name} exercise={course.parts[2].exercise} />
    </>
  );
};

export default Content;
