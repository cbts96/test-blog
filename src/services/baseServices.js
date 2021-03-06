import Axios from "axios"
import {DOMAIN,TOKEN} from '../utils/settings/configs'

export class baseService {
    //put json về phía backend
    put = (url,model) => {
        return  Axios({
            url:`${DOMAIN}${url}`,
            method:'PUT',
            data:model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //JWT
        }) 
    }

    post = (url,model) => {
        const formData = new FormData();
        formData.append('blog[title]','blog')
        formData.append('blog[content]','blog')
        return Axios({
            url:`${DOMAIN}${url}`,
            method:'POST',
            data:formData,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN), "Content-Type": "multipart/form-data",} //JWT
        }) 
    }


    get = (url) => {
        return Axios({
            url:`${DOMAIN}${url}`,
            method:'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }

    delete = (url) => {
        return Axios({
            url:`${DOMAIN}${url}`,
            method:'DELETE',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
}