import React, { useState } from "react"
import Link from "next/link"
import { AiOutlineShopping } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"

import { Cart } from "./"
import MobileMenu from "./MobileMenu"
import { useStateContext } from "../context/StateContext"
import Logo from "../images/galerija-logo.webp"
import Image from "next/image"

import { NavbarData } from "./NavbarData"
import styles from "./Navbar.module.css"

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  const [showSidemenu, setShowSidemenu] = useState(false)

  const toggleMobileMenu = () => {
    setShowSidemenu(!showSidemenu)
  }

  return (
    <nav className="navbar-container">
      <div className="logo">
        <Link href="/">
          <Image src={Logo} width="300px" height="40px" alt="/" />
        </Link>
      </div>
      {/* Computer view: Navigation items */}
      <div
        className={styles["nav-el-container"]}
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0 auto",
          paddingRight: "100px",
        }}
      >
        {NavbarData.map((navEl, index) => {
          return (
            <div className={styles["nav-el"]} key={index}>
              <Link href={navEl.path}>
                <li>
                  {navEl.icon}
                  <span>{navEl.title}</span>
                </li>
              </Link>
            </div>
          )
        })}
      </div>

      {/* Mobile view: Hamburger Menu */}
      <div className={styles["hamburger-menu"]}>
        <GiHamburgerMenu
          onClick={() => {
            setShowSidemenu(!showSidemenu)
          }}
        />
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
      {showSidemenu && <MobileMenu toggle={toggleMobileMenu} />}
    </nav>
  )
}

export default Navbar
