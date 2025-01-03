import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Sidebar = () => {
  return (
    <Div>
      <StyledLink to="/"><h1>JavaScript</h1></StyledLink>
      <StyledLink to="/notionJavascript"><h1>JavaScript_2</h1></StyledLink>
      <StyledLink to="/react"><h1>React</h1></StyledLink>
      <StyledLink to="/back"><h1>Backend</h1></StyledLink>
    </Div>
  );
};

const Div = styled.div`
  width: 20%;
  height: 99vh;
  background-color: cyan;
  text-align: left;
  padding: 10px;

  @media (max-width: 768px) {
    width: 30%; /* Adjust sidebar width for tablets */
    height: 95vh;
  }

  @media (max-width: 480px) {
    width: 50%; /* Adjust sidebar width for smartphones */
    height: auto; /* Allow height to adjust based on content */
    padding: 8px; /* Reduce padding for smaller screens */
  }
`;

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
