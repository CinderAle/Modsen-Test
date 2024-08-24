import { useState } from 'react';
import { FormEvent } from 'react';

function App() {
    const e = (a: FormEvent) => {
        a.preventDefault();
    };
    const [a, setA] = useState(0);
    return (
        <form onSubmit={e}>
            <div onClick={() => setA(1)}>{a}</div>
        </form>
    );
}

export default App;
