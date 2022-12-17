import { useEffect } from "react";
import { useState } from "react";
import GetCards from "./functions/Functions";

function Tablero() {
    const [cards, setCards] = useState([])
    useEffect(() => { GetCards(setCards) }, [])
    return (
        <>
            <div>
                {cards.map((card) => (
                    <div key={card.id}>
                        <img src={card.cardsReverse.sakuraReverse} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Tablero;