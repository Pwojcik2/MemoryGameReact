import "./CardComponent.css";
import Images from "../images/images";

export default function CardComponent({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <>
      <div className="card" key={card.id}>
        <div className={flipped ? "flipped" : ""}>
          <img className="front" src={card.src} alt="card"></img>
          <img
            className="cover"
            onClick={handleClick}
            src={Images.coverSquare}
            alt="cover"
          ></img>
        </div>
      </div>
    </>
  );
}
