import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleIDs, selectMatchedIDs, flipCard, resetCards } from '../board/boardSlice';

let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";

export const Card = ({ id, contents }) => {
    const visibleIDs = useSelector(selectVisibleIDs);
    const matchedIDs = useSelector(selectMatchedIDs);
    const dispatch = useDispatch();

    const flipHandler = (id) => {
        dispatch(flipCard(id));
    };

    const tryAgainHandler = () => {
        dispatch(resetCards());
    };

    let cardStyle = "resting";

    let click = () => flipHandler(id);

    let cardText = (
        <img src={cardLogo} className="logo-placeholder" alt="Card logo" />
    );

    if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
        cardText = contents;
        click = () => {};
    }

    if (matchedIDs.includes(id)) {
        cardStyle = "matched";
    }

    if (visibleIDs.length == 2) {
        click = tryAgainHandler;
    }

    if (visibleIDs.length >= 2) {
        cardStyle = "no-match";
    }

    return (
        <button onClick={click} className={"card " + cardStyle}>{cardText}</button>
    );
};