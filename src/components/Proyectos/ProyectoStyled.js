import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-top: 60px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin-top: 35px;
  justify-content: center;
  align-items: center;

  & div {
    position: relative;
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    text-align: center;
    font-size: 16px;
  }

  & div:hover {
    transform: scale(1.05);
  }

  & div:hover img {
    opacity: 0.3;
  }

  & div:hover span {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 15px;
    padding: 20px;
    margin: 20px auto;

    & div {
      width: 100%;
      max-width: 160px;
    }
  }
`;
