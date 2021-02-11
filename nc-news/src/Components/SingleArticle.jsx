import React, { Component } from 'react';
import * as api from '../api'
import Comments from './Comments';

import ErrorDisplayer from './ErrorDisplayer';
import PostComment from './PostComment';
import VoteUpdater from './VoteUpdater';
// import { FaThumbsUp } from 'react-icons/fa';
// import { FaThumbsDown } from 'react-icons/fa';



class SingleArticle extends Component {
state={
    article: {},
    isLoading: true,
    errMessage: '',
  
    voted: false
}

componentDidMount() {
    const { article_id } = this.props;
    this.fetchArticle(article_id)
    // this.setState({
    //     votes: this.props.votes
    // })
}

addNewComment = (newComment) => {
    this.setState((currentState) => {
        return {
            article: {newComment, ...currentState.article}
        }
    })
}

render() {
    const { article, errMessage, voted, isLoading } = this.state
    const { votes, article_id } = article
    // console.log(article.votes, 'just in render')
    if (isLoading) return <p>Loading...</p>
    if (errMessage) return <ErrorDisplayer msg={errMessage}/>
    console.log(article_id, 'in single article')
    return (
        
        <div>
            
          <h5>{article.body}</h5>
          <VoteUpdater votes={votes} article_id={article_id}/>
        <Comments article_id={article_id} />
         {/* <h5>Comments</h5> */}
         <PostComment addNewComment={this.addNewComment} article_id={article_id}/>
        </div>
    )
    
}

fetchArticle(article_id) {
api.getArticle(article_id).then((article) => {
this.setState({ article, isLoading: false })
})
.catch((err) => {
    console.dir(err)
   console.dir(err.response.status)
   this.setState({errMessage: err.response.status, isLoading: false})
})
}

}

export default SingleArticle;