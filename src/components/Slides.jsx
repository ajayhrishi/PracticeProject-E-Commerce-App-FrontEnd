import React from 'react'
import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
`
const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
cursor:pointer;
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
`
const Wrapper = styled.div`height:100%`
const Slide = styled.div`display:flex; align-items:center`
const ImgContainer = styled.div``
const Image = styled.img``
const InfoContainer = styled.div` flex:1`

const imageAddress = 'https://img.freepik.com/free-photo/fashionable-woman-pink-coat-black-hat-posing_273443-2423.jpg?t=st=1717757843~exp=1717761443~hmac=f398f6eece9da4636a1a903614b74bc4f9aec7f86f60939f8a054057c7acca8d&w=740'

const Slides = () => {
  return (
    <div>
        <Container>
            <Arrow direction="left"><ArrowBackIosNewOutlinedIcon/></Arrow>
                <Wrapper>
                    <ImgContainer> <Image source="https://img.freepik.com/free-photo/fashionable-woman-pink-coat-black-hat-posing_273443-2423.jpg?t=st=1717757843~exp=1717761443~hmac=f398f6eece9da4636a1a903614b74bc4f9aec7f86f60939f8a054057c7acca8d&w=740"/> 
                    </ImgContainer>
                    <InfoContainer>


                    </InfoContainer>
                </Wrapper>
            <Arrow direction="right"><ArrowForwardIosOutlinedIcon/></Arrow>
        </Container>
    </div>
  )
}

export default Slides
