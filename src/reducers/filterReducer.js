export const filterBy = (filterBy) => {
  return {
    type: 'SET_FILTER',
    payload: filterBy
  }
}

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return [action.payload]
    default: return state
  }
}

export default filterReducer