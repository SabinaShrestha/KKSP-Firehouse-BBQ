import axios from 'axios'
import { setFlash } from './flash'
import { setHeaders } from './headers';

const ITEMS = 'ITEMS'
const ADD_ITEM = 'ADD_ITEM'

export const getItems = () => {
  return (dispatch) => {
    axios.get('/api/items')
      .then( ({ headers, data }) => dispatch({ type: ITEMS, courses: data, headers }) )
      .catch( (err) =>  dispatch(setFlash('Failed to retrieve courses.', 'red')) )
  }
}

export const addItem = (item) => {
  return (dispatch) => {
    axios.post('/api/items', { item })
      .then ( res => {
        dispatch({ type: ADD_ITEM, item: res.data })
        const { headers } = res
        dispatch(setHeaders(headers))
        dispatch(setFlash(' You add an item', 'green'))
      })
      .catch( (err) =>  dispatch(setFlash('Failed to add an item.', 'red')) )
  }
}

export const editItem = (item) => {
  return (dispatch) => {
    axios.put('/api/items', { item })
    .then ( res => {
      dispatch({ type: EDIT_ITEM, item: res.data })
      const { header } = res
      dispatch(setHeaders)
    })
  }
}

export default ( state = [], action ) => {
  switch (action.type) {
    case  ITEM:
      return action.items
    case ADD_ITEM:
      return [action.ITEM, ...state]
    default:
      return state
  }
}
