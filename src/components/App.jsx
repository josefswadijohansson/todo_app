import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import TodoItem from './TodoItem';

function App(){
    const [todoItems, setTodoItems] = useState([]);
    const [counter, setCounter] = useState(0);

    function addTodoItem(){
        const newTodoItem = {id:getNextId(), isDone:false, content:""};

        setTodoItems((prevValues) => {
            return [...prevValues, newTodoItem]
        });
    }

    function deleteTodoItem(id){
        setTodoItems( (prevValues) => {
            return prevValues.filter( (item) => {
                return item.id != id;
            })
        })
    }

    function getNextId(){
        setCounter((prev) => prev + 1);
        return counter;
    }

    return <div>
        <Header onAdd={addTodoItem}/>
        <main>
        <h1>My Tasks</h1>
            {todoItems.map( (item, index) => {
                return <TodoItem 
                            id={item.id} 
                            key={item.id}
                            onDelete={deleteTodoItem}
                            />
            })}
        </main>
        <Footer />
    </div>;
}

export default App;