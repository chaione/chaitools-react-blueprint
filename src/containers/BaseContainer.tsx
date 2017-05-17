import { connect } from 'react-redux'
import {
  updateUserInfo,
  increaseCounter,
} from '../actions'

const mapStateToProps = (state) => {
  return {
    user: state.user,
    system: state.system
  }
}

export default (component) => connect(
  mapStateToProps, {
    onUpdateUserinfo: updateUserInfo,
    onIncreaseCounter: increaseCounter
  }
)(component)
