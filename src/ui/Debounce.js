import React, { useEffect, useState } from 'react';
import useDebounce from '../Hooks/useDebounce';

function Debounce() {
    const [searchTerm, setSearchTerm] = useState('');
    const [apiCall, setApiCall] = useState('');

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        setApiCall('Search term changed:' + debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <p> Debouncing is a technique that delays executing a function until after a specified time period without any further invocation.
            </p>
            <span>Enter text will be updated after 500ms </span>
            <br />

            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search..." />
            <br />

            <br />
            {apiCall}
        </div>
    );
}

export default Debounce;
