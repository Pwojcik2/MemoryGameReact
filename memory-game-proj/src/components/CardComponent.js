import './CardComponent.css'

export default function CardComponent({ card }) {
    return(
        <>
        {card.map(card => (
            <div className='card' key={card.id}>
              <div>
                <img className='front' src={card.src} alt='card'></img>
                <img className='cover' src='/images/cover.png' alt='cover'></img>
              </div>
            </div>
          ))}
        </>
    )
}