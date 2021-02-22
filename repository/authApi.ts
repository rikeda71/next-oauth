import axios from "axios";
import { API_ENDPOINT } from "../constants";
import { ParsedUrlQuery } from "querystring";

interface IGetRedirectUrl {
  url?: string;
  message?: string;
}

interface IOauthCallback {
  token?: string;
  message?: string;
}

const client = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
});

export const socialLogin = (endpoint: string) => {
  client
    .get<IGetRedirectUrl>(endpoint)
    .then((res) => {
      if (res.data.url) {
        window.location.replace(res.data.url);
      } else {
        console.log(res.data.message);
      }
    })
    .catch((err) => {
      console.log(`request oauth endpoint error. cause: ${err}`);
    });
};

// TODO: query の型は認証形態によって変わるので別途定義する必要がある
export const socialLoginCallback = (
  endpoint: string,
  query: ParsedUrlQuery
) => {
  client
    .get<IOauthCallback>(endpoint, {
      params: query,
    })
    .then((res) => {
      if (res.data.token) {
        // TODO: よくない保存方法。実際はキャッシュストレージに入れるのがいい?
        localStorage.setItem(`jwt_token`, res.data.token);
        window.location.replace("/");
      } else {
        console.log(res.data.message);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAuthorizationBearer = (): string => {
  return localStorage.getItem("jwt_token");
  // cookie版 うまくいかなかったので、一旦放置
  // const cookiesArray = document.cookie.split(';');
  // for (let c of cookiesArray) {
  //     const keyValue = c.split('=');
  //     if (keyValue[0] == 'jwt_token') {
  //         return keyValue[1];
  //     }
  // }
  // return null;
};
