import { manageBlogService } from "./../../services/manageBlogService";
import { GET_CARD, GET_CARD_BY_ID } from "./Type/CardType";

export const getCardInfoAction = () => {
  return async (dispatch) => {
    try {
      const result = await manageBlogService.getInfoCard();
      dispatch({ type: GET_CARD, arrCard: result.data.data.items });
      
    } catch (err) {
      console.log("Err", err);
    }
  };
};
export const getCardInfoByIdAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await manageBlogService.getInfoCardById(id);
      dispatch({ type: GET_CARD_BY_ID, card: result.data.data });
      console.log(result.data);
    } catch (err) {
      console.log("Err", err);
    }
  };
};