import React from 'react';
import './tailwind.output.css';
import Valentine from "./pages/Valentine";

function App() {
  return (
    <h1 className="text-3xl font-bold underline text-red-600">
      <Valentine />
    </h1>
  );  
}

export default App;
