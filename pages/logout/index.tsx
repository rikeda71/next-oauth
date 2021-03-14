import React from "react";
import { logout } from "../../repository/authApi";

const Logout = (): string => {
  logout();
  return "ログアウトしています。。。";
};

export default Logout;
