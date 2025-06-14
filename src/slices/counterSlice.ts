import {createSlice} from "@reduxjs/toolkit";

export interface CounterState {
    count: number,
    error: string | null
}

const initialState: CounterState = {
    count: 0,
    error: null
}

//Defines the actions managed within the counter app
interface CounterAction {
    type: 'increment' | 'decrement'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            if (hasError) {
                state.error = 'Maximum value Reached';
            } else {
                state.count = newCount;
                state.error = null;
            }
        },
        decrement(state) {
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            if (hasError) {
                state.error = 'Minimum value Reached';
            } else {
                state.count = newCount;
                state.error = null;
            }
        }
    }
});

export const {increment,decrement}
    = counterSlice.actions; //
export default counterSlice.reducer; //Export


