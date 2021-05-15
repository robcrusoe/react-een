import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        console.log('expenseData [NewExpense.js]: ', expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            {/* `props` can only be passed from parent to child */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;