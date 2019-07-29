import React, { useState, useEffect } from 'react';

import axios from 'axios';

const FetchStudentsCountHook = () => {
    const [hasErrors, setErrors] = useState(false);
    const [count, setCount] = useState(0);

    // useEffect(() =>
    // await axios.get("http://localhost:8000/students/count", {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //         'Authorization': localStorage.getItem('jwtToken')
    //     }
    // })
    // );

    return <div><span>{count}</span><span>{hasErrors}</span></div>;
};
export default FetchStudentsCountHook;