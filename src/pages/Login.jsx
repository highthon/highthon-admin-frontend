import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const CustomFont = styled.div`
    font-family: 'Righteous', cursive;
    font-size: 32px;
    line-height: 40px;
`

const Title = styled(CustomFont)`
    color: #639eff;
`;

const Logo = styled(CustomFont)`
    font-size: 40px;
    line-height: 48px;
    color: #fff;
`;

const Description = styled.p`
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.4px;
    color: #ffffff;
`;

const Background = styled.div`
    position: absolute;
    z-index: -100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${props => props.src || '/images/login-background.png'});
    background-size: cover;
    background-position: center center;
`;

const InfoWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 600px;
    height: 400px;
    box-sizing: border-box;
    padding: 100px;
    border: 1px solid #707070;
    background: rgba(0,0,0,0.7);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
`;

const FormWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
    width: 600px;
    padding: 60px 64px 124px;
    background-color: #ffffff;
`;

const ContentWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Login = styled.section``;

export default () => {
    return (
    <Login>
        <Background />
        <ContentWrapper>
            <InfoWrapper>
                <Logo>Highthon</Logo>
                <Description>
                    위 페이지는 Highthon : trip 운영진들이 <br/>
                    편하게 행사를 준비 및 관리 할 수 있도록 제작된 페이지입니다. <br/>
                    미리 지급 된 아이디와 비밀번호를 입력해주세요.
                </Description>
            </InfoWrapper>
            <FormWrapper>
                <Title>Log In</Title>
                <LoginForm/>
            </FormWrapper>
        </ContentWrapper>
    </Login>
    );
};