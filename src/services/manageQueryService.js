import { baseService } from "./baseServices";

export class ManageQueryService extends baseService {
  constructor() {
    super();
  }

  search = (qkey) => {
    return this.get(`/api/v2/blogs?search=${qkey}`);
  };
  sortByIdDesc = (id) => {
    return this.get(`/api/v2/blogs?sort_by=id&sort_direction=asc`);
  };
  paginate = (page) => {
    return this.get(`/api/v2/blogs?page=${page}`);
  };
}

export const manageQueryService = new ManageQueryService();
