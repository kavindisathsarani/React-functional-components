import './Counter.css'
import {useReducer} from "react";

//Define the state of the component
interface State {
    count:number,
    error:string | null
}

//Defines the actions managed within the counter app
interface Action {
    type:'increment' | 'decrement'
}

function reducer(state: State, action: Action) {
    const {type} = action;
    switch (type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            }
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            }
            default:
                return state;
    }

}

// import {useEffect, useState} from "react";
export function Counter(props: any) {

    const[state,dispatch    ]=useReducer(
        reducer,{
            count:0,
            error:null
        }

    );

    /*const [count,setCount]=useState(0);

    useEffect(() => {
        alert("componentDidMount: " +
            "Component has been mounted! " +
            "Props: " + props.data);

        return () => {
            alert("componentWillUnmount: " +
                "Component is being removed");
        }
    },[]); //Run Only Once.deps=Dependencies

    useEffect(() => {
        alert("componentDidUpdate: "+
        "count has been updated")
    }, [count]); //Run each time when count change
*/
    /*const increment =()=>{
        setCount((prevCount) => prevCount+1)
    }

    const decrement =()=>{
        setCount((prevCount) => prevCount-1)
    }
*/
    return (
        <div className="counter">
            <h1>React Counter(Functional Components)</h1>
            <h2>Count:{state.count}</h2>
            <div>
                <button className="button" onClick={()=>dispatch({type:'increment'})}>+</button>
                <button className="button" onClick={()=>dispatch({type:'decrement'})}>-</button>
            </div>
        </div>
    );
}