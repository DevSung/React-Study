import React, {useRef, useState} from 'react';
import Counter from "./Counter";
import Wrapper from "./Wrapper";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {

    const [inputs, setInputs] = useState({
        userName: '',
        email: ''
    });

    const {userName, email} = inputs;

    const onChange = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const [users, setUsers] = useState([
        {
            idx: 1,
            userName: '11',
            email: 'public.velopert@gmail.com'
        },
        {
            idx: 2,
            userName: '22',
            email: 'tester@example.com'
        },
        {
            idx: 3,
            userName: '33',
            email: 'liz@example.com'
        }
    ]);

    // nextId는 useRef 훅을 통해 생성된 객체를 참조
    const nextId = useRef(4);

    const onCreate = () => {
        const user = {
            idx: nextId.current,
            userName,
            email
        };
        setUsers([...users, user]);
        setInputs({
            userName: '',
            email: ''
        });

        nextId.current += 1;
    };
    return (
        <>
            <Wrapper>
                <Counter/>
            </Wrapper>
            <Wrapper>
                <InputSample/>
            </Wrapper>
            <Wrapper>
                <CreateUser
                    userName={userName}
                    email={email}
                    onChange={onChange}
                    onCreate={onCreate}
                />
                <UserList users={users}/>
            </Wrapper>
        </>
    );
}


export default App;
