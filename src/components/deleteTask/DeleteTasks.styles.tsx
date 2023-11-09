import styled from "styled-components";


// A TaskContainer component that'll render a div tag with some styles
export const TaskContainer = styled.div`
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

// A Input component that'll render a Input tag with some styles
export const Input = styled.input.attrs({ type: "checkbox" })``;

// A Label component that'll render a Label with some styles
export const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

// A TaskCoLabelText component that'll render a Label text with some styles
export const LabelText = styled.span`
  background-color: white;
  color: black;
  font-size: 1.25em;
  ${Input}:checked + && {
    color: red;
  }
`;
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color:#0707f7
`;


export const Button = styled.button`
  border-radius: 20px;
  padding:10px 20px;
  background-color: rgb(0 46 129);
  color:white;
  cursor: pointer;
  border: none;
  margin-top: 5px;
`;
