// Install styled-components by running: npm install styled-components
import React, { useState } from "react";
import styled from "styled-components";

const GlassContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: auto;
  margin-top: 100px;
`;

const Title = styled.h2`
  text-align: center;
  color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 6px;
  color: #fff;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 12px;
  border: none;
  border-radius: 5px;
`;

const SubmitButton = styled.input`
  background: #4caf50;
  color: white;
  cursor: pointer;
  padding: 8px;
  border: none;
  border-radius: 5px;

  &:hover {
    background: #45a049;
  }
`;

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <GlassContainer>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="username">Username:</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <SubmitButton type="submit" value="Sign Up" />
      </Form>
    </GlassContainer>
  );
};

export default SignupForm;
