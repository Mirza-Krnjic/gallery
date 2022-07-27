import React from "react"
import styles from "./okviri.module.css"
import { FooterBanner } from "../components"
import Okvir from "../components/Okvir"
import { client } from "../lib/client"

function okviri({ okvirData }) {
  return (
    <>
      <div className={styles.container}>
        <h2>Izbor okvira</h2>
        <div style={{ marginBottom: "50px" }}>
          <p>
            Možda odijelo ne čini čovjeka, ali jedno je sigurno okvir čini sliku
            i naš je zadatak da Vaše želje pretvorimo u stvarnost.
          </p>
          <p>
            Tradicija uramljivanja, profesionalan pristup, preko 20 godina
            iskustva naučila nas je kako pomoću okvira stvoriti dodatnu
            vrijednost za svaku sliku. Vjerujemo da zahvaljujući našoj širokoj
            ponudi od preko 150 različitih vrsta, boja i oblika letvica, možemo
            stvoriti remek djelo uz pomoć okvira!
          </p>
        </div>
        {okvirData.map((okvir) => (
          <Okvir
            broj={okvir.broj}
            boja={okvir.boja}
            visina={okvir.visina}
            sirina={okvir.sirina}
            image={okvir.image}
          />
        ))}
      </div>
      <div className="products-container"></div>
      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const okvirQuery = '*[_type == "okvir"]'
  const okvirData = await client.fetch(okvirQuery)

  return {
    props: { okvirData },
  }
}

export default okviri
