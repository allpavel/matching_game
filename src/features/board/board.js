import React from 'react';
import { useSelector } from 'react-redux';
import { selectBoard } from './boardSlice';
import { CardRow } from '../card/cardRow';

export const Board = () => {
    const currentBoard = useSelector(selectBoard);
    const numberOfCards = currentBoard.length;
    const columns = 3;
    const rows = Math.floor(numberOfCards / columns);

    const getRowCards = (row) => {
        const rowCards = [];
        for (let i=0; i < columns; i++) {
            const cardIndex = row * columns + i;
            rowCards.push(currentBoard[cardIndex]);
        }
        return rowCards;
    };

    let content = [];
    for (let row = 0; row < rows; row++) {
        const rowCards = getRowCards(row);
        content.push(
            <CardRow key={row} cards={rowCards} />
        );
    }

    return <div className="cards-container">{content}</div>
}
