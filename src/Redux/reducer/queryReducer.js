import { GET_CARD_BY_ID } from "../actions/Type/CardType";
import {
  GET_QUERY,
  GET_SEARCH_QUERY,
  GET_SORT_QUERY,
} from "../actions/Type/QueryType";

const stateDefault = {
  search: [
    {
      id: 931,
      title: "xxx",
      content: "xxx",
      image: {
        url: "https://api-placeholder.herokuapp.com/images/fallback/default.png",
      },
      created_at: "2022-04-14T06:09:28.878Z",
      updated_at: "2022-04-14T08:10:47.805Z",
      comments_count: 0,
    },
    {
      id: 932,
      title: "xxx",
      content: "xxx",
      image: {
        url: "https://api-placeholder.herokuapp.com/images/fallback/default.png",
      },
      created_at: "2022-04-14T06:09:28.878Z",
      updated_at: "2022-04-14T08:10:47.805Z",
      comments_count: 0,
    },
    {
      id: 933,
      title: "xxx",
      content: "xxx",
      image: {
        url: "https://api-placeholder.herokuapp.com/images/fallback/default.png",
      },
      created_at: "2022-04-14T06:09:28.878Z",
      updated_at: "2022-04-14T08:10:47.805Z",
      comments_count: 0,
    },
  ],
};
const initialState = {
  sort: [
    {
      id: 931,
      title: "xxx",
      content: "xxx",
      image: {
        url: "https://api-placeholder.herokuapp.com/images/fallback/default.png",
      },
      created_at: "2022-04-14T06:09:28.878Z",
      updated_at: "2022-04-14T08:10:47.805Z",
      comments_count: 0,
    },
  ],
};

export const searchQueryReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_SEARCH_QUERY: {
      state.search = action.search;

      return { ...state };
    }

    default:
      return { ...state };
      break;
  }
};
export const sortQueryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SORT_QUERY: {
      state.sort = action.sort;

      return { ...state };
    }

    default:
      return { ...state };
      break;
  }
};
