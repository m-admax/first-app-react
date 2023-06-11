import styles from './styles.module.css'
const card = ({titulo, icono, descripcion}) => {
   //JS
   return(//JSX
       <>
           <div className={styles.containerCard}>
               <div className={styles.containerContentCard}>
                   <div>
                       <i>{icono}</i>
                       <h1>{titulo}</h1>
                       <div>{descripcion}</div>
                   </div>
               </div>
           </div>

       </>
   )
}

export default card