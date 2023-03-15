import React from 'react'

const Expenses = () => {
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
                <div className="expenses__row">
                    <div className="expenses__cell expenses__cell-index">#</div>
                    <div className="expenses__cell expenses__cell-date">2/11/29</div>
                    <div className="expenses__cell expenses__cell-title">Super Market</div>
                    <div className="expenses__cell expenses__cell-sum">$400</div>
                </div>
                <div className="expenses__row">
                    <div className="expenses__cell">#</div>
                    <div className="expenses__cell">2/11/29</div>
                    <div className="expenses__cell">Super Market</div>
                    <div className="expenses__cell">$400</div>
                </div>
                <div className="expenses__row">
                    <div className="expenses__cell">#</div>
                    <div className="expenses__cell">2/11/29</div>
                    <div className="expenses__cell">Super Market</div>
                    <div className="expenses__cell">$400</div>
                </div>
            </div>
          
        </div>
    </div>
  )
}

export default Expenses