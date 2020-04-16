import React from 'react';
import {InputText} from "../shared/input/inputText";
import './bookCreator.css';

const BookCreator = () => {
    return(
        <form className='bookCreator'>
            <InputText label='Name'/>
            <InputText label='Length'/>
        </form>
    );
}

export {BookCreator}
