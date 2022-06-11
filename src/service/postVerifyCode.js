import instance from "../service/httpService";

export function postVerifyCode(data) {
  return instance.post("/Authorize/verify", data);
}
