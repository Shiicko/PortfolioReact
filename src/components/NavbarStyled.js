import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.colorTxt};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colorTxt};
  text-decoration: none;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ulNav = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;

  li a {
    text-decoration: none;
    color: ${(props) => props.theme.colorTxt};
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #888;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
