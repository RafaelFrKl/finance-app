import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);

    function onSaveExpenseDataHandler(enteredExpenseData){ //funtion that passe data from child to parent
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    function startEditingHandler(){
        setIsEditing(true);
    }

    function stopEditingHandler() {
        setIsEditing(false);
    }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && 
            <ExpenseForm 
                onSaveExpenseData={onSaveExpenseDataHandler} 
                onCancel={stopEditingHandler} />
            }
        </div>
    );
};

export default NewExpense;