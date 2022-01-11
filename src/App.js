import React from 'react'
import './App.css';
import Forms from './components/Todo/Forms'
import TodoList from './components/Todo/TodoList'




function App() {
    return ( 
        <div className = "App" >
            <h1>My TodoList
                <div>  
                    <Forms/>
                
                </div>
               
            </h1>
        </div>

       
    );
}
export default App;