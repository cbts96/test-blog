import {combineReducers,createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {cardReducer} from "../Redux/reducer/cardReducer"
import {singleCardReducer} from "../Redux/reducer/singleCardReducer"
import { userLoginReducer } from "../Redux/reducer/userReducer";
const rootReducer= combineReducers({
  arrCard: cardReducer,
  card: singleCardReducer,
  user: userLoginReducer
    
})
export const store= createStore(rootReducer,applyMiddleware(thunk));