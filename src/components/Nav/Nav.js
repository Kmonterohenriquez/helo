import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    state = {  }
    render() {
        return (
            <div className="Nav">
                <div className="user-pic"></div>
                <div className='icon-container'>
                    <Link to='/'>Home</Link>
                    <Link to='/new-post'>New post</Link>
                </div>
                <Link to='/auth' id='logout'>logout</Link>

            </div>
        );
    }
}

export default Nav;