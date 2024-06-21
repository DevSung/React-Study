import React from "react";

function Hello({
                   color = 'green',
                   name = '이름없음',
                   isSpecial = false
               }) {
    return (
        <div style={{color}}>
            {isSpecial && <b>*</b>}
            안녕하세요 {name}
        </div>
    );
}

// 이 파일을 다른 파일에서 import할 수 있도록 내보내기
export default Hello;