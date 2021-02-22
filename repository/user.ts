import axios from "axios";
import { API_ENDPOINT, GET_USER_ENDPOINT } from "../constants";
import { IUser } from "../entity/User";
import { UserGetResponse } from "../entity/api/user/Response";

export const getUser = (token: string, successHandle: (res: IUser) => void) => {
  const client = axios.create({
    baseURL: API_ENDPOINT,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      Authorization: `Bearer ${token}`,
    },
  });
  client
    .get<UserGetResponse>(GET_USER_ENDPOINT)
    .then((res) => {
      if (res.status === 200) {
        successHandle(res.data.user);
      } else {
        console.log("failed to get user");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
