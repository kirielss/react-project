import { useState } from 'react';
import PkmContext from './PkmContext';

function PkmProvider({ children }) {
    const [pkm, setPkm] = useState({});

    return (
        <PkmContext.Provider value={{ pkm, setPkm }}>
            {children}
        </PkmContext.Provider>
    )
}

export default PkmProvider