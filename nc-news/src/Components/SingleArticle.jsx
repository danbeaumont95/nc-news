import React, { Component } from 'react';
import * as api from '../api'

// const SingleArticle = (singleArticleData) => {
// return (
//     <ul>
//         <li>
//             {/* <h4>{this.SingleArticleData.title}</h4>
//             <h5>{SingleArticleData.body}</h5> */}
//             {/* <p>{singleArticleData}</p> */}
//             {console.log(singleArticleData.body)}
//         </li>
//     </ul>
// )
// }

class SingleArticle extends Component {
state={
    article: {},
    isLoading: true
}

componentDidMount() {
    this.fetchArticle()
}

render() {
    const { article } = this.state
    return (
        <div>
          <h3>{article.body}</h3>
        </div>
    )
}

fetchArticle() {
api.getArticle(this.props.article_id).then((article) => {
this.setState({ article, isLoading: false })
})
}

}

export default SingleArticle;