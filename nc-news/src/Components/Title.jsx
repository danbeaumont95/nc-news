import React from 'react';

const Title = ({ username, logout, login }) => {
    return (
        <header className="title">
            <h1>Welcome to NC-News</h1>
           
        {username && (
            <>
            
            <p>Logged in as {username}</p>
            <button className="login-logout" onClick={logout}>Logout</button>
            </>
        )}
        {!username && (
             <>
            
             <p>Not currently logged in</p>
             <button className="login-logout" onClick={login}>Login</button>
             </>
        )}
        </header>
    )
}

export default Title;