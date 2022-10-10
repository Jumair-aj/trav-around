import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import { useState } from 'react';
import { AuthContext } from './store/Context';
// import { useContext, useEffect } from 'react';
// import { FirebaseContext } from './store/Context';

function App() {
  const [user,setUser] = useState()
   
  // const {firebase} = useContext(FirebaseContext)
  // // onAuthStateChanged(auth, (user) => {
    // //   if (user) {
     
  // //     const uid = user.uid;
    
  // //   } else {
     
  // //   }
  // // });
  // useEffect(() => {
    //   firebase.onAuthStateChanged(auth, (user) =>
    
    
    // }, [])
    
    return (
<AuthContext.Provider value={{user,setUser}}>
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
  </AuthContext.Provider>
  );
}

export default App;
