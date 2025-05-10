import './Counter.css'
import {useEffect, useState} from "react";

export function Counter(props: any) {

    const [count,setCount]=useState(0);

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

    const increment =()=>{
        setCount((prevCount) => prevCount+1)
    }

    const decrement =()=>{
        setCount((prevCount) => prevCount-1)
    }

    return (
        <div className="counter">
            <h1>React Counter(Functional Components)</h1>
            <h2>Count:{count}</h2>
            <div>
                <button className="button" onClick={increment}>+</button>
                <button className="button" onClick={decrement}>-</button>
            </div>
        </div>
    );
}