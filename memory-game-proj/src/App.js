import { useEffect, useState } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";

function App() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const intialCards = [
    { src: "/images/blue.png", matched: false },
    { src: "/images/green.png", matched: false },
    { src: "/images/orange.png", matched: false },
    { src: "/images/purple.png", matched: false },
    { src: "/images/red.png", matched: false },
    { src: "/images/yellow.png", matched: false },
  ];

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...intialCards, ...intialCards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

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
        console.log("NO MATCH");
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  return (
    <div className="App">
      <div className="card-grid">
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>
      <button onClick={shuffleCards}>Reset</button>
    </div>
  );
}

export default App;
