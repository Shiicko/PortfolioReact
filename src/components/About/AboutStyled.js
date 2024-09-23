import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colorTxt};
  text-align: center;
  max-width: 750px;
  margin-bottom: 40px;
  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    margin: 0 0.5em;
  }

  a:hover {
    text-decoration: underline;
  }
`;
