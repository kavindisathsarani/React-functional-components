import {combineReducers} from "redux";
import counterReducer from '../slices/counterSlice';

export const rootReducer = combineReducers({
    counter: counterReducer,
    // TODO - ADD More Reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
