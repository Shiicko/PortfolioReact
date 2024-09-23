import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: ${(props) => props.theme.bgColor};
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colorTxt};
  margin-bottom: 20px;
`;

export const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  width: 100%;
  max-width: 800px;
`;

export const SkillItem = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.theme.mode === "dark" ? "#2e2e2e" : "#e9ecef"};
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#3e3e3e" : "#dee2e6"};
  }
`;

export const Icon = styled.img`
  width: 70%;
  height: auto;
  object-fit: contain;
`;
