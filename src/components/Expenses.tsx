import axios from "axios";
import { FormEvent, useEffect,useRef,useState } from "react"
import { Expense } from "../types/Expense";


type Props = {
    expenses:Expense[];
}

const Expenses = ({expenses}:Props) => {

    const [displayNew,setDisplayNow] = useState<Boolean>(false);
    const [newExpense,setNewExpense] = useState<Expense>({} as Expense);
    const errorRef = useRef(null);


    const handleChange = (e:any)=>{
        setNewExpense({...newExpense,[e.target.name]:e.target.value});
    }

    const handleSubmit = async (e:FormEvent)=>{
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/expenses',newExpense);
            setDisplayNow(false);
            
        } catch (error) {
            
        }
        
    }
    

  return (
    <div className='expenses'>

        <div className="expenses__add-new">
            <button className='expenses__btn' onClick={()=>setDisplayNow(true)}>Add New</button>
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

        {displayNew && 
                <div className="expenses__new-modal">
                        <h6 ref={errorRef} className="error"></h6>
                    <form className="expenses__form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input type="text" id="date" className="input" name="date"  onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" className="input"name="title" onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="sum">Sum</label>
                            <input type="number" id="sum" className="input"name="sum"  onChange={handleChange}/>
                        </div>


                        <button className="expenses__submit">Save</button>
                    </form>

                    <button className="expenses__cancel" onClick={()=>setDisplayNow(false)} >Cancel</button>
                </div>
        }
    </div>
  )
}

export default Expenses