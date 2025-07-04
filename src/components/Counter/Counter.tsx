import './Counter.css'
import { useReducer } from "react";
import { Message } from "../Message/Message";
import {counterSlice, incrementAsync} from "../../slices/counterSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store";
import {decrement, increment} from "../../slices/counterSlice";



// import {useEffect, useState} from "react";
export function Counter() {

    /*const [state, dispatch] = useReducer(
        counterSlice, {
            count: 0,
            error: null
        }
    );*/



    const dispatch = useDispatch<AppDispatch>();
    /*const count= useSelector((state:CounterState) => state.count);
    const error=useSelector((state:CounterState) => state.error);*/

    const{count,error} = useSelector(
        (state:RootState) => state.counter
    )

    return (
        <div className="counter">
            <h1>React Counter(Functional Components)</h1>
            <h2>Count:{count}</h2>
            {error && <span className="error">{error}</span>}
            <div>
                <button className="button" onClick={() => dispatch(increment())}>+</button>
                <button className="button" onClick={() => dispatch(decrement())}>-</button>
                <button className="button" onClick={() => dispatch(incrementAsync(1))}> Async Add 1</button>
            </div>
            <Message/>
        </div>
    );
}

