import Card from './../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            <ExpenseItem id={props.expense.id} title={props.expense.title} amount={props.expense.amount} date={props.expense.date} />
        </Card>
    );
}

export default Expenses;