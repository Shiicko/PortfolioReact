import styled from "styled-components";

export const Section = styled.section`
  padding: 40px 20px;
  background-color: ${(props) => props.theme.bgColor};
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colorTxt};
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colorTxt};
  margin-bottom: 20px;
  max-width: 500px;
  line-height: 1.4;
`;

export const ContactIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const ContactIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
  text-decoration: none;
  box-shadow: 0 0 0 2px ${(props) => props.theme.bgColor}; /* Añade un borde fino alrededor del icono */

  &:hover {
    background-color: rgba(0, 15, 59, 0.2);
    transform: scale(1.1);
    box-shadow: 0 0 0 3px ${(props) => props.theme.bgColor}; /* Aumenta el borde en hover */
  }
`;

export const Icon = styled.img`
  width: 70%;
  height: 70%;
  border-radius: 50%;
  object-fit: cover;
`;
