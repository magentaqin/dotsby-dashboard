const setUserInfoActionType = 'USER/SET_USER'

export const setUserInfo = (userInfo) => ({
  type: setUserInfoActionType,
  payload: userInfo,
})


const initialState = {
  token: '',
  email: ''
}


export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case setUserInfoActionType:
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
      }
    default:
      return state;
  }
}

