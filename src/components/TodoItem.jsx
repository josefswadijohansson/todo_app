import React, {useState} from 'react';
import TodoContentArea from './TodoContentArea';
import RoundButton from './RoundButton';


function TodoItem(props){

    function handleDelete(){
        props.onDelete(props.id);
    }

    return (
    <div className='todo-item'>
        <TodoContentArea id={props.id}/>
        <RoundButton text="" onClick={handleDelete} specialClass={"delete-button"}/>
    </div>);
}

export default TodoItem;