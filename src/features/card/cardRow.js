import React from 'react';
import { Card } from './card';

export const CardRow = ({ cards }) => {
    return (
        <>
            {cards.map(card => (
                <Card key={card.id} id={card.id} contents={card.contents} />
            ))}
        </>
    );
};