import {useState} from "react";
const Counter = () => {
    const [count, setCount] = useState(0)
    const plus = () => {
        if (count >=10) {
            return
        }else setCount(count + 1)
    }
    const minus = () => {
        if (count <= 0) {
        return
        }else setCount(count - 1)
    }
    return(
        <div className='counter'>
            <h4>Quantity:{count}</h4>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}
export default Counter;