import './App.css';
import Header from './components/Header';
import Cover from './components/Cover';
import Seprator from './components/Seprator';
import Footer from './components/Footer';
import Destination from './components/Destination';
import MoreDest from './components/MoreDest';


function App() {
  return (
    <div className="App">
      <Header />
      <Cover />
      <Seprator />
      <Destination />
      <MoreDest />
      <Footer />
    </div>
  );
}

export default App;
