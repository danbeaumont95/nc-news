import React, { Component } from 'react';
import { Link } from '@reach/router'

class NavBar extends Component {

    state={
        
    }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul className="nav-list">
                        <Link to="/">
                        <li>Articles</li>
                        </Link>
                        
                        <li>Topics</li>
                    </ul>
                </nav>
            </div>
        )
    }

}

export default NavBar;