import { Link } from "react-scroll";
import { Cookie } from "next/font/google";
const cookie = Cookie({ subsets: ["latin"], weight: "400" });

const NavbarList = ({ eengsf, showLayer }) => {
  return (
    <>
      <li
        className={`cursor-pointer font-bold hover:text-my-light-green ${
          showLayer ? "text-white" : ""
        } `}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-45}
          duration={500}>
          HOME
        </Link>
      </li>
      <li
        className={`cursor-pointer font-bold hover:text-my-light-green ${
          showLayer ? "text-white" : ""
        } `}>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-135}
          duration={500}>
          ABOUT US
        </Link>
      </li>
      {eengsf ? null : (
        <li
          className={`text-4xl border-b-2 border-my-dark-green  cursor-pointer font-bold hover:text-my-light-green`}>
          <h1 className={cookie.className}>EengSF</h1>
        </li>
      )}

      <li
        className={`cursor-pointer font-bold hover:text-my-light-green ${
          showLayer ? "text-white" : ""
        } `}>
        <Link
          activeClass="active"
          to="menu"
          spy={true}
          smooth={true}
          offset={-135}
          duration={500}>
          MENU
        </Link>
      </li>
      <li
        className={`cursor-pointer font-bold hover:text-my-light-green ${
          showLayer ? "text-white" : ""
        } `}>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>
          CONTACT
        </Link>
      </li>
    </>
  );
};

export default NavbarList;
