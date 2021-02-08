import './App.css';
import ArticleList from './Components/ArticleList';
import Intro from './Components/Intro';
import Title from './Components/Title';
import { Router } from '@reach/router'
import SingleArticle from './Components/SingleArticle';

function App() {
  return (
    <div className="App">
      <Title />
      <Intro />
      
      <Router>
        <ArticleList path="/"/>
        <SingleArticle path="/articles/:article_id"/>
      </Router>
    </div>
  );
}

export default App;
