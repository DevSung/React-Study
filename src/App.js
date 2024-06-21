import React from 'react';
import Counter from "./Counter";
import Wrapper from "./Wrapper";
import InputSample from "./InputSample";

function App() {
    return (
        <>
            <Wrapper>
                <Counter/>
            </Wrapper>

            <Wrapper>
                <InputSample/>
            </Wrapper>
        </>
    );
}

export default App;
