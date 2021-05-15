import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            title: enteredExpenseData.enteredTitle,
            amount: enteredExpenseData.enteredAmount,
            date: enteredExpenseData.enteredDate,
            id: Math.random().toString()
        };

        console.log('expenseData [NewExpense.js]: ', expenseData);
        props.onAddExpense(expenseData);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {/* `props` can only be passed from parent to child */}
            {!isEditing
                ?
                <button type='button' onClick={startEditingHandler}>Add New Expense</button>
                :
                <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
        </div>
    );
};

export default NewExpense;