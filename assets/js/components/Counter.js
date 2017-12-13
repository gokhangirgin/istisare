import React from 'react'
const Counter = ({value, onIncrement, onDecrement}) => (
    <div>
        <h1>{value}</h1>
        <div class="btn-group">
          <button class="btn btn-success" onClick={onIncrement}>+</button>
          <button class="btn btn-danger" onClick={onDecrement}>-</button>
        </div>
    </div>
)
export default Counter
