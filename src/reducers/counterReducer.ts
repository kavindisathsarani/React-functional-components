export interface CounterState {
    count: number,
    error: string | null
}

//Defines the actions managed within the counter app
interface CounterAction {
    type: 'increment' | 'decrement'
}

export function counterReducer(state: CounterState, action: CounterAction) {
    const { type } = action;
    switch (type) {
        case 'increment':
            const newCountInc = state.count + 1;
            const hasErrorInc = newCountInc > 5;
            return {
                ...state,
                count: hasErrorInc ? state.count : newCountInc,
                error: hasErrorInc ? 'Maximum value Reached' : null
            }
        case 'decrement': {
            const newCountDec = state.count - 1;
            const hasErrorDec = newCountDec < 0;
            return {
                ...state,
                count: hasErrorDec ? state.count : newCountDec,
                error: hasErrorDec ? 'Minimum value Reached' : null
            }
        }
        default:
            return state
    }
}