import styled from "styled-components"
import { Display } from "../Component/dispaly"
import { INITAIL_data_javascript, initial_data_Mongoose } from "../data"

export const Backend=()=>{
    return (
        <div>
            
            <h1>JavaScript</h1>
            <Container>
            {initial_data_Mongoose.map((el,index)=>(
                <Div>
                    <div>
                    <h1>{index+1}:-{el.Q}</h1>
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
        </div>
    )
}

const Div = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;
  border: 2px solid black;
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
