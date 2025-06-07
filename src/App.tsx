
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {createContext} from "react";


export const MessageContext=createContext('');

function App(){
    const message="Hello There";
    return(
       <MessageContext.Provider value={message}>
           <div className="app">
               <Counter/>
           </div>
       </MessageContext.Provider>
    );
}

export default App;