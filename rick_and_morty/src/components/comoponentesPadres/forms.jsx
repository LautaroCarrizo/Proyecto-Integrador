import React from "react"
import {useState} from "react"
import Validations from "../../validations"
import "../../css/forms.modules.css"

export default function Forms (login){

    const [user, setUser] = useState({email:"", password:""})
    const [erros, setError] = useState([])
    
    
    
    function handleSubmit(event){
        event.preventDefault()
        login.login(user)
    }

function handleChange(event){
    setUser({...user, [event.target.name]: event.target.value}) //? CAMBIAMOS EL VALOR ACTUAL DEL USERNAME POR EL VALOR QUE ESCRIBE EL USUARIO
   setError(Validations({...user, [event.target.name]: event.target.value}))  //? EL OBJ QUE RETORNA VALIDARION SE LO GUARDAMOS EN EL ESTADO SETERROR
}




    return(
        <div className="contarinerForm">
            <h1 className="tituloForm2 tituloInvertido">Rick and Morty App</h1>
         <form className="form" onSubmit={handleSubmit}>
            <div className="containerInput" id="2">
          <div className="inputBox">
          <label className="label">Email</label>
          <input  className="textArea" name="email" onChange={handleChange}  value= {user.email}type="text" placeholder="email..."></input>
           {erros.username ? (<span className="errors"> {erros.username} </span>) : null}
          </div>
          <div className="inputBox">
          <label className="label">Password</label>
          <input className="textArea" name="password" onChange={handleChange} value= {user.password} type="password" placeholder="password..."></input>
          {erros.password ? (<span className="errors"> {erros.password} </span>) : null}
          </div>
          <div className="containerSubmit">
          <input className="submit" type="submit"></input>
          </div>
            </div>
         </form>
         <h1 className="tituloForm">Rick and Morty App</h1> 
        </div>
    )
}