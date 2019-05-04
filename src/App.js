import React from 'react';
import data from './data.json';
import './App.css';

function App() {
  const recyclables = data.recyclables;
  const categories = data.categories;
  console.log(recyclables);
  return (
    <div className="App">
      <ul className="App__header">
        {categories.forEach((item) => {
          console.log(item.name);
          return (
            <li key={item}>
              {item.name}
            </li>
          );
        })}
        {recyclables.forEach((item) => {
          console.log(item.name);
          return (
            <li key={item}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
