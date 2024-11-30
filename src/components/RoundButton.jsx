import React, {useState} from 'react';

function RoundButton(props){

    function noneCall(){

    }

    return (
    <div>
        <button className={props.specialClass} onClick={() => {
            props.onClick != null ? props.onClick() : noneCall();
        }}>{props.text}</button>
    </div>);
}

export default RoundButton;