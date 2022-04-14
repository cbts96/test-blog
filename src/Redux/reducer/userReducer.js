
   
import { TOKEN, USER_LOGIN } from "../../utils/settings/configs";
import { GET_INFO, LOGOUT } from "../actions/Type/UserType";

let user = {};
// if(localStorage.getItem(USER_LOGIN)) {
//     user = JSON.parse(localStorage.getItem(USER_LOGIN));
// }


const stateDefault = {
    userLogin: user,
    // thongTinNguoiDung: {}
     
}



export const userLoginReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case GET_INFO : {
            const {user} = action;
            localStorage.setItem(USER_LOGIN,JSON.stringify(user));
            localStorage.setItem(TOKEN,user.accessToken);
            return {...state,userLogin:user}
        }

        // case SET_THONG_TIN_NGUOI_DUNG :{ 
        //     state.thongTinNguoiDung = action.thongTinNguoiDung;
        //     return {...state};
        // }



        default:
            return { ...state }
    }
}
export const userLogoutnReducer = (state=stateDefault,action) =>{

    switch (action.type) {
      
        case LOGOUT : {
            state.user = null;
            return {...state};
        }

        default: return {...state}
            break;
    }
}
