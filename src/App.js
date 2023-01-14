import './App.css';
import Banner from './components/Banner';
import Body from './components/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Media from './components/Media';
function App() {
  return (
    <div className="App">
      <Navbar />
     <Banner />
     <Body /> 
     <Media />
     <Footer />
      
    </div>
  );
}

export default App;
