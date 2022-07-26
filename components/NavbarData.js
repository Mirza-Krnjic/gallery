import { AiFillHome } from "react-icons/ai"
import { BiPaint, BiUserCircle, BiBookAlt, BiMailSend } from "react-icons/bi"

export const NavbarData = [
  {
    title: "Početna",
    path: "/",
    icon: <AiFillHome />,
    className: "class-text",
  },
  {
    title: "Galerija",
    path: "/",
    icon: <BiPaint />,
    className: "class-text",
  },
  {
    title: "Umjetnici",
    path: "/",
    icon: <BiUserCircle />,
    className: "class-text",
  },
  {
    title: "O nama",
    path: "/",
    icon: <BiBookAlt />,
    className: "class-text",
  },
  {
    title: "Kontakt",
    path: "/",
    icon: <BiMailSend />,
    className: "class-text",
  },
]
