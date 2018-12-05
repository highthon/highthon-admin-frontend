import React from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import Applicants from './Applicants';
import GNB from '../components/GNB';

const Main = ({ userInfo, isLogin }) => {
    const displayMain = isLogin ? (<Applicants/>) : (<Login/>)
    return(
        <div>
            <GNB/>
            {displayMain}
        </div>
    );
};

export default connect(state => {
    return {
        userInfo: state.userInfo,
        isLogin: !!state.userInfo.name
    };
})(Main);