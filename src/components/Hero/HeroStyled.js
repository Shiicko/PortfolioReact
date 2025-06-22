import styled, { createGlobalStyle } from "styled-components";

export const FontImport = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap');
`;

export const Section = styled.section`
  min-height: 100vh;
  background: (
    ${(props) => props.theme.bgColor} ${(props) => props.theme.accent}
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  padding: 60px 24px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
  color: ${(props) => props.theme.colorTxt};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.theme.accent};
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1.15rem;
  font-weight: 400;
  color: ${(props) => props.theme.colorTxt};
  margin: 0 auto;
  max-width: 480px;
  line-height: 1.6;
`;

export const ButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Button = styled.a`
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.bgColor};
  padding: 10px 28px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 0 12px ${(props) => props.theme.accent};
  }
`;
