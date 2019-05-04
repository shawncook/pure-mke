import React from 'react';
import data from './data.json';
import './App.css';
import ElasticSearch from './components/elasticSearch/index.js';

function App() {
  const recyclables = data.recyclables;
  const categories = data.categories;
  console.log(recyclables);
  return (
    <div className="App">
      <ElasticSearch />
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
