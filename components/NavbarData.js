import { AiFillHome } from "react-icons/ai"
import { BiPaint, BiUserCircle, BiBookAlt, BiMailSend } from "react-icons/bi"
import { GiWoodFrame } from "react-icons/gi"

export const NavbarData = [
  {
    title: "Početna",
    path: "/",
    icon: <AiFillHome />,
    className: "class-text",
  },
  {
    title: "Galerija",
    path: "/Galerija",
    icon: <BiPaint />,
    className: "class-text",
  },
  {
    title: "Okviri",
    path: "/okviri",
    icon: <GiWoodFrame />,
    className: "class-text",
  },
  // {
  //   title: "Umjetnici",
  //   path: "/umjetnici",
  //   icon: <BiUserCircle />,
  //   className: "class-text",
  // },
  {
    title: "Kontakt",
    path: "/kontakt",
    icon: <BiMailSend />,
    className: "class-text",
  },
]
