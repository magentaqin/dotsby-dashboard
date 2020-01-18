const setUserInfoActionType = 'USER/SET_USER'
const initUserInfoActionType = 'USER/INIT_USER'

export const setUserInfo = (userInfo) => ({
  type: setUserInfoActionType,
  payload: userInfo,
})

export const initUserInfo = () => ({
  type: initUserInfoActionType
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
    case initUserInfoActionType:
      localStorage.clear('token');
      return initialState;
    default:
      return state;
  }
}

