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
import TopicsList from './Components/TopicsList';
import TopicsByQuery from './Components/TopicsByQuery';
import { Component } from 'react';
import ContactMe from './Components/ContactMe';

class App extends Component {
state={
  username: 'jessjelly'
}

render() {
  return (
    <div className="App">
    <NewNavBar />
      <Intro />
      <Title username={this.state.username} logout={this.logout} login={this.login}/>
      <Router>
        <ArticleList path="/"/>
        <SingleArticle path="/articles/:article_id"/>
        <TopicsList path="/topics"/>
        <TopicsByQuery path="/topics/:topic" />
        <ContactMe path="/contact"/>
        <ErrorDisplayer default/>
      </Router>
    </div>
  );
}

logout = () => {
  this.setState({ username: null})
}

login = () => {
  this.setState({ username: 'jessjelly' })
}

}

export default App;
