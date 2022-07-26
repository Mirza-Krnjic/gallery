import React from "react"
import Link from "next/link"
import { AiOutlineShopping } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"

import { Cart } from "./"
import { useStateContext } from "../context/StateContext"
import Logo from "../images/galerija-logo.png"
import Image from "next/image"

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()

  return (
    <div className="navbar-container">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="logo">
          <Link href="/">
            <Image src={Logo} width="150px" height="30px" alt="/" />
          </Link>
        </div>
        <div>
          <GiHamburgerMenu />
        </div>
      </div>

      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
