import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import CounterCard from "./components/CounterCard";
import StudentCard from "./components/StudentCard";

function App() {
  const [students, setStudents] = useState([
    {
      name: "Ram Kumar",
      class: "BCA",
      subStream: "CS",
    },
    {
      name: "Shatrughan Kumar",
      class: "12",
      subStream: "Art",
    },
    {
      name: "Bharat Kumar",
      class: "10",
      subStream: "Mathematics",
    },
    {
      name: "Lakshman",
      class: "11",
      subStream: "Art",
    },
  ]);

  useEffect(() => {
    console.log("Hi I am mounted");
  }, []);

  return (
    <>
      {/* <React.Fragment> */}
      {/* <Fragment> */}
      <div style={{ display: "flex", gap: "1.25rem" }}>
        <CounterCard />
        <CounterCard />
        <CounterCard />
      </div>
      <div>
        <h2>Students List</h2>
        <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
          {students.map((student, index) => (
            <StudentCard stdDetails={student} key={index} />
          ))}
        </div>
      </div>
      {/* </Fragment> */}
      {/* </React.Fragment> */}
    </>
  );
}

export default App;
