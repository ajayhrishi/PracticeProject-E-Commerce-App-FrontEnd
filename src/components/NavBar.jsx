import React from 'react'
import styled from 'styled-components'
import { Search } from '@mui/icons-material';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Container = styled.div`height: 60px; margin:10px;`
const Wraper = styled.div`padding: 0px 10px; display:flex; justify-content:space-between`

const Left = styled.div`flex:1; display:flex; align-items:center;`
const Right = styled.div`flex:1; display:flex; align-items:center; justify-content: flex-end;`
const Center = styled.div`flex:1; text-align:center`

const Logo = styled.h1`font-weight:bold`

const Language = styled.span`fond-size: 14px; cursor: pointer`
const SearchContainer = styled.div`border:0.5px solid lightgrey; display:flex; align-items:center; margin-left:25px; padding:5px `
const Inputs = styled.input`border:none`;

const MenuItems = styled.div`font-size:20px; cursor:pointer; margin-left:25px`

const NavBar = () => {
  return (
    <Container>
         <Wraper>
            <Left>
                <Language>ENG</Language>
                <SearchContainer><Inputs/> <Search style={{color:"gray", fontSize:15}}/></SearchContainer>
            </Left>
            <Center><Logo> Shop Mart</Logo></Center>
            <Right>
                <MenuItems>Register</MenuItems>
                <MenuItems>Sign In</MenuItems>
                <MenuItems>   
                    <Badge badgeContent={0} color="primary">
                        <ShoppingCartIcon/>
                    </Badge>
                </MenuItems>
            </Right>
         </Wraper>
    </Container>
  )
}   

export default NavBar
