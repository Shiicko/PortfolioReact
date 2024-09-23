import styled from "styled-components";

export const Nav = styled.nav`
  padding: 20px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.colorTxt};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ulNav = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;

  && li,
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colorTxt};
  }

  @media (max-width: 768px) {
    display: none; /* Oculta los enlaces en pantallas pequeñas */
  }
`;
