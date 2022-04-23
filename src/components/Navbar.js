import React from 'react';
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

const Container = styled.div`
    height: 50px;
    width: 100%;
    background-color: white;
    position: sticky;
`;
const Wrapper = styled.div`
     padding: 10px 20px;
     display: flex;
     justify-content: space-between; 
     align-items: center;
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline crimson; 
`;

const Menu = styled.ul`
    display: flex;
    list-style: none;
    
    @media only screen and (max-width: 480px){
        display: none;
 }
`;
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
`;

const Button = styled.button`
    border: 2px solid white;
    padding: 10px 15px;
    background-color: crimson;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Agency</Logo>
                <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Services</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
                </Left>
                <Button>JOIN NOW</Button>
            </Wrapper>
        </Container>
    );
};

export default Navbar;