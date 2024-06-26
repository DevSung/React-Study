import React, {useState} from "react";

function Counter() {
    // [state, state 를 변경하기 위한 함수]
    const [number, updateNumber] = useState(0);

    const onIncrease = () => {
        updateNumber(number + 1);
    }
    const onDecrease = () => {
        number > 0 && updateNumber(number - 1);
    }

    return (
        <div>
            <button onClick={onIncrease}>+1</button>
            <h1>{number}</h1>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;


