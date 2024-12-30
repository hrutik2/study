import React from 'react';
import { questions } from '../data';
import styled from 'styled-components';

const PDFViewer = () => {
 

  return (
   <Div>
     <h1>JavaScript output Based Question</h1>
     <Container>
        {questions.map(el=>(
            <Div_1 key={el.id}>
                <h2>{el.id} :- {el.question}</h2>
                <h3><b>Input</b>:- {el.input}</h3>
                {el.options.map((item,index)=>(
                    <p>{index+1}:- {item}</p>
                ))}
                <h3><b>Answer</b>:- {el.correctAnswer}</h3>

            </Div_1>
        ))}
     </Container>
   </Div>
  );
};

export default PDFViewer;
const Div = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;

  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 95%;
    padding: 15px;
    margin-bottom: 8px;
    border: 1px solid black;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid gray;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  overflow-y: scroll;
  overscroll-behavior: smooth;

  @media (max-width: 768px) {
    height: 70vh;
  }

  @media (max-width: 480px) {
    height: 60vh;
  }
`;

const Div_1=styled.div`
 width:90%;
 padding:20px;
 border:2px solid black;
 margin-bottom:20px;
`