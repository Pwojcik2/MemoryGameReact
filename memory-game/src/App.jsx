import { useEffect, useState } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";

function App() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const intialCards = [
    { src: "src/assets/blue.png", matched: false },
    { src: "src/assets/green.png", matched: false },
    { src: "src/assets/orange.png", matched: false },
    { src: "src/assets/purple.png", matched: false },
    { src: "src/assets/red.png", matched: false },
    { src: "src/assets/yellow.png", matched: false },
  ];

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...intialCards, ...intialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
  };

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  //start game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
      <button onClick={shuffleCards}>Reset</button>
    </div>
  );
}

export default App;
