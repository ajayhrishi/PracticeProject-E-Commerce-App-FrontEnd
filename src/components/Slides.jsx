import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from '../data';

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left: ${props=>props.direction==="left" && "10px"};
right: ${props=>props.direction==="right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`
const Wrapper = styled.div`height:80%; display:flex; margin-left:-300px; transform: translateX(${props=>props.slideIndex*-100}vw); transition: all 0.5s ease`

const Slide = styled.div`display:flex;  width:100vw; height:70vh; margin-left:7%;margin-right:-1%; margin-top:1%; border-radius:25px; background-color:${props=>props.bg}`
//slide Image componets
const ImgContainer = styled.div`height:115%; padding:5%`
const Image = styled.img`height:70%; border-radius:30px`
const ImgLadywithHat= 'https://img.freepik.com/free-photo/fashionable-woman-pink-coat-black-hat-posing_273443-2423.jpg?t=st=1717757843~exp=1717761443~hmac=f398f6eece9da4636a1a903614b74bc4f9aec7f86f60939f8a054057c7acca8d&w=740'
//-----slide Info
const InfoContainer = styled.div` margin:70px; flex:1; padding:50px; padding-top:90px; `

const Title = styled.h1`font-size:70px`
const Description = styled.p`margin:50px 0px; font-size:20px; font-weight:500; letter-spacing:3px`
const Button = styled.button`padding:20px; border-radius:70px; cursor:pointer; font-size:20px `



const Slides = () => {
    const [slideIndex, setSlideIndex]= useState(0);
    const handleClick = (direction)=>{
        if(direction==='left'){
            setSlideIndex(slideIndex>0? slideIndex-1 : 2);
        }
        else{
            setSlideIndex(slideIndex<2? slideIndex+1 : 0);
        }
    }


  return (
    <div>
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}><ArrowBackIosNewOutlinedIcon/></Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {
                    sliderItems.map(item=>
                        
                        <Slide bg={item.bg}>
                            <ImgContainer> 
                                 <Image src={item.image}/> 
                            </ImgContainer>

                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Description>{item.description}</Description>
                                <Button>{item.buttonInfo}</Button>
                            </InfoContainer>

                        </Slide>
                                    )
                }
                </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}><ArrowForwardIosOutlinedIcon/></Arrow>
        </Container>
    </div>
  )
}

export default Slides
