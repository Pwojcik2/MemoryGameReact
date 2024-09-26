
import { useState } from 'react';
import './App.css';

function App() {

  const [cards, setCards] = useState([])

  const intialCards = [
    {color : 'red'},
    {color : 'blue'},
    {color : 'yellow'},
    {color : 'orange'},
    {color : 'green'}
  ]

  const shuffleCards = () => {
    const shuffledCards = [... intialCards, ...intialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
  }

  return (
    <div className="App">

      <button onClick={shuffleCards}>Reset</button>
    </div>
  );
}

export default App;
