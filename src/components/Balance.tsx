import React from 'react'


type Props = {
  paycheck:number;
  outcome:number;
}

const Balance = ({paycheck,outcome}:Props) => {

  

  return (
    <div className="balance">

        <div className="balance__data">
            <h4 className='balance__data--income'>Paycheck: <span>{paycheck}</span></h4>
            <h4 className='balance__data--outcome'>Outcome: <span>{outcome}</span></h4>
        </div>

        <div className="balance__sum">
            <h2>${paycheck-outcome}</h2>
        </div>
    </div>
  )
}

export default Balance