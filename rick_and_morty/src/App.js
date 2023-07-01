import './css/App.css';
import "./css/cards.modules.css"
import "./css/mixin.modules.css"
import "./css/buscador.modules.css"
import "./css/titulos.modules.css"
import "./css/nav.modules.css"
import "./css/forms.modules.css"
import { useState } from 'react';
import axios from "axios"
import Nav from './components/componentesHijos/nav';
import Cards from './components/componentesHijos/Cards.jsx';
import Title from './components/componentesHijos/title';
import {Routes, Route, useLocation} from "react-router-dom"
import Details from './components/componentesHijos/detail';
import Abaout from './components/comoponentesPadres/Abaout';
import Forms from './components/comoponentesPadres/forms';

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

   return (
      <div className='App'>
         <Routes>
            <Route path='/' element={<Forms/>}></Route>
            <Route path='/home' element= {<Cards characters={characters} onClose={onClose}/>} ></Route>
            <Route path='/Abaout' element= {<Abaout/>}></Route>
            <Route path='/detail/:id' element= {<Details/>} ></Route>
         </Routes>
         {ubi.pathname !== "/" && (
      <div class="contenedorTitle">
        <Nav onSearch={onSearch} showNav={ubi.pathname !== "/"} />
        <h1 class="titulosPi">RICK AND MORTY APP</h1>
        <Title />
      </div>
    )}
      </div>
   );
}

export default App;
