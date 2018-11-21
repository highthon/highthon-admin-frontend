import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './Login';

const Main = ({ userInfo, isLogin }) => {
    const displayMain = isLogin ? (<div>로그인됐따</div>) : (<Login/>)
    return(
        <div>
            <Link to="">홈으로 가기</Link>
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