import React, {useState} from "react";

function InputSample() {

    const [inputs, setInputs] = useState({
        name: '',
        nickName: ''
    });

    const {name, nickName} = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            // 여기서 사용한 ... 문법은 spread 문법, 객체의 내용을 모두 "펼쳐서" 기존 객체를 복사
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickName: '',
        })
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickName" placeholder="닉네임" onChange={onChange} value={nickName}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickName})
            </div>
        </div>
    )
}

export default InputSample;