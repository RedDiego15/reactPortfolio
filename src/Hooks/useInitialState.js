import { useState } from 'react';
import InitialState from '../InitialState';

const useInitialState = () => {
    const [state, setState] = useState(InitialState);

    return { state, setState };
};

export { useInitialState };
