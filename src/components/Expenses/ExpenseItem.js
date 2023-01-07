import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title); //Changes to variable will cause dom to be udated
    //useState returns an array of 2, 1st index is the variable, 2nd is the function to update tge variable

    function clickHandler(){
        setTitle('Updated!'); //call updating function to update variable
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;