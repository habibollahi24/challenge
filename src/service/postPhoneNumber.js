import instance from "../service/httpService";

export function postPhoneNumber(data) {
  return instance.post("/Authorize/login", data);
}
