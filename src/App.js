import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/gallery' element={<Gallery/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
