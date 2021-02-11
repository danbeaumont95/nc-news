import React, { Component } from 'react';
import * as api from '../api'

class Comments extends Component {
    state={
        comments: [],
        isLoading: true,
        errMessage: ''
    }

    componentDidMount() {
        const { article_id } = this.props;
        console.log(article_id, 'in component did mount')
        this.fetchComments(article_id)
     
    }

    componentDidUpdate(prevProps) {
        const { article_id } = this.props;
        if (article_id !== prevProps.article_id) {
            this.fetchComments(article_id)
        }
    }

    render() {
        const { comments, errMessage, isLoading } = this.state;
         const { article_id } = comments
        if (errMessage) return <p>Erorrrrrrr</p>
        if(isLoading) return <p>loading</p>
        return (
            <div>
                {/* <h5>{article_id}</h5> */}
                <h5>Comments:{comments.article.body}</h5>
                {console.log(comments.article.body, 'in render of comments')}
            </div>
        )
    }

    fetchComments(article_id) {
        // const { article_id } = this.props;
        api.getComments(article_id).then((comments) => {
            this.setState({comments, isLoading: false})
        })
        .catch((err) => {
            console.dir(err)
        })
    }
}

export default Comments;