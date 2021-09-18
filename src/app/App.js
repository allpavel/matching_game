import React from 'react';
import { useDispatch } from 'react-redux';
import { setBoard, resetCards } from '../features/board/boardSlice';
import { Board } from '../features/board/board';

export const App = () => {
    const dispatch = useDispatch();

    const startGameHandler = () => {
        dispatch(setBoard());
    };

    const tryAgainHandler = () => {
        dispatch(resetCards());
    };

    return (
        <div className="App">
            <Board />
            <footer className="footer">
                <button onClick={startGameHandler} className="start-button">Start Game</button>
                <button onClick={tryAgainHandler} className="try-new-pair-button">Try New Pair</button>
            </footer>
        </div>
    )
}