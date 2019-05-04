import React from 'react';
import data from './data.json';
import './App.css';

function App() {
  const recyclables = data.recyclables;
  const categories = data.categories;
  return (
    <div className="App">
      {0 < categories.length && (
        <ul className="app__categories">
          {categories.forEach((item) => {
            console.log(item.name);
            return (
              <li key={item}>
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
      {0 < recyclables.length && (
        <ul className="app__recyclables">
          {recyclables.forEach((item) => {
            console.log(item.name);
            return (
              <li key={item}>
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
