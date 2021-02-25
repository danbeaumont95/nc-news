import React, { Component } from 'react';
import * as api from '../api'
import CommentVoteUpdater from './CommentVoteUpdater';

class Comments extends Component {
    state={
        comments: [],
        isLoading: true,
        errMessage: ''
    }

    componentDidMount() {
        const { article_id } = this.props;
        this.fetchComments(article_id)
    }

    render() {
        const { comments, errMessage, isLoading } = this.state;
        if (errMessage) return <p>Erorrrrrrr</p>
        if(isLoading) return <p>loading</p>
        return (
            <>
        <h5 className="comments-title">Comments:</h5>
            <div className="article-list">
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id} className="article-list-items">
                            <h6>{comment.body}</h6>
                            <CommentVoteUpdater votes={comment.votes} comment_id={comment.comment_id} />
                        </li>
                    )
                })}
            </div>
            </>
        )
    }

    fetchComments(article_id) {
        api.getComments(article_id).then((comments) => {
            this.setState({comments, isLoading: false})
        })
        .catch((err) => {
            console.dir(err)
        })
    }
}

export default Comments;