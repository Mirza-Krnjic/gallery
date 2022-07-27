import React from "react"
import Image from "next/image"

import Logo from "../images/galerija-logo.png"
import Interier from "../images/interier.jpeg"

const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <Image src={Logo} width="300px" height="60px" alt="/" />
      <Image src={Interier} className="footer-image" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          color: "black",
        }}
      >
        <span>Vlasnik: meridian.doo</span>
        <span>tel: +387 63 346 181</span>
        <span>Adresa: Franjevacka 13, Mostar</span>
      </div>
    </div>
  )
}

export default FooterBanner
