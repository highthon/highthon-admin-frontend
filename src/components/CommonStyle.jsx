import React from 'react';
import styled from 'styled-components';

export const Blind = styled.p`
    overflow: hidden!important;
    position: absolute!important;
    clip: rect(0 0 0 0)!important;
    width: 1px!important;
    height: 1px!important;
    margin: -1px!important;
`;