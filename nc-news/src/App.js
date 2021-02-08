import './App.css';
import ArticleList from './Components/ArticleList';
import Intro from './Components/Intro';
import Title from './Components/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <Intro />
      <ArticleList />
    </div>
  );
}

export default App;
