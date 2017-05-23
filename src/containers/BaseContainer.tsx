import { connect } from 'react-redux'
import {
  updateUserInfo,
  increaseCounter,
} from '../actions'

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    system: state.system
  }
}

export default (component: any) => connect(
  mapStateToProps, {
    onUpdateUserinfo: updateUserInfo,
    onIncreaseCounter: increaseCounter
  }
)(component)
