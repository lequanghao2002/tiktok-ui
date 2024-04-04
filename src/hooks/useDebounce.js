import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    var [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeout);
        };
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
