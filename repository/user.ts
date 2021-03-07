import axios from "axios";
import { API_ENDPOINT, GET_USER_ENDPOINT } from "../constants";
import { IUser } from "../entity/User";
import { UserGetResponse } from "../entity/api/user/Response";

export const getUser = (successHandle: (res: IUser) => void) => {
  const client = axios.create({
    baseURL: API_ENDPOINT,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    withCredentials: true,
  });
  client
    .get<UserGetResponse>(GET_USER_ENDPOINT)
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data.user);
        successHandle(res.data.user);
      } else {
        console.log("failed to get user");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
