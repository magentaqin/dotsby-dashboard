const setUserInfoActionType = 'USER/SET_USER'

export const setUserInfo = (userInfo) => ({
  type: setUserInfoActionType,
  payload: userInfo,
})


const initialState = {
  token: '',
  email: '',
  hasAuth: false,
}


export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case setUserInfoActionType:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
        hasAuth: true,
      }
    default:
      return state;
  }
}

