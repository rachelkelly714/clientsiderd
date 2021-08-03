import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Auth from './auth/Auth';
import CharactersSheet from './components/Charactersheet1';


import {
  BrowserRouter as Router,
} from 'react-router-dom';




const App = () => {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
  if (localStorage.getItem('token')){
    setSessionToken(localStorage.getItem('token'));
  }
}, []) 

const updateToken = (newToken) => {
  localStorage.setItem('token', newToken);
  setSessionToken(newToken);
  console.log(sessionToken);
}
 const clearToken =() => {
   localStorage.clear();
   setSessionToken('');
 }

const protectedViews = () => {
  return (sessionToken === localStorage.getItem('token') ? <CharactersSheet token={sessionToken}/>
  : <Auth updateToken={updateToken}/>)
}

  return(
    <div>
      <Header clickLogout={clearToken} />
      {protectedViews()}
      <Router>
        <Sidebar/>
      </Router>
      <Footer />
    
      
    
   
    </div>
  );
}

export default App;
