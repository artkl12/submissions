const Total = ({ course }) => {
  return (
    <p>
      Number of exercises:{" "}
      {course.parts[0].exercise +
        course.parts[1].exercise +
        course.parts[2].exercise}
    </p>
  );
};

export default Total;
