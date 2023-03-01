import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Quiz from './components/Quiz';

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header/>
          <Quiz/>
        </div>
      </div>
    </>
  );
}

export default App;
