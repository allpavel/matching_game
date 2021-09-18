import { createStore, combineReducers } from 'redux';
import { boardReducer } from '../features/board/boardSlice';

export const store = createStore(combineReducers({
    board: boardReducer
}));