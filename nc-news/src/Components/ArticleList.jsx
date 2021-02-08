import React, { Component } from 'react';
import * as api from '../api'

class ArticleList extends Component {

    state={
        articles: [],
        isLoading: true
    }

    componentDidMount() {
        this.fetchArticles()
    }

    render() {
        const { articles } = this.state;
        if (this.state.isLoading) return <p>Loading....</p>
        return (
            <div>
                {articles.map((article) => {
                    return (
                        <li key={article.article_id}>
                       <h3>{article.title}</h3> 
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