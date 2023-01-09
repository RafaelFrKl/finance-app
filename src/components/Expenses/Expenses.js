import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'

function Expenses(props){
    const [filteredYear, setfilteredYear] = useState('2020')

    function filterChangeHandler(selectedYear){
        setfilteredYear(selectedYear);
        //console.log('Expenses.js');
        //console.log(selectedYear);
    };

    //filter() return a new area with the items that returned true
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    //Create a Dynamic array
    return ( 
        <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear} 
                onChangeFilter={filterChangeHandler}
            />
            {filteredExpenses.map((expense) => ( 
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;