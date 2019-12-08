const setDocsListActionType = 'DOCUMENT/SET_DOCS_LIST'

export const setDocsList = (docs) => ({
  type: setDocsListActionType,
  payload: docs,
})


const initialState = {
  docsList: []
}


export const docsReducer = (state = initialState, action) => {
  switch (action.type) {
    case setDocsListActionType:
      return {
        ...state,
        docsList: [...state.docsList, ...action.payload]
      }
    default:
      return state;
  }
}

