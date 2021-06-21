import React, { useState } from 'react';
import logo from './logo.svg';
import { CongratulationsMessage } from "./CongratulationsMessage";
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import { CounterButton } from './CounterButton';
import './App.css';

const people = [{
  name: 'John',
  age: 40,
  hairColor: 'brown',
}, {
  name: 'Helga',
  age: 25,
  hairColor: 'red',
}, {
  name: 'Dwayne',
  age: 55,
  hairColor: 'blonde',
}];


function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <header className="App-header">
        <CongratulationsMessage numberOfClicks={numberOfClicks} threshold={10} />
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
      </header>
    </div>
  );
}

export default App;
