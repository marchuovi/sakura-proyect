import { useState, useEffect } from "react";
import { Data } from "../functions/Data";
import '../styles/board.css'
import Card from "./Card";

function Board() {
    const [cards, setCards] = useState([]);
    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        shuffle(Data);
        setCards(Data);
    }, [])

    return (
        <div className="board">
            {
                cards.map((card) => (
                    <Card key={card.id} id={card.id} frontFace={card.sakuraCard} backFace={card.cardsReverse.sakuraReverse} meaning={card.meaning} />
                ))
            }
        </div>
    )
}

export default Board;