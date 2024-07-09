"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from "react"
import controlEliminar from '@/control/controleliminar'
import styles from './page.module.css'

export default function Vistaeliminar() {

    const [cedula, setCedula] = useState('')
    return (
        <><div className="card">
      <h2 className={styles.center2}>Eliminar</h2>
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
            controlEliminar(cedula)
          } 
          } >
        <div> Eliminar </div>
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