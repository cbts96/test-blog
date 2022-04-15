import { baseService } from "./baseServices";
// import { API_KEY } from "../utils/settings/config";
export class ManageBlogService extends baseService {
  constructor() {
    super();
  }
  getInfoCard = () => {
    return this.get(`/api/v2/blogs`);
  }
  getInfoCardById = (id) => {
    return this.get(`/api/v2/blogs/${id}`);
  }
  createBlog = (info) => {
    console.log(info)
    return this.post(`/api/v2/blogs`,info);
  }
  updateBlog = (id,info) => {
    
    return this.put(`/api/v2/blogs/${id}`,id,info);
  }
}

export const manageBlogService = new ManageBlogService();