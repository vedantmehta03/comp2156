import './App.css';
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <h1>Studen ID: 101485649</h1>
      <h1>Studen ID: Vedant Mehta</h1>
      <h1>Computer Systems Technology</h1>
      <h5>Powered By: moxDroid Labs Inc. || DevOps</h5>
      <StudentForm addStudent={addStudent} />
      Developerd By: Vedant Mehta
      <StudentList students={students} />
    </div>
  );
};

export default App;
