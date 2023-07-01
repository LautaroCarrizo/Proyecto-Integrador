import React from "react"
import {useState} from "react"
import Validations from "../../validations"
export default function Forms (){
    const [user, setUser] = useState({username:"", email:"", password:""})
    const [erros, setError] = useState([])

    function handleSubmit(event){
        event.preventDefault()
        console.log("no se actualizo")
    }

function handleChange(event){
    setUser({...user, [event.target.name]: event.target.value}) //? CAMBIAMOS EL VALOR ACTUAL DEL USERNAME POR EL VALOR QUE ESCRIBE EL USUARIO
   setError(Validations({...user, [event.target.name]: event.target.value}))  //? EL OBJ QUE RETORNA VALIDARION SE LO GUARDAMOS EN EL ESTADO SETERROR

}
    return(
        <div className="contarinerForm">
         <form className="form" onSubmit={handleSubmit}>
          <div>
           {erros.username ? (<span style={{color: "red"}}> {erros.username} </span>) : null}
          <label>Email</label>
          <input name="email" onChange={handleChange}  value= {user.email}type="text" placeholder="email..."></input>
          </div>
          <div>
          {erros.password ? (<span style={{color: "red"}}> {erros.password} </span>) : null}
          <label>Password</label>
          <input name="password" onChange={handleChange} value= {user.password} type="password" placeholder="password..."></input>
          </div>
          <input type="submit"></input>
         </form>
         <h1 className="tituloForm">Rick and Morty App</h1>

        </div>
    )
}