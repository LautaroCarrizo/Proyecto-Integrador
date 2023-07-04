
export default function Validations (datos){
let incorrect = {}
const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
if(!datos.email){
    incorrect.email = "el Email no puede estar vacio"
}
 else if(!regex.test(datos.email)){
 incorrect.email = "el email no es valido"
}
 else if(datos.email.length > 35  ){
 incorrect.email = "el email no puede tener mas de 35 caracteres."
}

if((!/\d/.test(datos.password))){
    incorrect.password = "La contraseña debe tener al menos un numero"
} else if(datos.password.length < 6 || datos.password.length > 10){
    incorrect.password = "la contraseña tiene que tener una longitud entre 6 y 10 caracteres"
}


return incorrect

}