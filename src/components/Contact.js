import React from 'react';
import styled from "@emotion/styled";
import map from '../assets/map.png'
import phone from '../assets/phone.png'
import send from '../assets/send.png'

const Container = styled.div`
    height: 90%;
    background-color: 
`;
const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-width: 480px){
      flex-direction: column;
 } 
`;
const FormContainer = styled.div`
    width: 50%;
    
    @media only screen and (max-width: 480px){
       width: 100%;
 } 
`;
const Title = styled.h1`
    margin: 50px;
    margin-top: 0px;
    
    @media only screen and (max-width: 480px){
      margin: 20px;
 } 
`;
const Form = styled.div`
   height: 250px;
   display: flex;
   align-items: center;
   justify-content: center;
   @media only screen and (max-width: 480px){
       flex-direction: column;
 } 
`;

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    
    @media only screen and (max-width: 480px){
       height: 50%;
       margin-right: 0px;
 } 
`;
const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media only screen and (max-width: 480px){
      height: 50%;
 } 
`;
const Input = styled.input`
    width: 200px;
    padding: 20px;
    
    @media only screen and (max-width: 480px){
       padding: 5px;
 } 
`;
const TextArea = styled.textarea`
    width: 200px;
    height: 60%;
    padding: 20px;
    @media only screen and (max-width: 480px){
      padding: 5px;
      margin-top: 20px;
 } 
`;
const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    @media only screen and (max-width: 480px){
       padding: 5px;
       font-size: 14px;
 } 
`;

const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media only screen and (max-width: 480px){
       width: 100%;
       margin-top: 20px;
 } 
`;
const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    
    @media only screen and (max-width: 480px){
      margin-bottom: 20px;
 } 
`;
const  Icon = styled.img`
    width: 20px;
    margin-right: 20px;
    @media only screen and (max-width: 480px){
       width: 15px;
 } 
`;
const Text = styled.span`
    font-size: 20px;
    margin-right: 15px;
    
     @media only screen and (max-width: 480px){
       font-size: 14px;
 } 
`;

const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Questions? <br/> Let's Get In Touch</Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder={"Your Name"}/>
                            <Input placeholder={"Your Email"}/>
                            <Input placeholder={"Subject"}/>
                        </LeftForm>
                        <RightForm>
                            <TextArea>Your Message</TextArea>
                            <Button>Send</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icon src={map}/>
                        <Text>123 Park Avenue St., Lagos, Nigeria</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={phone}/>
                        <Text>+234 910 4567 764</Text>
                        <Text>+234 806 2345 890</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icon src={send}/>
                        <Text>contact@yetty.dev</Text>
                        <Text>sales@yetty.dev</Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    );
};

export default Contact;