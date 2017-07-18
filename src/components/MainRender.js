import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import App from '../App'


const mapStateToProps = (state) => {
  console.log()
  return {
    posts: state.posts,
    comments: state.comments,
    buttons: state.buttons,
    login: state.login,
    setphoto: state.setphoto
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export const MainRender = connect(mapStateToProps, mapDispatchToProps)(App);
