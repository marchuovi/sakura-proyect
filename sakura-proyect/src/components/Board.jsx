import { useState, useEffect } from "react";
import Data from "../functions/Functions";
import '../styles/board.css'
import Card from "./Card";

function Board() {
    const [cards, setCards] = useState([]);
    // useEffect(() => { GetCards() }, [])
    useEffect(() => {
        setCards(Data)
    } , [])

    return (
        <div className="board">
            {
            cards.map((card) => (
                <Card key={card.id} id={card.id} frontFace={card.sakuraCard} backFace={card.cardsReverse.sakuraReverse} meaning={card.meaning}/>
            ))
            }
        </div>
    )
}

export default Board;