import { baseService } from "./baseServices";

export class ManageUserService  extends baseService{

    constructor() {
        super();
    }

    
    login = (info) => {
        return this.post('/api/v2/login',info);
    }
    logout = () => {
        return this.post('/api/v2/logout');
    }
    currentUser = () => {
        return this.post('/api/v2/logout');
    }
    
  
}



export const manageUserService = new ManageUserService();