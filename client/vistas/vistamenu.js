import Link from 'next/link'
import styles from './page.module.css'


export default function Vistamenu() {

  
  
    return (
        <><h2 className={styles.center2}>Menu Principal</h2><>

      <ul>
        <div className={styles.button1}>

        <button className={styles.button3}>
          <Link href='/insertar'> Insertar</Link>
        </button>     

        </div>

        <div className={styles.button1}>

        <button className={styles.button3}>
          <Link href='/consultartodos'> Ver todos</Link>
        </button>

        </div>

        <div className={styles.button1}>

        <button className={styles.button3}>
          <Link href='/consultar'> Consultar</Link>
        </button>

        </div>

        <div className={styles.button1}>

        <button className={styles.button3}>
          <Link href='/modificar'> Modificar</Link>
        </button>

        </div>
        
        <div className={styles.button1}>

        <button className={styles.button3}>
          <Link href='/eliminar'> Eliminar</Link>
        </button>
        
        </div>

      </ul>
    </></>
    )
  }