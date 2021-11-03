import React, { useState } from 'react'

const QuantityButton = () => {
    let [counter, setcounter] = useState(1)

    let handlePlusCounter = () => {
        setcounter(counter => counter + 1)
    }
    let handleMinusCounter = () => {
        !(counter <= 1) ? setcounter(counter => counter - 1) : setcounter(1)
    }

    return (
        <div>
            <div className="btn-group me-2" role="group" aria-label="First group">
                <button type="button" onClick={handleMinusCounter} className="btn btn-outline-secondary">-</button>
                <button type="button" className="btn btn-outline-secondary" disabled>{counter}</button>
                <button type="button" onClick={handlePlusCounter} className="btn btn-outline-secondary">+</button>
            </div>
        </div>
    )
}

export default QuantityButton
