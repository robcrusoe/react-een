import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        /* --- Not exactly the correct way --- */
        /* setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        }); */


        /* --- The recommended way --- */
        /* This ensures that we always work with the latest `state` snapshot */
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            };
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            };
        });
    };

    const submitHandler = (event) => {
        /* Prevent page-reload because of request being sent to server on form click */
        event.preventDefault();

        const expenseData = {
            ...userInput,
            enteredDate: new Date(userInput.enteredDate)
        };

        console.log('expenseData [ExpenseForm.js]: ', expenseData);
        props.onSaveExpenseData(expenseData);

        /* Clear form */
        setUserInput((prevState) => {
            return {
                enteredTitle: '',
                enteredAmount: '',
                enteredDate: ''
            };
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={userInput.enteredTitle} />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={userInput.enteredAmount} />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={userInput.enteredDate} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;