import React, { Component } from 'react';
import * as api from '../api'

class PostComment extends Component {
    state={
        body: '',
        isLoading: true
    }

    handleSubmit = (event) => {
        const { article_id } = this.props;
        event.preventDefault()
        console.log('Submitting form')
        api.postComments(article_id, this.state).then(({comment}) => {
            this.props.addNewComment(comment)
        })
        this.setState({
            body: ''
        })
    }

    handleInputChange = (event) => {
        const{value, name} = event.target;
        console.log('Changing input', value, name)
        this.setState({
            [name]: value,
            isLoading: false
        })
    }

    render() {
       return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>New comment!
                    <input type="text" onChange={this.handleInputChange} value={this.state.type} name="body"/>
                </label>
                <button>Post new Comment!</button>
            </form>
        </div>
    ) 
    }
    
}

export default PostComment;