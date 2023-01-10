import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
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
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items = {filteredExpenses}/>
        </Card>
    );
}

export default Expenses;