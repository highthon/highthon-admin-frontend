import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const ApplicationWrapper = styled.li`
    box-sizing: border-box;
    width: 560px;
    height: 120px;
    border: 1px solid #808080;
    border-radius: 2px;
    float: left;
    margin: 20px 0;

    &:nth-of-type(2n) {
        margin-left: 80px;
    }
`;

const PositionWrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 15%;
    height: 100%;
    padding: 0 16px;
    border-right: 1px solid #e6e6e6;
    float: left;
`;

const AppliactionInfo = styled.div`
    box-sizing: border-box;
    width: 85%;
    height: 100%;
    padding: 15px 48px;
    float: left;
`;

const ApplicantName = styled.span`
    font-size: 16px;
    line-height: 32px;
    color: #515156;
`;

const ApplicantAge = styled.span`
    font-size: 12px;
    line-height: 32px;
    color: #515156;
`;

const ApplicantSchool = styled.span`
    font-size: 14px;
    line-height: 32px;

    color: #515156;
`;

const ApplicantTelNumber = styled.span`
    font-size: 12px;
    line-height: 32px;
`;

const ApplicantEmail = styled.span`
    font-size: 12px;
    line-height: 32px;
`;

const PositionIcon = styled.i`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 32px;
    height: 32px;
    background: url('/images/icon-${props => props.position}.png');
    background-size: cover;
`;

const Application = class extends Component{
    render() {
        const { 
            name, age, school, telNumber, email,
            position
         } = this.props;
        
        return (
            <ApplicationWrapper>
                <PositionWrapper>
                    <PositionIcon position={position}/>
                </PositionWrapper>
                <AppliactionInfo>
                    <ApplicantName>{name}</ApplicantName> &nbsp;
                    <ApplicantAge>{age}세</ApplicantAge> <br/>
                    <ApplicantSchool>소속: {school}</ApplicantSchool> <br/>
                    <ApplicantTelNumber>call: {telNumber}</ApplicantTelNumber> | <ApplicantEmail>E-mail: {email}</ApplicantEmail>
                </AppliactionInfo>
            </ApplicationWrapper>
        )
    }
}

export default Application;