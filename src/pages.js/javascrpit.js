import styled from "styled-components"

export const NotionJavascript=()=>{
    const pdf=`https://drive.google.com/file/d/10v2PEhNRspRtRzhHoBnB5To4s1BicA1-/view?usp=sharing`
    return(
       <>
       <h1>Notion Javascript</h1>
        <Div>
         <Iframe
            src={pdf}
            type="application/pdf" 
            >
         </Iframe>

        </Div>
        </>
    )
}
 const Div=styled.div`
 width:90%;
 margin:auto;
 padding:20px;
 height:80vh;
overflow-y:scroll;
overscroll-behavior:smooth;
 `
 const Iframe=styled.iframe`
 width:100%;
 
 
 height:80vh;
overflow-y:scroll;
overscroll-behavior:smooth;
 `