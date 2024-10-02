import { useEffect, useState } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";

function App() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const intialCards = [
    { src: "/images/blue.png" },
    { src: "/images/green.png" },
    { src: "/images/orange.png" },
    { src: "/images/purple.png" },
    { src: "/images/red.png" },
    { src: "/images/yellow.png" },
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
        console.log("MATCHED");
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
