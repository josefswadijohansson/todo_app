import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import TodoItem from './TodoItem';

function App(){
    const [todoItems, setTodoItems] = useState([]);
    const [counter, setCounter] = useState(0);

    const savedKey = "todo_app_v1-savedState";

    useEffect( () => {
        loadTodos();
    }, []);


    function loadTodos(){
        const jsonData = JSON.parse(localStorage.getItem(savedKey));

        console.log(jsonData);

        setTodoItems(jsonData);
    }

    function saveTodos(){
        const jsonData = JSON.stringify(todoItems);

        localStorage.setItem(savedKey, jsonData);
    }

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

    function updateTodoContent(id, content){
        const todoItem = todoItems.find((item) => {
            return item.id == id;
        } );  

        todoItem.content = content;

        saveTodos();
    }

    function updateTodoIsDone(id, isDone){
        const todoItem = todoItems.find((item) => {
            return item.id == id;
        } );

        todoItem.isDone = isDone;

        saveTodos();
    }

    return <div>
        <Header onAdd={addTodoItem}/>
        <main>
        <h1>My Tasks</h1>
        {todoItems.map( (item, index) => {
            return <TodoItem 
                        id={item.id} 
                        key={item.id}
                        content={item.content}
                        isDone={item.isDone}
                        onDelete={deleteTodoItem}
                        onUpdateContent={updateTodoContent}
                        onUpdateIsDone={updateTodoIsDone}
                        />
        })}
        </main>
        <Footer />
    </div>;
}

export default App;