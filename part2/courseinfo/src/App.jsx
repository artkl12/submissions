import Course from "./components/Course";
import Header from "./components/Header";

const App = (props) => {
  

  return (
    <>
      <Header />
      {props.courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default App;
