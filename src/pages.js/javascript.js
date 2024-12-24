import styled from "styled-components"
import { Display } from "../Component/dispaly"
import { INITAIL_data_javascript } from "../data"

export const JavaScript=()=>{
    return (
        <div>
            
            <h1>JavaScript</h1>
            <Container>
            {INITAIL_data_javascript.map((el,index)=>(
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