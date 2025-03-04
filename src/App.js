import { useState } from "react";
import "./App.css";
import CounterCard from "./components/CounterCard";

function App() {
  return (
    <div className="main-container">
      <CounterCard />
      <CounterCard />
      <CounterCard />
      <CounterCard />
      <CounterCard />
    </div>
  );
}

export default App;
