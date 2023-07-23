import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import styled from "styled-components";
import Map from "./Map"
const Section=styled.div`
     height:100vh;
     scroll-snap-align:center;
`
const Container=styled.div`
     width:100%;
     height:100%;
     display:flex;
     justify-content:space-between; 
     gap:50px;
`
const Left=styled.div`
     flex:1;
     display:flex;
     align-items:center;
     justify-content:center;
     background-color:flex-end;
     @media only screen and (max-width:768px)
     {
      justify-content:center;
     }
`
const Title=styled.h1`
     font-weight:200;
`
const Form=styled.form`
width:500px;
display:flex;
flex-direction:column;
gap:25px;
@media only screen and (max-width:768px)
     {
      width:300px;
     }
     
`
const Input=styled.input`
padding:20px;
background-color:#e8e6e6;
border:none;
border-radius:5px;
`
const TextArea=styled.textarea`
     padding:20px;
     background-color:#e8e6e6;
     border:none;
     border-radius:5px;
`
const Button=styled.button`
     background-color:#da4ea2;
     color:white;
     border:none;
     font-weight:bold;
     cursor:pointer;
     border-radius:5px;
     padding:20px;
`
const Right=styled.div`
     flex:1;
     @media only screen and (max-width:768px)
     {
      display:none;
     }
`

export default function Contact() {
      const ref=useRef();
      const [success,setSuccess]=useState(null);
   const handleSubmit =e=>{
      e.preventDefault();
      emailjs.sendForm('service_zn64b5e', 'template_2ncv6xq', ref.current, 'erYqZf3ec1nGoZE39')
          .then((result) => {
              console.log(result.text);
              setSuccess(true)
          }, (error) => {
              console.log(error.text);
              setSuccess(false)
          });
    };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>
              Contact Us
            </Title>
            <Input placeholder="Name" name="name"></Input>
            <Input placeholder='Email' name="email"></Input>
            <TextArea placeholder='Write Your Message' name="message" rows={10}></TextArea>
            <Button type="submit">Send</Button>
            {success && "Your message has been sent. we will get back soon :)"}
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  )
}
