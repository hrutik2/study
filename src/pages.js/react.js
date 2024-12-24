import styled from "styled-components";
import { Display } from "../Component/dispaly";
import { Initail_Data_react } from "../data";

export const ReactApp = () => {
  
  return (
    <>
      <h1>React </h1>
      <Container>
        {Initail_Data_react.map((el) => (
          <Div>
            <div>
              <h1> Question :-{el.Q}</h1>
            </div>
            <div>
              {Object.entries(el.a).map(([key, value], index) => (
                <div key={index}>
                  <h2>{key}</h2>
                  <Display
                   data={value}
                  ></Display>
                </div>
              ))}
            </div>
          </Div>
        ))}
      </Container>
    </>
  );
};


const Div=styled.div`
 width:90%;
 margin:auto;
 padding:20px;
 border:2px solid black;
 margin-bottom:10px
`
const Container=styled.div`
width:100%;
height:80vh;
overflow-y:scroll;
overscroll-behavior:smooth;

`