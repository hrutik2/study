import styled from "styled-components";
import { Link } from "react-router-dom";

export const NAV = () => {
  return (
    <Div>
      <StyledLink to="/"><h1>JavaScript</h1></StyledLink>
      <StyledLink to="/notionJavascript"><h1>JavaScript_2</h1></StyledLink>
      <StyledLink to="/react"><h1>React</h1></StyledLink>
      <StyledLink to="/back"><h1>Backend</h1></StyledLink>
    </Div>
  );
};

const Div=styled.div`
width:100%;
background-color:cyan;
color:black;
display: flex;
justify-content:space-around;
`
















const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;

  h1 {
    font-size: 1.5rem;

    @media (max-width: 768px) {
      font-size: 1.3rem; /* Reduce font size for tablets */
    }

    @media (max-width: 480px) {
      font-size: 1rem; /* Reduce font size further for smartphones */
    }
  }
`;
