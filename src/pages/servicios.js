import styles from "../styles/servicios.module.css"
const servicio = ()=>{//COMPONENTE
    //JS Tradicional
    //Emac6

    console.log("Hola mundo")
    let login = "Login"

    return(//COMPONENTE JSX
        <>
           <div className={styles.contenedor}>
               <div className={styles.contenedorcontenido}>
                   <div className={styles.contenedorElementos}>
                    <h1>{login}</h1>
                    <input placeholder="Usuario"></input>
                    <input placeholder="Contraseña"></input>
                   </div>
               </div>
            </div>
        </>
    )
}

export default servicio