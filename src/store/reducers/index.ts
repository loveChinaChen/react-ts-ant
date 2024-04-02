import { combineReducers } from '@reduxjs/toolkit'

import todos from './todoSlice'
import visibilityFilter from './visibilityFilterSlice';

const rootReducer = combineReducers({
  todos,
  visibilityFilter
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer