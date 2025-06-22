/* eslint-disable react/prop-types */
import * as s from "./NavbarStyled";
import sunIcon from "../assets/dark.png";
import moonIcon from "../assets/light.png";

const Navbar = ({ mode, toggleTheme }) => (
  <s.Nav>
    <s.Container>
      <s.Logo href="#">🚀</s.Logo>
      <s.ulNav>
        <li>
          <a href="#Proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#About">Sobre mi</a>
        </li>
      </s.ulNav>
      <s.Button onClick={toggleTheme}>
        <s.Icon src={mode === "light" ? sunIcon : moonIcon} alt="Toggle Icon" />
      </s.Button>
    </s.Container>
  </s.Nav>
);

export default Navbar;
