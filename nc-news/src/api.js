import axios from 'axios';
const base_url = 'https://nc-news-api-site.herokuapp.com/api/'

export const getAllArticles = () => {
    return axios.get('https://nc-news-api-site.herokuapp.com/api/articles')
    .then((response) => {
        // console.log(response.data.articles, 'in api')
        return response.data.articles;
    })
}

export const getArticle = (article_id) => {
    return axios.get(`https://nc-news-api-site.herokuapp.com/api/articles/${article_id}`)
    .then((response) => {
        console.log(response.data.article, 'getArticle API')
        return response.data.article;
    })
}


export const patchArticleVotes = (article_id, voteChange) => {
    console.log(voteChange, 'in api fiel')
    return axios.patch(`${base_url}articles/${article_id}`, {
       
        inc_votes: voteChange
         
    })
   
}

