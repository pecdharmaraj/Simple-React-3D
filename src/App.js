import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Works from "./components/Works";
import styled from "styled-components";
const Container=styled.div`
     height:100vh;
     scroll-snap-type:y mandatory;
     scroll-behavior:smooth;
     overflow-y:auto;
     color:white;
     background:url('./workee.jpg');
     scrollbar-width:none;
     &::-webkit-scrollbar{
      display:none;
     }
`

function App() {
  return (
    <Container>
      <Hero/>
      <Work/>
      <Works/>
     <Contact/>
    </Container>
  );
}

export default App;
