import React, {useEffect, useState} from 'react';


function TodoContentArea(props){
    const [isDone, setIsDone] = useState(props.isDone);
    const [content, setContent] = useState("");
    const [rowsCount, setRowsCount] = useState(1);

    useEffect(() => {
        setContent(props.content);

        const textWidth = calculateTextWidth(props.content);

        const rows = (textWidth / 555.0) + 1; 

        setRowsCount(parseInt(rows));
    }, [props.content]);

    function calculateTextWidth(text) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        context.font = "14pt Heebo";
        const metrics = context.measureText(text);
        
        return metrics.width;
    }


    function handleChecked(){
        const newValue = !isDone;

        setIsDone(newValue);

        props.onUpdateIsDone(props.id, newValue);
    }

    function handleTextAreaChange(event){
        const newValue = event.target.value;

        setContent(newValue);

        const textWidth = calculateTextWidth(newValue);

        const rows = (textWidth / 555.0) + 1; 

        setRowsCount(rows);
    }

    function handleChangeContent(){
        props.onUpdateContent(props.id, content);
    }

    return (
    <div className="content-area" style={isDone ? {backgroundColor:"#CCFFCC"} : {backgroundColor:"white"}}>
        <input type="checkbox" onClick={handleChecked} value={props.isDone} defaultChecked={props.isDone}/>
        <textarea id={props.id} value={content} onBlur={handleChangeContent} maxLength={256} onChange={handleTextAreaChange} style={isDone ? {backgroundColor:"#CCFFCC"} : {backgroundColor:"white"}} spellCheck={false} rows={rowsCount}/>
    </div>);
}

export default TodoContentArea;