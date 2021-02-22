import React, { useEffect, useState } from "react";
import { IUser } from "../../entity/User";
import { getAuthorizationBearer } from "../../repository/authApi";
import { getUser } from "../../repository/user";
import Link from "next/link";

const User: React.FC<IUser> = (props) => {
  return (
    <div>
      <p>
        id:
        {props.id}
      </p>
      <p>
        name:
        {props.name}
      </p>
      <p>
        email:
        {props.email}
      </p>
    </div>
  );
};

export const UserPage: React.FC = () => {
  const [user, setUser] = useState<IUser>(null);

  useEffect(() => {
    const getUserFromApi = () => {
      if (typeof localStorage !== "undefined") {
        const token = getAuthorizationBearer();
        if (token) {
          getUser(token, setUser);
        }
      }
    };
    getUserFromApi();
  }, []);

  // ログイン情報を保持しているかでユーザ情報を表示するかログインボタンを表示するか決めている
  return (
    <div>
      {user ? <User {...user} /> : <Link href={"/login"}>ログイン</Link>}
    </div>
  );
};
