import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './Login';
import Applicants from './Applicants';

const Main = ({ userInfo, isLogin }) => {
    const displayMain = isLogin ? (<Applicants/>) : (<Login/>)
    return(
        <div>
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