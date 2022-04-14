
   
import {  GET_CARD } from "../actions/Type/CardType";

const stateDefault = {
    arrCard: [
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



export const cardReducer = (state=stateDefault,action) =>{

    switch (action.type) {
      
        case GET_CARD : {
            state.arrCard = action.arrCard;
            return {...state};
        }

        default: return {...state}
            break;
    }
}
