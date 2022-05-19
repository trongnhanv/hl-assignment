import 'styles/index.css';
import Header from 'components/Header';
import Cover from 'components/Cover';
import Footer from 'components/Footer';
import Main from 'features/Joke/pages/Main';

function App() {
  return <div className="app">
    <Header />
    <Cover />
    <div className="main">
      <Main />
    </div>
    <Footer />
  </div>
}

export default App;
