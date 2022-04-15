import { manageQueryService } from "../../services/manageQueryService";

import { GET_PAGE_QUERY, GET_QUERY, GET_SEARCH_QUERY, GET_SORT_QUERY } from "./Type/QueryType";

export const getSearchAction = (qKey) => {
  return async (dispatch) => {
    try {
      const result = await manageQueryService.search(qKey);
      dispatch({ type: GET_SEARCH_QUERY, search: result.data.data.items });
      console.log(result.data.data.items);
    } catch (err) {
      console.log("Err", err);
    }
  };
};
export const getPageAction = (page) => {
  return async (dispatch) => {
    try {
      const result = await manageQueryService.paginate(page);
      dispatch({ type: GET_PAGE_QUERY, page: result.data.data.items });
      console.log(result.data.data.items);
    } catch (err) {
      console.log("Err", err);
    }
  };
};
export const getSortAction = () => {
  return async (dispatch) => {
    // try {
    //   const result = await manageQueryService.sortByIdDesc();
    //   dispatch({ type: GET_SORT_QUERY, sort: result.data.data.items });
    //   console.log(result.data.data.items);
    // } catch (err) {
    //   console.log("Err", err);
    // }
  };
};
