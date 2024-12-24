import { Link } from "react-router-dom";
import { styled } from "styled-components";
export const Sidebar=()=>{
    return (
        <Div>
            <StyledLink to="/"><h1>JavaScript</h1></StyledLink>
            <StyledLink to="/react"><h1>React</h1></StyledLink>
        </Div>
    )
}

const Div = styled.div`
 width:20%;
 height:99vh;
 background-color: cyan;
 text-align:left;
 padding:10px
`
const StyledLink=styled(Link)`
 text-decoration:none
`