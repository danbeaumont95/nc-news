import React from 'react';

const Title = ({ username, logout }) => {
    return (
        <header className="title">
            <h1>Welcome to NC-News</h1>
        {username && (
            <>
            <p>Logged in as {username}</p>
            <button onClick={logout}>Logout</button>
            </>
        )}
        </header>
    )
}

export default Title;