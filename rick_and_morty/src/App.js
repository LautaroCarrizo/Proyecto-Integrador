import './css/App.css';
import "./css/cards.modules.css"
import "./css/mixin.modules.css"
import "./css/buscador.modules.css"
import "./css/titulos.modules.css"
import Cards from './components/Cards.jsx';
import Title from './components/title';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         <Title></Title>
         <Cards characters={characters} />
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
   );
}

export default App;
