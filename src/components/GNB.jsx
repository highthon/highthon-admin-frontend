import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 0 88px;
    overflow: hidden;
    border-bottom: 1px solid #d4d4d4;
    background: #ffffff;
    z-index: 1000;
`;

const Navigation = styled.nav`
    float: left;

    &+&{
        float: right;
    }
`;

const StyledLink = styled(NavLink)`
    display: inline-block;
    padding: 25px 24px;
    font-size: 18px;
    line-height: 27px;
    text-decoration: none;
    color: #b3b3b3;

    &:not(.active-link){
        color: #000000;
        border-bottom: 3px solid #000000;
    }

    &:active{
        color: #000;
    }

    &:hover.active-link{
        color: #999999;
        border-bottom: 3px solid #999999;
    }
`;

const LogoutLink = styled.a`
    display: inline-block;
    padding: 25px 24px;
    font-size: 16px;
    line-height: 27px;
    color: #000000;
    text-decoration: none;
`;

const Logo = styled(Link)`
    margin-right: 40px;
    font-family: 'Righteous', cursive;
    font-size: 24px;
    line-height: 36px;
    color: #4188ff;
    text-decoration: none;
`

const GNB = () => {
    return (
    <Header>
        <Navigation>
            <Logo to="/">Highthon</Logo>
            <StyledLink activeClassName="active-link" to="/main">신청자 관리</StyledLink>
            <StyledLink activeClassName="active-link" to="/">후원사 관리</StyledLink>
            <StyledLink activeClassName="active-link" to="/">공지사항</StyledLink>
            <StyledLink activeClassName="active-link" to="/">심사</StyledLink>
            <StyledLink activeClassName="active-link" to="/">당일사용</StyledLink>
        </Navigation>
        <Navigation>
            <LogoutLink href="/signout">로그아웃</LogoutLink>
        </Navigation>
    </Header>
    );
};

export default GNB;