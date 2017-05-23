const initialUserState = {
  firstName: '',
  lastName: ''
}

export default (state = initialUserState, action: any) => {
  switch(action.type) {
    case 'UPDATE_USER_INFO':
      return {
        ...state,
        ...action.attrs
      }
    default:
      return state
  }
}
