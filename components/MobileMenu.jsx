import React from "react"
import styles from "./MobileMenu.module.css"
import { NavbarData } from "./NavbarData"
import Link from "next/link"
import { HiArrowLeft } from "react-icons/hi"

function MobileMenu({ toggle }) {
  return (
    <div className={styles["mobile-menu"]}>
      <button className={styles["mobile-exit-btn"]} onClick={() => toggle()}>
        <HiArrowLeft />
      </button>
      <div className={styles["mobile-menu-items"]}>
        {NavbarData.map((navEl, index) => {
          return (
            <div className={styles["nav-el"]}>
              <Link href={navEl.path}>
                <li key={index}>
                  {navEl.icon}
                  <span>{navEl.title}</span>
                </li>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MobileMenu
