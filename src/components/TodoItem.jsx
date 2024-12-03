import React from 'react';
import TodoContentArea from './TodoContentArea';
import RoundButton from './RoundButton';


function TodoItem(props){

    function handleDelete(){
        props.onDelete(props.id);
    }

    return (
    <div className='todo-item'>
        <TodoContentArea id={props.id} onUpdateContent={props.onUpdateContent} onUpdateIsDone={props.onUpdateIsDone} content={props.content} isDone={props.isDone}/>
        <RoundButton text="" onClick={handleDelete} specialClass={"delete-button"}/>
    </div>);
}

export default TodoItem;