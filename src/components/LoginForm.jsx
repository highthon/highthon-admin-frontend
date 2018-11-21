import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FETCH_USER_INFO } from '../actions';

const Input = styled.input`
    padding: 16px;
    background: #ffffff;
    width: 100%;
    border: none;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
`;

const InputWraper = styled.div`
    position: relative;
    border-bottom: 1px solid #000000;
    padding-left: 32px;
    margin-top: 74px;

    &+& {
        margin-top: 52px;
    }

    &:before{
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        width: 24px;
        height: 24px;
        background-image: url(${props => props.logoSrc});
        background-size: cover;
        background-position: center center;
        content: '';
    }
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 16px 0 20px;
    margin-top: 80px;
    font-family: 'Righteous', cursive;
    text-align: center;
    font-size: 24px; 
    line-height: 30px;
    color: #ffffff;
    background-color: #649eff;
`;

const Form = styled.div``;

const LoginForm = class extends Component{
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            password: ''
        };

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onSubmitLoginForm = this.onSubmitLoginForm.bind(this);
    }
    
    render() {
        return (
            <Form>
                <InputWraper logoSrc="/images/icon-user.png">
                    <Input type="text" placeholder="ID" name="id" onChange={this.onChangeInput} value={this.state.id}/>
                </InputWraper>
                <InputWraper logoSrc="/images/icon-password.png">
                    <Input type="password" placeholder="PASSWORD" name="password" onChange={this.onChangeInput} value={this.state.password}/>
                </InputWraper>
                <SubmitButton onClick={this.onSubmitLoginForm}>LOGIN</SubmitButton>
            </Form>
        );
    }

    onChangeInput(event) {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        });
    }

    onSubmitLoginForm(event) {
        event.preventDefault();

        this.props.fetchUserInfo({...this.state});
        // request call logic
    }
}

export default connect(state => ({}), dispatch => {
    return {
        fetchUserInfo(formInfo) {
            dispatch({ 
                type: FETCH_USER_INFO,
                payload: { formInfo }
            });
        }
    }
})(LoginForm);