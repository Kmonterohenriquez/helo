import React, { Component } from 'react'
import './NewPost.css'
import axios from 'axios'
import {getUser} from '../../redux/reducer';
import {connect} from 'react-redux'

class NewPost extends Component {
    constructor(){
        super()
        this.state = { 
            title: 'no title',
            img: 'http://bmd.gov.bd/file/img/nwp/notfound.png',
            content: 'no content',
        }
    }

    inputHandler=(e)=>{
		this.setState({
			[e.target.name]: e.target.value
		})
    }
    // componentDidMount(){
    //     axios.get()
    // }
    handlePost=()=>{
        const {title, img , content} = this.state;
        axios.post('/api/posts', {title, img, content})
        .then(res=> {
            // this.props.getUser(res.data);
            console.log(res)
        })
    }
    render() {
        console.log('title:',this.state.title)
        console.log('content:',this.state.content)
        return (
            <div className="NewPost">
                <div className='NewPost-container container'>
                    <h1>New Post</h1>
                    <label htmlFor="">Title:</label>
                    <input onChange={(e)=>this.inputHandler(e)} name='title' type="text" placeholder='Enter title'/>
                    
                    <img src={this.state.img} alt="" width='300px'/>
                    <label htmlFor="">Image URL:</label>
                    <input onChange={(e)=>this.inputHandler(e)} name='img' type="text" placeholder='Enter image URL'/>
                    <label htmlFor="">Content</label>
                    <textarea rows="4" cols="50" onChange={(e)=>this.inputHandler(e)} name='content'></textarea>
                    <button onClick={this.handlePost}>Post</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps =(reduxState)=> {
    return reduxState
}
export default connect(mapStateToProps)(NewPost);