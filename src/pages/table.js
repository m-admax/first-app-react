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
            {
             Personas.map((item, index)=>{
                return (<div key={index}>
                    <Card 
                    titulo={item.Nombre} 
                    descripcion={item.Apellido} 
                    icono={item.Email}
                    ></Card>
                    </div>)
             })
            }

        </>
    )
}
export default table