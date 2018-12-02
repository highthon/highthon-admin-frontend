import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import GNB from '../components/GNB';

import { 
    FETCH_APPLICANT_LIST_REQUEST
} from '../actions';

import Application from '../components/Application';
import MailEditor from '../components/MailEditor';

const WrapSelectBox = styled.div`
    position: relative;
    display: inline-block;
    width: 100px;

    &+&{
        margin-left: 16px;
    }
    
    &::after{
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        display: inline-block;
        background-image: url('/images/dropdown-arrow.png');
        background-size: cover;
        background-position: center center;
        content: '';
    }
`;
const SelectBox = styled.select`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none; 
    font-size: 16px;
    line-height: 24px;
    background: #ffffff;
    color: #000000;
`;

const FunctionBar = styled.div`
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid #707070;
    padding: 12px 0;
`;

const ApplicantWrapper = styled.section`
    width: 1280px;
    margin: 0 auto;
    padding-top: 80px;
`;

const FunctionButton = styled.button`
    position: relative;
    padding-left: 30px;
    font-size: 16px;
    line-height: 24px;
    border: none;
    background: none;

    &::before{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        display: inline-block;
        width: 24px;
        height: 24px;
        background-size: cover;
        background-position: center center;
        content: '';
    }
`;

const SendMailButton = styled(FunctionButton)`
    color: #4188ff;

    &::before{
        background-image: url('/images/icon-send-mail.png');
    }
`;

const DeleteButton = styled(FunctionButton)`
    color: #831111;

    &::before{
        background-image: url('/images/icon-trash-can.png');
    }
`;

const ButtonGroups = styled.div`
    float: right;
    padding: 10px 0;
`;

const ApplicationList = styled.ul`
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    list-style: none;
`;

const Applicant = class extends Component{
    constructor(props) {
        super(props);

        this.props.fetchApplicantList();
    }

    render() {
        const applicantList = this.props.applicantList || [];
        const maybeApplicantList = applicantList.map((applicant, index) => (<Application key={`application-${index}`} {...applicant}/>));

        return(
          <ApplicantWrapper>
              <GNB/>
              <FunctionBar>
                <WrapSelectBox>
                    <SelectBox>
                        <option value="">전체</option>
                        <option value="">생활분야</option>
                        <option value="">게임분야</option>
                    </SelectBox>
                </WrapSelectBox>
                <WrapSelectBox>
                    <SelectBox>
                        <option value="">전체</option>
                        <option value="">개발자</option>
                        <option value="">디자이너</option>
                    </SelectBox>
                </WrapSelectBox>
                <ButtonGroups>
                    <SendMailButton>
                        메일 보내기
                    </SendMailButton>
                    <DeleteButton>
                        선택 삭제
                    </DeleteButton>
                </ButtonGroups>
              </FunctionBar>
              <ApplicationList>
                  {maybeApplicantList}
              </ApplicationList>
              <MailEditor/>
          </ApplicantWrapper>
        );
    }  
};

export default connect(state => ({ applicantList: state.applicantList }), 
dispatch => {
    return {
        fetchApplicantList(options = {}){
            dispatch({
                type: FETCH_APPLICANT_LIST_REQUEST,
                payload: options
            });
        }
    };
}
)(Applicant);