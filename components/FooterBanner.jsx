import React from "react"
import Link from "next/link"
import Logo from "../images/galerija-logo.png"
import Image from "next/image"

import { urlFor } from "../lib/client"

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="footer-banner-container">
      {/* <div> */}
      <Image src={Logo} width="300px" height="60px" alt="/" />
      <img src={urlFor(image)} className="footer-image" />
      {/* </div> */}
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
