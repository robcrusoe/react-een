import { useState } from 'react';

import Card from './../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    /* Every component has it's own unique state */
    const [title, setTitle] = useState(props.title);

    const updateTitleHandler = () => {
        setTitle('Updated Title');
    };

    return (
        /* React components should have only `one` root element */
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />

            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>

            <button onClick={updateTitleHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;