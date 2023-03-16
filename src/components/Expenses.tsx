import axios from "axios";
import { useEffect,useState } from "react"
import { Expense } from "../types/Expense";


type Props = {
    expenses:Expense[];
}

const Expenses = ({expenses}:Props) => {


    

  return (
    <div className='expenses'>
        <div className="expenses__add-new">
            <button className='expenses__btn'>Add New</button>
        </div>

        
        <div className="expenses__table">
            <div className="expenses__header">
                <div className="expenses__cell expenses__cell-index">#</div>
                <div className="expenses__cell expenses__cell-date">Date</div>
                <div className="expenses__cell expenses__cell-title">Title</div>
                <div className="expenses__cell expenses__cell-sum">Sum</div>
            </div>
            <div className="expenses__body">
                {expenses && expenses.map((expense,index)=>(
                    <div className="expenses__row" key={index}>
                        <div className="expenses__cell expenses__cell-index">{index+1}</div>
                        <div className="expenses__cell expenses__cell-date">{expense.date}</div>
                        <div className="expenses__cell expenses__cell-title">{expense.title}</div>
                        <div className="expenses__cell expenses__cell-sum">${expense.sum}</div>
                    </div>
                ))}
              
            </div>
          
        </div>
    </div>
  )
}

export default Expenses