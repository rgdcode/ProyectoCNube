"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from "react"
import controlBuscar from '@/control/controlbuscar'
import styles from './page.module.css'



export default function Vistabuscar() {
    const [cedula, setCedula] = useState('')
    return (
        <><div className="card">
      <h2 className={styles.center2}>Buscar</h2>
      <div className="card-body">
        <form>
          
        <div className={styles.inputform}>
            <label>Cedula</label>
            <input name="cedula" type="text"
              onChange={(e) => setCedula(e.target.value)}
              value={cedula} />
          </div>
          
        </form>
      </div>
    </div>
    <div className={styles.inputform}>
    <button className={styles.button4} onClick={() => {
            controlBuscar(cedula)
          } 
          } >
        <div> Buscar </div>
      </button>
    </div>
    
    <div className={styles.inputform}>
    <button className={styles.button4}>
        <Link href='/'> volver </Link>
      </button>
    </div>
      
    </>
              )

}