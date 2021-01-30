import { combineReducers } from 'redux'

import { featureReducer } from './featureReducer'
import {titleReducer} from './titleReducer'

export default combineReducers({featureReducer,titleReducer}) 
