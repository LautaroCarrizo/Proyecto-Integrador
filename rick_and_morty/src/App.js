import './css/App.css';
import "./css/cards.modules.css"
import "./css/mixin.modules.css"
import "./css/buscador.modules.css"
import "./css/titulos.modules.css"
import "./css/nav.modules.css"
import "./css/forms.modules.css"
import { useState, useEffect } from 'react';
import axios from "axios"
import Nav from './components/componentesHijos/nav';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Details from './components/componentesHijos/detail';
import Abaout from './components/comoponentesPadres/Abaout';
import Forms from './components/comoponentesPadres/forms';
import Home from './components/comoponentesPadres/home';

function App() {

  const [characters, setCharacters] = useState([]);
 
function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

function onClose(id){
   setCharacters((characters) =>
    characters.filter((elem) => elem.id !== Number(id))
  );
}
let ubi = useLocation()

const [access, setAccess] = useState(false)
let EMAIL = "laucarrizo998@gmail.com"
let PASSWORD = "lauti123"
let navigate = useNavigate()
function login(user) {
    if (user.password === PASSWORD && user.email === EMAIL) {
       setAccess(true);
       navigate('/home');
    }
 }

 useEffect(() => {
   !access && navigate('/');
}, [access]);

   return ( 
      <div className='App'>
                 {ubi.pathname !== "/" && (
        <Nav  showNav={ubi.pathname !== "/"} />
    )}
         <Routes>
            <Route path='/' element={<Forms login={login} />}></Route>
            <Route path='/home' element= {<Home onClose={onClose} characters={characters} onSearch={onSearch}/>} ></Route>
            <Route path='/Abaout' element= {<Abaout/>}></Route>
            <Route path='/detail/:id' element= {<Details/>} ></Route>
         </Routes>
      </div>
   );
}

export default App;
