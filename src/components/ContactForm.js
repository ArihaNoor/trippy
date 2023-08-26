import React from 'react'
import { styled } from 'styled-components'
import { TextField } from '@mui/material'

const ContactForm = () => {
  return (
    <FormContainer>
      <form>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput type="text" id="name" name="name" required />

        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput type="email" id="email" name="email" required />

        <FormLabel htmlFor="message">Message</FormLabel>
        <FormTextArea id="message" name="message" rows="5" required />

        <FormButton type="submit">Submit</FormButton>
      </form>
    </FormContainer>
  )
}

export default ContactForm

const FormContainer = styled.div`
  max-width: 40%;
  margin: 4rem auto;
  padding: 7rem;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;
const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormButton = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;