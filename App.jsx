import styled from "styled-components";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <MainContainer>
      <WelcomeText>Reachaliens Community</WelcomeText>
      <SecondText>Welcome to Reachaliens Community. Here, you can connect 
        and share with other aliens.</SecondText>
      <InputContainer>
        <Input type="text" placeholder="Email adress" />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Log in" />
      </ButtonContainer>
      <LoginWith>Don't have an account yet? Sign up </LoginWith>
      <HorizontalRule />
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  min-width: 62vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 110px;
  color: #000000;
  font-family: 'Open Sans';
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h1`
  margin: 8rem 0 2rem 0;
`;

const SecondText = styled.h4`
  margin: 0rem 0 4rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  width: 500px;
  border-radius: 30px;

`;

const ButtonContainer = styled.div`
  margin: 0rem 0 0.3rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  margin: 1rem 0 0rem 0;
`;

const HorizontalRule = styled.hr`
  width: 36%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background:linear-gradient(90deg, #AAAAA74F 0%, #CACBCB 0%, #E6E5E6 100%); 
  background-color: #7A7A7A;
  margin: 0.3rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default App;
