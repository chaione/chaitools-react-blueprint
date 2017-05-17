const initialSystemState = {
  systemCounter: 0
}

export default (state: any = initialSystemState, action: any) => {
  switch(action.type) {
    case 'COUNTER_INCREASE':
      return {
        ...state,
        systemCounter: state.systemCounter + 1
      }
    default:
      return state
  }
}

