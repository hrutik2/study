import styled from "styled-components"

export const NotionJavascript=()=>{
    return(
       <>
       <h1>Notion Javascript</h1>
        <Div>
         <Iframe
            src="https://ebony-porter-4c1.notion.site/Javascript-2e03079cd4924a189695356512ee9715?pvs=73"
            title="Notion Document"
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