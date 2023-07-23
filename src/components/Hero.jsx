import React from 'react'
import styled from "styled-components";
import Navbar from './Navbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
const Section=styled.div`
     height:100vh;
     scroll-snap-align:center;
     display:flex;
     flex-direction:column;
     justify-content:space-between;
     align-items:center;
     @media only screen and (max-width:768px)
     {
        height:200vh;
     }
`
const Container=styled.div`
     height:100%;
     scroll-snap-align:center;
     width:1000px;
     display:flex;
     justify-content:space-between;
     @media only screen and (max-width:768px)
     {
        width:100%;
        flex-direction:column;
        align-items:center;
        justify-content:center;
     }
`
const Left=styled.div`
     flex:2;
     display:flex;
     flex-direction:column;
     justify-content:center;
     gap:20px;
     @media only screen and (max-width:768px)
     {
        flex:1;
        align-items:center;
     }
`
const Title=styled.h1`
    font-size:74px;
    @media only screen and (max-width:768px)
    {
       text-align:center;
    }
`
const WhatWeDo=styled.div`
     display:flex;
     align-items:center;
     gap:10px;
`
const Line=styled.img`
     height:5px;
`
const Subtitle=styled.h2`
     color:#da4ea2;
`
const Desc=styled.p`
     font-size:24px;
     color:lightgray;
     @media only screen and (max-width:768px)
     {
        padding:20px;
        text-align:center;
     }
`
const Button=styled.button`
     background-color:#da4ea2;
     color:white;
     font-weight:500;
     width:100px;
     padding:10px;
     border:none;
     border-radius:5px;
     cursor:pointer;
`
const Img=styled.img`
    width:800px;
    height:600px;
    object-cover:contain;
    position:absolute;
    top:0;
    down:0;
    left:0;
    right:0;
    margin:auto;
    animation:animate 2s infinite ease alternate;
    @media only screen and (max-width:768px)
    {
       width:300px;
       height:300px;
    }
    @keyframes animate{
      to{
        transform:translateY(20px);
      }
    }
    `
const Right=styled.div`
     flex:3;
     position:relative;
     @media only screen and (max-width:768px)
     {
        flex:1;
        width:100%;
     }
`
export default function Hero() {
  return (
    <Section>
        <Navbar/>
       <Container>
          <Left>
            <Title>Hello, I'm </Title> 
            <WhatWeDo>
              <Line src="./line.jpg"></Line>
              <Subtitle>Abishek Dharmaraj</Subtitle>
            </WhatWeDo>
            <Desc>I'm a Programmer.</Desc>
            <Button>About me</Button>
            </Left>
          <Right>
          <Canvas camera={{fov:25,position:[5,5,5]}}>
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1}/>
            <directionalLight position={[3,2,1]}/>
           </Canvas>
            <Img src="./comp.png"></Img>
          </Right>
  </Container>
    </Section>
  )
}
