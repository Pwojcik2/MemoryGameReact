
import { useState } from 'react';
import './App.css';
import CardComponent from './components/CardComponent';

function App() {

  const [cards, setCards] = useState([])

  const intialCards = [
    {'src' : '/images/blue.png'},
    {'src' : '/images/green.png'},
    {'src' : '/images/orange.png'},
    {'src' : '/images/purple.png'},
    {'src' : '/images/red.png'},
    {'src' : '/images/yellow.png'}
  ]

  const shuffleCards = () => {
    const shuffledCards = [... intialCards, ...intialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
  }

  return (
    <div className="App">
      <div className='card-grid'>
        <CardComponent card={cards}/>
      </div>
      <button onClick={shuffleCards}>Reset</button>
    </div>
  );
}

export default App;
