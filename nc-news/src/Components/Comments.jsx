import React, { Component } from 'react';
import * as api from '../api'
import CommentVoteUpdater from './CommentVoteUpdater';
import VoteUpdater from './VoteUpdater';

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
        // this.setState({
        //     votes: this.comments.votes
        // })
    }

    // componentDidUpdate(prevProps) {
    //     const { article_id } = this.props;
    //     if (article_id !== prevProps.article_id) {
    //         this.fetchComments(article_id)
    //     }
    // }

    render() {
        const { comments, errMessage, isLoading } = this.state;
         const { comment_id, votes } = comments
        if (errMessage) return <p>Erorrrrrrr</p>
        if(isLoading) return <p>loading</p>
        return (
            <>
        <h5 className="comments-title">Comments:</h5>
        
            <div className="article-list">
                
                {console.log(comments, 'in render of comments')}
                
                {comments.map((comment) => {
                    console.log(comment.votes, 'votes in list of render comments')
                    console.log(comment.comment_id, 'comment_id in list of render comments')
                    return (
                        <li key={comment.comment_id} className="article-list-items">
                            <h6>{comment.body}</h6>
                            {/* <p>Votes: {comment.votes}</p> */}
                            {/* <VoteUpdater article_id={comment.comment_id} votes={comment.votes}/> */}
                            <CommentVoteUpdater votes={comment.votes} comment_id={comment.comment_id} />
                        </li>
                    )
                })}
            </div>
            </>
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