import logo from './logo.svg';
import './App.css';
import { ReactApp } from './pages.js/react';
import { JavaScript } from './pages.js/javascript';
import { Sidebar } from './Component/sidebar';
import styled from 'styled-components';
import { AllRoutes } from './routes/allRoutes';

function App() {
  return (
    <Container >
      <Sidebar/>
      <Div>
       <AllRoutes/>
      </Div>
    </Container>
  );
}

export default App;

const Container=styled.div`
 width:100%;
 display:flex;
 
`
const Div=styled.div`
 width:80%;
 height:95vh;
 text-align:left;
 
 padding:20px;
 
`