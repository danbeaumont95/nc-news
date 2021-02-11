import './App.css';
import ArticleList from './Components/ArticleList';
import Intro from './Components/Intro';
import Title from './Components/Title';
import { Router } from '@reach/router'
import SingleArticle from './Components/SingleArticle';
// import NavBar from './Components/NavBar';
// import * as ReactBootStrap from 'react-bootstrap'
import NewNavBar from './Components/NewNavBar'
import ErrorDisplayer from './Components/ErrorDisplayer'

function App() {
  return (
    <div className="App">


    <NewNavBar />
      {/* <NavBar /> */}
      <Title />
      <Intro />
      
      <Router>
        <ArticleList path="/"/>
        <SingleArticle path="/articles/:article_id"/>
        
        <ErrorDisplayer default/>
      </Router>
    </div>
  );
}

export default App;
