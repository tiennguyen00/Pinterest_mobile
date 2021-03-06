import { requestUrl } from "../config/request-url";
import { requestService } from "./request.service";

const getAllUser = () => requestService.get(requestUrl.getAllUser);
const getAllTags = () => requestService.get(requestUrl.getAllTags);

export const adminService = {
  getAllUser,
  getAllTags,
};
