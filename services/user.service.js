import { requestUrl } from "../config/request-url";
import { requestService } from "./request.service";

const getProfile = (data) => requestService.get(requestUrl.getProfile, data);

const post = (data, headers) =>
  requestService.post(requestUrl.post, data, headers);

const getPhotos = (data) => requestService.get(requestUrl.getPhotos, data);

const postWithTicket = (data) =>
  requestService.post(requestUrl.postWithTicket, data);

const postComment = (data) => requestService.post(requestUrl.postComment, data);

const getRecommend = (data) =>
  requestService.get(requestUrl.getRecommend, data);

const updateFavouriteTag = (data) =>
  requestService.post(requestUrl.updateFavouriteTag, data);

const interactImage = (data) =>
  requestService.post(requestUrl.interactImage, data);

const getAllNotifyById = (data) =>
  requestService.get(requestUrl.getAllNotifyById, data);

export const userService = {
  getProfile,
  post, //Post khi user post ảnh mới lên
  getPhotos,
  postWithTicket,
  postComment,
  getRecommend,
  updateFavouriteTag,
  interactImage,
  getAllNotifyById,
};
