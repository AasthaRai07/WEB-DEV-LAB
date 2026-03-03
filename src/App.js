import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = [
      { id: 1, title: "Learn React", body: "React helps you build interactive user interfaces easily." },
      { id: 2, title: "Practice Coding", body: "Daily coding improves problem-solving skills." },
      { id: 3, title: "Build Projects", body: "Projects make your resume stronger." },
      { id: 4, title: "Stay Consistent", body: "Consistency brings long-term success." },
      { id: 5, title: "Never Give Up", body: "Keep learning and keep growing." }
    ];
    setItems(data);
  }, []);

  return (
    <div className="app">
      <h1 className="heading">Simple React Project</h1>
      <div className="card-container">
        {items.map((item) => (
          <Item key={item.id} title={item.title} body={item.body} />
        ))}
      </div>
    </div>
  );
}

export default App;
