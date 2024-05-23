import { useState } from "react";
import "./App.css"
import TextForm from "./components/Counter"
import TextFormOnFly from "./components/CounterOnFly";

export default function App() {
  const [selectedForm, setSelectedForm] = useState(1);

  const handleFormSelect = (formNumber: number): void => {
    setSelectedForm(formNumber);
  };

  return (
    <main>
     <h1>Word Counter</h1>
     <div>
        <button onClick={() => handleFormSelect(1)} disabled={selectedForm === 1}>Simple Counter</button>
        <button onClick={() => handleFormSelect(2)} disabled={selectedForm === 2}>On Fly Counter</button>
      </div>
      {selectedForm === 1 && <TextForm />}
      {selectedForm === 2 && <TextFormOnFly />}
    </main>
  )
}
