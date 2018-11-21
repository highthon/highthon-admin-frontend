import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FETCH_USER_INFO } from './actions';

class App extends Component {
  onClickButton() {
    this.props.fetchUserInfo();
  }

  render() {
    return (
      <div className="App">
        <h1>{this.props.userInfo.name}</h1>
        <h1>{this.props.userInfo.school}</h1>
        <button type="button" onClick={this.onClickButton.bind(this)}>Click</button>
        <Link to="/main">메인으로 가기</Link>
      </div>
    );
  }
}

export default connect(state => {
  return { userInfo: state.userInfo };
}, dispatch => {
  return {
    fetchUserInfo() {
      dispatch({
        type: FETCH_USER_INFO,
        data: {
          name: 'seokjin',
          school: 'DSM'
        }
      });
    }
  }
})(App);
