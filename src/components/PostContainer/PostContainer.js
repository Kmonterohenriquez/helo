import React, { Component } from 'react'
import Post from '../Post/Post'

class PostContainer extends Component {
    state = {  }
    render() {
        return (
            <div className='PostContainer'>

                <Post/>
            </div>
        );
    }
}

export default PostContainer;