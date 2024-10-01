import "./CardComponent.css";

export default function CardComponent({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <>
      <div className="card" key={card.id}>
        <div>
          <img className="front" src={card.src} alt="card"></img>
          <img
            className="cover"
            onClick={handleClick}
            src="/images/cover.png"
            alt="cover"
          ></img>
        </div>
      </div>
    </>
  );
}
