import axios from 'axios';

export const getAllArticles = () => {
    return axios.get('https://nc-news-api-site.herokuapp.com/api/articles')
    .then((response) => {
        console.log(response.data.articles, 'in api')
        return response.data.articles;
    })
}