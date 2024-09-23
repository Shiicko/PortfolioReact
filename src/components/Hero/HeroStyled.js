import { Skeleton } from "@mui/material";
import styled from "styled-components";

export const SkeletonText = styled(Skeleton)`
  margin-bottom: 16px;
  width: 100%;
  max-width: 300px;
  height: 40px;
  background-color: #ccc;
`;

export const Container = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  gap: 300px;

  & img {
    height: 250px;
    width: auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
    margin-top: 100px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const textContent = styled.div`
  display: flex;
  flex-direction: column;

  & a {
    background-image: url("/icons/linkedin.png");
    background-size: cover;
    width: 32px;
    height: 32px;
    display: inline-block;
    margin-top: 15px;
  }

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;
