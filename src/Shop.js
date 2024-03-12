import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from './state/index';
import { bindActionCreators } from 'redux';

export default function Shop() {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
    const [amount, setAmount] = useState(0);
    const onChange = (e) => {
        setAmount(parseInt(e.target.value));
    }
    return (
        <div>
            <h2>Deposit/Withdraw Amount</h2>
            <input className='my-2' type="number" name="amount" id="amount" value={amount} onChange={onChange} />
            <br />
            <button className="btn btn-primary" onClick={() => withdrawMoney(amount)}>-</button>
            Add to cart
            <button className="btn btn-primary" onClick={() => depositMoney(amount)}>+</button>
        </div>
    )
}
