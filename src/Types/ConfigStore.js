import {combineReducers,createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {cardReducer} from "../Redux/reducer/cardReducer"
import {singleCardReducer} from "../Redux/reducer/singleCardReducer"
import { userLoginReducer } from "../Redux/reducer/userReducer";
import { searchQueryReducer, sortQueryReducer } from "../Redux/reducer/queryReducer";
const rootReducer= combineReducers({
  arrCard: cardReducer,
  card: singleCardReducer,
  user: userLoginReducer,
  search:searchQueryReducer,
  sort:sortQueryReducer,
    
})
export const store= createStore(rootReducer,applyMiddleware(thunk));