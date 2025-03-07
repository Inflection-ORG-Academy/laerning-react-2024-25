import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import CounterCard from "./components/CounterCard";
import StudentCard from "./components/StudentCard";
import Navbar from "./components/Navbar";
import ConditionalRendering from "./components/ConditionalRendering";
import PopupModel from "./components/PopupModel";
import Accordian from "./components/Accordian";

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
      <Navbar />
      <section style={{ marginTop: "78px" }}>
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
        <ConditionalRendering />
        <section
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <PopupModel />
          <Accordian />
          <Accordian />
          <Accordian />
          <Accordian />
          <Accordian />
        </section>
      </section>
      {/* </Fragment> */}
      {/* </React.Fragment> */}
    </>
  );
}

export default App;
