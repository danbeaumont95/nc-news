import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router'
import ErrorDisplayer from './ErrorDisplayer';

class ArticleList extends Component {

    state={
        articles: [],
        isLoading: true,
        errMessage: ''
    }

    componentDidMount() {
        this.fetchArticles()
    }

    render() {
        const { articles, errMessage } = this.state;
        if (this.state.isLoading) return <p>Loading....</p>
        if (errMessage) return <ErrorDisplayer msg={errMessage}/>
        return (
            <div className="article-list">
                {articles.map((article) => {
                    return (
                        <li key={article.article_id} className="article-list-items">
                            <Link to={`/articles/${article.article_id}`}>
                       <h4>{article.title}</h4> 
                       </Link>
                       <p>Votes: {article.votes}</p>
                       <p>Comments: {article.comment_count}</p>
                       
                    </li> 
                    )
                })}
            </div>
        )
    }

    fetchArticles() {
        api.getAllArticles().then((articles) => {
            this.setState({ articles, isLoading: false })
        })
    }
}

export default ArticleList;