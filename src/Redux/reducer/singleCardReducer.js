
   
import {  GET_CARD_BY_ID } from "../actions/Type/CardType";

const stateDefault = {
    card: [
        {
        "id": 915,
        "title": "Title of the blog hienkk",
        "content": "this ic content hkkasdfasdf",
        "image": {
          "url": "https://api-placeholder.herokuapp.com/images/fallback/default.png"
        },
        "created_at": "2022-04-12T05:01:39.833Z",
        "updated_at": "2022-04-12T05:01:39.833Z",
        "comments_count": 0
        }
    ]
}



export const singleCardReducer = (state=stateDefault,action) =>{

    switch (action.type) {
      
        case GET_CARD_BY_ID : {
            state.card = action.card;
            return {...state};
        }

        default: return {...state}
            break;
    }
}
