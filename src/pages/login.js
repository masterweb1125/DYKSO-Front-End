import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  height: 100vh;
  font-size: 30px;
  background: #FFFFFF;
  border-radius: 8px;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  margin: auto;
`; 

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45vw;
  height: 100vh;
  font-size: 30px;
  border-radius: 8px;
  text-decoration: none;
  align-items: center;
`; 

const VerticalDownwardLine = styled.div`
    height: 90%;
    border-left: 1px solid #000;
    margin: 10px 0px;
`;

const Title = styled.div`
  width: 20vw;
  height: 5vh;
  flex-direction: column;
  font-size: 30px;
  font-weight: 500;
  margin-top: 50px;
`;

const SubTitle = styled.div`
  width: 20vw;
  height: 5vh;
  flex-direction: column;
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;
`;

const SubContainer = styled.div`
  width: 20vw;
  height: 5vh;
  font-size: 15px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: pre-line;
  margin-top: 20px;

  &:hover {
    background-color: #EEFFEE;
    border-radius: 6px;
    cursor: pointer;
  }

  span {
    color: #000000;
    font-weight:400;
  }
`;

const Input = styled.input`
  width: 20vw;
  height: 5vh;
  padding-left: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-top: 20px;
  outline: none;
  &:focus {
    border-color: #3498db;
  }
`;

const RoundedButton = styled.button`
    margin-top: 50px;
    border: none;
    border-radius: 10px; 
    padding: 10px 10px;
    font-size: 18px;
    width: 20vw;
    height: 5vh;
    cursor: pointer;
    background-color: #fcc017;
    color: #000;
    &:hover {
        background-color: #eebb00;
    }
`;

const Login = () => {
    return (
        <Container>
            <MainContainer>
                <Title>Create Account</Title>
                <SubTitle>Register using your name and email</SubTitle>
                <Input type="text" placeholder="Enter Your Name"></Input>
                <Input type="text" placeholder="Enter Your Email"></Input>
                <Input type="text" placeholder="Confirm Your Email"></Input>
                <Input type="text" placeholder="Enter Your Password"></Input>
                <Input type="text" placeholder="Confirm Your Password"></Input>
                <SubContainer>
                    <span>By continuing, you have read and agree to the</span>
                    <span>Term & Conditions</span>
                </SubContainer>
                <RoundedButton>Register</RoundedButton>
            </MainContainer>
            <VerticalDownwardLine />
            <MainContainer>
                <Title>Login</Title>
                <SubTitle>Already have an account? Welcome back!</SubTitle>
                <Input type="text" placeholder="Enter Your Email"></Input>
                <Input type="text" placeholder="Enter Your Password"></Input>
                <SubContainer>
                    <span>Forget password?</span>
                </SubContainer>
                <RoundedButton>Login</RoundedButton>
            </MainContainer>
        </Container>
    )
  };
  
  export default Login;