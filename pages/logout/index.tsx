import React from "react";
import { getAuthorizationBearer, logout } from "../../repository/authApi";

const Logout = (): string => {
  logout(getAuthorizationBearer());
  return "ログアウトしています。。。";
};

export default Logout;
