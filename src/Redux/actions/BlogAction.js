import { manageBlogService } from "../../services/manageBlogService";
import { CREATE_BLOG} from "./Type/BlogType";
import {history} from '../../App'



export const createBlogAction = (info) => {
    

    return async (dispatch) => {
        try {
            
            const result = await manageBlogService.createBlog(info);
            alert('Thêm blog thành công!',result);

            
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}
export const updateBlogAction = (info) => {
    

    return async (dispatch) => {
        try {
            
            const result = await manageBlogService.updateBlog(info);
            alert('Update blog thành công!',result);

            
        }catch (errors) {
            console.log('errors',errors)
        }
    };
}
