import React, { Component } from 'react';
import * as api from '../api';
import { Link } from '@reach/router'
import ErrorDisplayer from './ErrorDisplayer';
import SingleArticle from './SingleArticle'


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
                        <li key={article.article_id}>
                            <Link to={`/articles/${article.article_id}`}>
                       <h4>{article.title}</h4> 
                       {/* <SingleArticle singleArticleData key={article.article_id} {...article}/> */}
                       
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