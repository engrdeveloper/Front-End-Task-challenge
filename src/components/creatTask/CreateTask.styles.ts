import styled from "styled-components";

// A TaskContainer component that'll render a div tag with some styles
export const TaskFormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
  ;
`;

// Create an Input component that'll render an <input> tag with some styles
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1.5em;
  background: #d8e3ed;
  border: none;
  border-radius: 3px;
`;

export const Form = styled.form`
  flex-direction: column;
`;


export const Button = styled.button`
  border-radius: 20px;
  padding:10px 20px;
  background-color: rgb(0 46 129);
  color:white;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
  margin-top: 5px;
  
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color:#0707f7
`;