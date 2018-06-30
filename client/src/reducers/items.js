import axios from 'axios'
import { setFlash } from './flash'
import { setHeaders } from './headers';

const ITEMS = 'ITEMS'
const ADD_ITEM = 'ADD_ITEM'
const EDIT_ITEM = 'EDIT_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'

export const getItems = () => {
  return (dispatch) => {
    axios.get('/api/items')
    .then(res => {
      const { headers } = res;
      dispatch(setHeaders(headers));
      dispatch({ type: ITEMS, items: res.data })
    })
  }
}

export const addItem = (item) => {
  return (dispatch) => {
    axios.post('/api/items', { item })
      .then ( res => {
        const { headers } = res
        dispatch(setHeaders(headers))
        dispatch({ type: ADD_ITEM, item: res.data })
        dispatch(setFlash(' You add an item', 'green'))
      })
      .catch( (err) =>  dispatch(setFlash('Failed to add an item.', 'red')) )
  }
}

export const editItem = (item) => {
  return (dispatch) => {
    axios.put('/api/items', { item })
    .then ( res => {
      const { header } = res
      dispatch(setHeaders)
      dispatch({ type: EDIT_ITEM, item: res.data })
    })
  }
}

export default ( state = [], action ) => {
  switch (action.type) {
    case  ITEMS:
      return action.items
    case ADD_ITEM:
      return [action.item, ...state]
    default:
      return state
  }
}
