import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(233,233,233,0.7);
`;

const NotFound = styled.div``;
const Message = styled.p`
    position: absolute;
    z-index: 1000;
    top: 50%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
    font-size: 48px;
    font-family: 'Noto Sans', 'helvetica', sans-serif;
    font-weight: bold;
    color: #649eff;
`;

export default ({ message }) => {
    return (
        <NotFound>
            <Overlay />
            <Message>
                404 Not Found
            </Message>
        </NotFound>
    )
};