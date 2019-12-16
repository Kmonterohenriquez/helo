import React, { Component } from 'react';
import PostContainer from '../PostContainer/PostContainer'
import './Dashboard.css'

class Dashboard extends Component {
    state = {  }
    render() {
        return (
            <div className="Dashboard container ">
                Dashboard component
                <div className="search">
                    <div className='left-side'>
                        <input type="text" placeholder='search by title' />
                        <button>search</button>
                        <button>Reset</button>
                    </div>
                    <div className='right-side'>

                        <p>My posts</p>
                        <input type="checkbox" defaultChecked/>
                        </div>
                </div>
                <PostContainer/>
            </div>
        );
    }
}

export default Dashboard;