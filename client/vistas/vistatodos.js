"use client"
import React, { useEffect } from 'react'
import { useState } from "react"
import Link from 'next/link'
import styles from './page.module.css'



export default function Vistabuscar() {
 
    const [items, setItems] = useState('')

    const peticion = async()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/buscartodos?`)
        const personas = await res.json()
        setItems(personas)
    }

    useEffect(()=>{
        peticion();
    },[])

    return (
        <><div className="card">
      <h2 className={styles.center2}>Buscar</h2>
      <div className="card-body">
        {items.map(items =>(
            <div key={items.cedula}>
                <h4>{items.cedula} {items.nombre}{items.apellido}</h4>
            </div>
        ))

        }
      </div>
    </div>
    
    
    <div className={styles.inputform}>
    <button className={styles.button4}>
        <Link href='/'> volver </Link>
      </button>
    </div>
      
    </>
              )

}