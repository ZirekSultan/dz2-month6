import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { updateInput, result } from "./redux/action"
import Input from "./pages/Input"

const App = () => {
    const dispatch = useDispatch();
    const { num1, num2, result: calculateResult} = useSelector(state => state)

    const handleInputUpdate = (name, value) => {
        dispatch(updateInput(name, value))
    }

    const handleResult = (operator) => {
        dispatch(result(operator));
    }

    return (
        <div>
            <Input value={num1} onChange={(value) => handleInputUpdate('num1', value)} />
            <Input value={num2} onChange={(value) => handleInputUpdate('num2', value)}/>
            <button onClick={() => handleResult('+')}>+</button>
            <button onClick={() => handleResult('-')}>-</button>
            <button onClick={() => handleResult('*')}>*</button>
            <button onClick={() => handleResult('/')}>/</button>
            <div>Результат: {calculateResult}</div>
        </div>
    )
}

export default App
