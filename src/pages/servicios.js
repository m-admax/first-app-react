import { useState } from "react"
import styles from "../styles/servicios.module.css"
import axios from "axios"

const servicio = ()=>{//COMPONENTE

    const [nameUser, setNameUser] = useState()
    const [userPassword, setUserPassword] = useState()
    //JS Tradicional
    //Emac6

    console.log("Hola mundo")
    let login = "Login Test"

    const submitFunction = async (event)=>{
        event.preventDefault()
        const userLogin ={
            email:nameUser,
            password:userPassword
        }
        console.log(userLogin)

        const response= await axios.post('https://auth.consul-sts.com/auth/signin', userLogin)
        if(response.data)
            console.log(response.data)
        if(response.data.token)
            localStorage.setItem('token', response.data.token)
    }

    return(//COMPONENTE JSX
        <>
           <div className={styles.contenedor}>
               <div className={styles.contenedorcontenido}>
                   <div className={styles.contenedorElementos}>
                    <form onSubmit={submitFunction}>
                    <h1>{login}</h1>
                    <input name="user" placeholder="Usuario" onChange={(e)=>setNameUser(e.target.value)}/>
                    <input name="password" placeholder="Contraseña" onChange={(e)=>setUserPassword(e.target.value)}/>
                    <button className={styles.button} type="submit">Login</button>
                    </form>
                   </div>
               </div>
            </div>
        </>
    )
}

export default servicio

/*email":"test@consul-sts.com",
"password":"password"*/