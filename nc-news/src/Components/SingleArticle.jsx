import React, { Component } from 'react';
import * as api from '../api'
import ErrorDisplayer from './ErrorDisplayer';


class SingleArticle extends Component {
state={
    article: {},
    isLoading: true,
    errMessage: ''
}

componentDidMount() {
    const { article_id } = this.props;
    this.fetchArticle(article_id)
}

render() {
    const { article, errMessage } = this.state
    if (errMessage) return <ErrorDisplayer msg={errMessage}/>
    return (
        <div>
          <h3>{article.body}</h3>
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