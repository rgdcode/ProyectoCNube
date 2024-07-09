'use client';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import controlCrear from '@/control/controlcrear';
import styles from './page.module.css';

export default function Vistainsertar() {
  const [nombre, setnombre] = useState('');
  const [apellido, setapellido] = useState('');
  const [cedula, setCedula] = useState('');
  return (
    <>
      <div className="card">
        <h2 className={styles.center2}>Insertar</h2>
        <div className="card-body">
          <form>
            <div className={styles.inputform}>
              <label>Cedula</label>
              <input
                name="cedula"
                type="text"
                onChange={(e) => setCedula(e.target.value)}
                value={cedula}
              />
            </div>
            <div className={styles.inputform}>
              <label>Nombre</label>
              <input
                name="nombre"
                type="text"
                onChange={(e) => setnombre(e.target.value)}
                value={nombre}
              />
            </div>

            <div className={styles.inputform}>
              <label>Apellido</label>
              <input
                name="apellido"
                type="text"
                onChange={(e) => setapellido(e.target.value)}
                value={apellido}
              />
            </div>
          </form>
        </div>
      </div>
      <div className={styles.inputform}>
        <button
          className={styles.button4}
          onClick={() => {
            controlCrear(cedula, nombre, apellido);
          }}
        >
          <div> Crear </div>
        </button>
      </div>
      <div className={styles.inputform}>
        <button className={styles.button4}>
          <Link href="/"> volver </Link>
        </button>
      </div>
    </>
  );
}
