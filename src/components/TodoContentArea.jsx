import React, {useState} from 'react';


function TodoContentArea(props){
    const [isDone, setIsDone] = useState(props.isDone);
    const [content, setContent] = useState("");

    function calculateTextWidth(text) {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        context.font = "14pt Heebo";
        const metrics = context.measureText(text);
        
        return metrics.width;
    }


    function handleChecked(){
        setIsDone(!isDone);
    }

    function handleTextAreaChange(event){
        const newValue = event.target.value;

        setContent(newValue);

        const textWidth = calculateTextWidth(newValue);

        const rows = (textWidth / 555.0) + 1; 

        event.target.rows = parseInt(rows);
    }


    return (
    <div className="content-area" style={isDone ? {backgroundColor:"#CCFFCC"} : {backgroundColor:"white"}}>
        <input type="checkbox" onClick={handleChecked} value={isDone}/>
        <textarea id={props.id} maxLength={256} onChange={handleTextAreaChange} style={isDone ? {backgroundColor:"#CCFFCC"} : {backgroundColor:"white"}} spellCheck={false} autoFocus rows={1}/>
    </div>);
}

export default TodoContentArea;