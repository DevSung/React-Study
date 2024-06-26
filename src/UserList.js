import React from "react";
import './App.css';

function User({user}) {
    return (
        <tr>
            <td>{user.idx}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
        </tr>
    );
}

function UserList({users}) {
    return (
        <div>
            <b>사용자 목록</b>
            <table>
                <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
                </thead>
                <tbody>
                {users.map(u => (
                    <User user={u} key={u.id}/>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;