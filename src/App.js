import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "./components/Table";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Table />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
