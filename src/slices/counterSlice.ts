import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

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

export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (count: number) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return count;
    }
)
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                console.log("incrementAsync is still pending");
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.count += action.payload;
            });
    }
});


export const {
    increment, decrement
} = counterSlice.actions; //
export default counterSlice.reducer; //Export


