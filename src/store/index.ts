import { configureStore, Action} from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import rootReducer, { RootState } from './reducers/index'
let logger:any = createLogger();
const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
})
// export type AppDispatch = typeof store.dispatch
// export type AppGetState = typeof store.getState
// export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>

export default store