import React, {useState} from 'react';
import RoundButton from './RoundButton';

function Header(props){
    function handleOnAdd(){
        props.onAdd();
    }

    return (
    <header>
        <div className='plus-button-dent'>
            <RoundButton text="" specialClass={"add-button"} onClick={handleOnAdd}/>
        </div>
    </header>
    );
}

export default Header;