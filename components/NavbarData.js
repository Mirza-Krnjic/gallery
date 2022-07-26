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
    path: "/galerija",
    icon: <BiPaint />,
    className: "class-text",
  },
  {
    title: "Umjetnici",
    path: "/umjetnici",
    icon: <BiUserCircle />,
    className: "class-text",
  },
  {
    title: "O nama",
    path: "/o-nama",
    icon: <BiBookAlt />,
    className: "class-text",
  },
  {
    title: "Kontakt",
    path: "/kontakt",
    icon: <BiMailSend />,
    className: "class-text",
  },
]
