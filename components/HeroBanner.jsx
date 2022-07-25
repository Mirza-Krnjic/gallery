import React from "react"
import Link from "next/link"
import { urlFor } from "../lib/client"

function HeroBanner({ heroBanner }) {
  const imageLink = urlFor(heroBanner.image)

  return (
    <div className="hero-banner-container">
      <div>
        <p className="slika-solo" style={{ color: "white" }}>
          {heroBanner.smallText}
        </p>
        <h3 style={{ color: "whitesmoke" }}>{heroBanner.midText}</h3>
        {/* <img
          src={urlFor(heroBanner.image)}
          alt="header sub image"
          className="hero-banner-image"
        /> */}
        <div>
          {/* <Link href={`product/${heroBanner.product}`}>
            <button type="button">button text</button>
          </Link> */}
          <div className="desc">
            <h5 style={{ color: "white" }}>Kontak telefon:</h5>
            <p style={{ color: "white" }}>+387 63 346 181</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
