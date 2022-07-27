import React from "react"
import styles from "./kontakt.module.css"
import { FooterBanner } from "../components"
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"

function kontakt() {
  return (
    <div className={styles.container}>
      <h2>Kontakt</h2>
      <div>
        <h4>Kontak informacije:</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            marginBottom: "15px",
          }}
        >
          <span>Broj telefona: +387 63 346 181</span>
          <span>email: info@meridian-mostar.com</span>
        </div>
        <div className={styles.buttons}>
          <a href="tel:+38763346181" className={styles.button}>
            {<AiOutlinePhone />} Pozovi
          </a>
          <a href="mailto:info@meridian-mostar.com" className={styles.button}>
            {<AiOutlineMail />} Pošalji mail
          </a>
        </div>
      </div>
      <div>
        <h4>O nama:</h4>
        <p>
          Galerija je nastala kao rezultat obiteljskog obrta započetog 1998.
          godine. Svojom raznovrsnom ponudom, poznatih bosanskohercegovačkih i
          stranih umjetnika, uspjela je zadržati interes svojih kupaca tijekom
          godina. U galeriji ce svako zasigurno pronaći nešto po svom ukusu.
          Pored prodaje, galerija nudi i usluge kompletnog opremanja slika.
          Posjetite nas na adresi Franjevačke ulice 13. u Mostaru i uvjerite se
          u kvalitet nasih usluga.
        </p>
      </div>
      <FooterBanner />
    </div>
  )
}

export default kontakt
