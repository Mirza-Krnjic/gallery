import React from "react"
import styles from "./Okvir.module.css"
import { urlFor } from "../lib/client"

function Okvir({ broj, boja, visina, sirina, image }) {
  const imageSrc = urlFor(image).url()
  return (
    <div className={styles.container}>
      <h4>Broj: {broj}</h4>
      <div className={styles.about}>
        {/* <span>Broj: 1</span> */}
        <span>Boja: {boja}</span>
        <span>Visina: {visina}mm</span>
        <span>Širina: {sirina}mm</span>
      </div>
      <img src={imageSrc} className={styles.image} />
    </div>
  )
}

export default Okvir
