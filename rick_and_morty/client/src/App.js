import "./css/App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./components/componentesHijos/nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Details from "./components/componentesHijos/detail";
import Abaout from "./components/comoponentesPadres/Abaout";
import Forms from "./components/comoponentesPadres/forms";
import Home from "./components/comoponentesPadres/home";
import Favorites from "./components/comoponentesPadres/favorites";
import Footer from "./components/componentesHijos/footer";
//import users from '../../server/src/utils/users';

function App() {
  const [characters, setCharacters] = useState([]);

  async function onSearch(id) {
    try {
      const res = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const { data } = res;
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  function onSearchRandom(randomId) {
    axios(`https://rickandmortyapi.com/api/character/${randomId}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function handleRandomId() {
    let calculo = Math.random() * 100;
    let randomId = Math.floor(calculo % 826);
    onSearchRandom(randomId);
  }

  function onClose(id) {
    setCharacters((characters) =>
      characters.filter((elem) => elem.id !== Number(id))
    );
  }
  //? FLUJO
  ///! FRONT => ACTION PETICION DISPATCH ==> BACK => CONTROLLER DESECTRURAR DATA => DEVUELVE POR MEDIO DE ROUTES A ESA URL, SE RESUELVE LA PROMISE ==> MANDA AL REDUCER ACTUALIZA EL ESTADO =>> ACUTALIZA LAS STORE.
  let ubi = useLocation();

  const [access, setAccess] = useState(false);
  let navigate = useNavigate();
  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    });
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      {ubi.pathname !== "/" && (
        <Nav
          access={access}
          setAccess={setAccess}
          showNav={ubi.pathname !== "/"}
        />
      )}
      <Routes>
        <Route path="/" element={<Forms login={login} />}></Route>
        <Route
          path="/home"
          element={
            <Home
              onClose={onClose}
              characters={characters}
              handleRandomId={handleRandomId}
              onSearch={onSearch}
            />
          }
        ></Route>
        <Route path="/Abaout" element={<Abaout />}></Route>
        <Route path="/detail/:id" element={<Details />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>

      {ubi.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
