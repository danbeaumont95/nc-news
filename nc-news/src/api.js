import axios from 'axios';
const base_url = 'https://nc-news-api-site.herokuapp.com/api/'

export const getAllArticles = () => {
    return axios.get('https://nc-news-api-site.herokuapp.com/api/articles')
    .then((response) => {
        return response.data.articles;
    })
}

export const getArticle = (article_id) => {
    return axios.get(`https://nc-news-api-site.herokuapp.com/api/articles/${article_id}`)
    .then((response) => {
        return response.data.article;
    })
}


export const patchArticleVotes = (article_id, voteChange) => {
    console.log(voteChange, 'in api fiel')
    return axios.patch(`${base_url}articles/${article_id}`, {
        inc_votes: voteChange
    })
   
}

export const getComments = (article_id) => {
    return axios.get(`${base_url}articles/${article_id}/comments`)
    .then((response) => {
        return response.data.article
    })
}

export const postComments = (article_id, {body}) => {
    return axios.post(`${base_url}articles/${article_id}/comments`, {
        body: body
    })
    .then((response) => {
        return response.data;
    })
}

export const getTopics = () => {
    return axios.get(`${base_url}topics`)
    .then((response) => {
        return response.data.topics;
    })
}

export const getTopicsByTopic = (topic) => {
    return axios.get(`${base_url}topics/${topic}/articles`)
    .then((response) => {
        return response.data.articles
    })
}

export const patchCommentsVotes = (comment_id, voteChange) => {
    console.log(voteChange, 'in patchCommentsVotes API')
    return axios.patch(`${base_url}comments/${comment_id}`, {
        inc_votes: voteChange
    })
}