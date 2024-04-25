import { createSlice } from "@reduxjs/toolkit"


const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setMessage(state, action) {
      return action.payload
    }
  }
})

export const { setMessage } = notificationSlice.actions

export const setNotification = (msg, duration=5) => {
  return async (dispatch) => {
    dispatch(setMessage(msg))
    setTimeout(() => {
      dispatch(setMessage(''))
    }, duration*1000)
  }
}

export default notificationSlice.reducer