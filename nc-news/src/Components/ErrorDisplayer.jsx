import React from 'react';

const ErrorDisplayer = ({msg}) => {
    return (
        <h2>{msg ? msg + ' Article ID not found' : 'Soz page not found'}</h2>
    )
}

export default ErrorDisplayer;