import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1080px;
  margin: 80px auto;
  padding: 0 20px;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

export const Header = styled.h1`
  font-weight: 900;
  font-size: 3.2rem;
  color: #1e1e2f;
  margin-bottom: 60px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 36px;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37),
    0 4px 10px 0 rgba(31, 38, 135, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px 0 rgba(99, 102, 241, 0.6),
      0 8px 30px 0 rgba(99, 102, 241, 0.4);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 180px;
  overflow: hidden;

  a {
    display: block;
    height: 100%;
    width: 100%;
    position: relative;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    display: block;
  }

  &:hover img {
    transform: scale(1.12);
    filter: brightness(0.85);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  background: rgba(99, 102, 241, 0.85);
  padding: 10px 24px;
  border-radius: 50px;
  transition: opacity 0.3s ease;
  pointer-events: none;

  ${ImageWrapper}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const Button = styled.div`
  color: white;
  font-weight: 600;
  font-size: 1rem;
  user-select: none;
  display: inline-block;
  letter-spacing: 0.03em;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.85);
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  background: rgba(0, 0, 0, 0.99);
  padding: 10px 16px;
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  white-space: nowrap;
  pointer-events: none;

  ${ImageWrapper}:hover & {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    pointer-events: auto;
  }
`;
