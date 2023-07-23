import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Paint from './Paint'
import styled from 'styled-components'

const Desc=styled.div`
  width:200px;
  height:70px;
  padding:20px;
  background-color:white;
  border-radius:10px;
  position:absolute;
  top:100px;
  right:100px;
  @media only screen and (max-width:768px)
  {
     top:0;
     bottom:0;
     left:0;
     right:0;
     margin:auto;
  }
`;

export default function ProductDesign() {
  return (
    <>
    <Canvas>
        <Stage environment="city" intensity={0.6}>
           <Paint/>
        </Stage>
        <OrbitControls enableZoom={false}/>
    </Canvas>
    <Desc>
          productDesign
    </Desc>
    </>
    
  )
}
