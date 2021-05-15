import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    return (
        <Card className='expenses'>
            <ExpenseItem id={props.expense.id} title={props.expense.title} amount={props.expense.amount} date={props.expense.date} />
        </Card>
    );
}

export default Expenses;