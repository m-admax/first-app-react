import Card from '../Componentes/Card'
import styles from '../styles/about.module.css'

const about = ()=>{

    return(
        <>
                <div className={styles.containerCard}>
                    <div className={styles.container}>
                   <Card
                      icono='icono 1'
                      titulo='Titulo 1'
                      descripcion='Descripcion 1'
                   ></Card>

                    <Card
                      icono='icono 2'
                      titulo='Titulo 2'
                      descripcion='Descripcion 2'
                    ></Card>

                    <Card
                      icono='icono 3'
                      titulo='Titulo 3'
                      descripcion='Descripcion 3'
                    ></Card>

                    <Card
                      icono='icono 4'
                      titulo='Titulo 4'
                      descripcion='Descripcion 4'
                    ></Card>
                    </div>
                </div>
        </>

        
    )
}

export default about