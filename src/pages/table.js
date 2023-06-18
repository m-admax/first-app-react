import styles from "../styles/servicios.module.css"
//BSON
//JSON -> formato que se envia por http via internet
//OBJETO ESTRUCTURA
//PERSONA
const Persona = {
    Nombre:"Pepe",
    Apellido:"Perez",
    Telefono:"1111111111",
    email:"email@email.com"
}

const Personas = [ 

    {
        Nombre:"Nombre1",
        Apellido:"Apellido1",
        Telefono:"1111111111",
        Email:"email1@email.com",
    },
    {
        Nombre:"Nombre2",
        Apellido:"Apellido2",
        Telefono:"1111111111",
        Email:"email2@email.com",
    },
    {
        Nombre:"Nombre3",
        Apellido:"Apellido3",
        Telefono:"1111111111",
        Email:"email3@email.com",
    },
    {
        Nombre:"Nombre4",
        Apellido:"Apellido4",
        Telefono:"1111111111",
        Email:"email4@email.com",
    },
    {
        Nombre:"Nombre5",
        Apellido:"Apellido5",
        Telefono:"1111111111",
        Email:"email4@email.com",
    }

]

import Card from "@/Componentes/Card"

const table = () =>{//Sintaxis JS tradicional

    console.log(Persona);

    return (//Sintaxis JSX componente para react
        <>
        <div className={styles.containerTable}>
            {
             Personas.map((item, index)=>{
                return (
                <div key={index}>
                    <div></div>
                    <table className={styles.tableBorder}>
                       <thead>
                          <tr>
                          <th>Nombre</th>
                          <th>Apellido</th>
                          <th>Telefono</th>
                          <th>email</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{item.Nombre}</td>
                                <td>{item.Apellido}</td>
                                <td>{item.Telefono}</td>
                                <td>{item.Email}</td>
                            </tr>
                        </tbody> 
                    </table>
                </div>)
             })
            }
        </div>
        </>
    )
}
export default table