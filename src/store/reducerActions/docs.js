const setDocsListActionType = 'DOCUMENT/SET_DOCS_LIST'

export const setDocsList = (docs) => ({
  type: setDocsListActionType,
  payload: docs,
})


const initialState = {
  docsList: [
    {
      id: 1,
      title: 'Dotsby Docs',
      created_at: '2019-12-13',
      updated_at: '2019-12-13',
      is_private: false,
    }
  ]
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

