import axios from 'axios';
import { API_ENDPOINT, SANCTUM_CSRF_URL } from '../constants';
import { ParsedUrlQuery } from 'querystring';
import { CLIENT_RENEG_LIMIT } from 'tls';

interface IGetRedirectUrl {
  url?: string;
  message?: string;
}

interface IOauthCallback {
  token?: string;
  message?: string;
}

interface ILogout {
  message: string;
}

const client = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  withCredentials: true,
});

export const socialLogin = (endpoint: string): void => {
  client
    .get(SANCTUM_CSRF_URL)
    .then((res) => {
      client
        .post<IGetRedirectUrl>(endpoint)
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
    })
    .catch((err) => {
      console.log(`failed to request 'sanctum/csrf-cookie'`);
    });
};

// TODO: query の型は認証形態によって変わるので別途定義する必要がある
export const socialLoginCallback = (
  endpoint: string,
  query: ParsedUrlQuery
): void => {
  client
    .get(SANCTUM_CSRF_URL)
    .then((res) => {
      client
        .get<IOauthCallback>(endpoint, {
          params: query,
        })
        .then((res) => {
          window.location.replace('/');
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(`failed to request 'sanctum/csrf-cookie'`);
    });
};

export const logout = (): void => {
  client
    .get<ILogout>('/auth/logout')
    .then((res) => {
      if (res.data.message.indexOf('success') > -1) {
        console.log('logout success');
      } else {
        console.log('failed to logout');
      }
      window.location.replace('/');
    })
    .catch((err) => {
      console.log(err);
    });
};
