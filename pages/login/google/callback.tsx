import { useRouter } from "next/router";
import { GOOGLE_OAUTH_ENDPOINT } from "../../../constants";
import { socialLoginCallback } from "../../../repository/authApi";
import { useEffect } from "react";

const LoginCallback = () => {
  const router = useRouter();
  useEffect(() => {
    // router が使用可能になったらリダイレクト
    if (router.isReady) {
      socialLoginCallback(`${GOOGLE_OAUTH_ENDPOINT}/callback`, router.query);
    }
  }, [router]);

  return "google からログイン情報を取得中です。。。";
};

export default LoginCallback;
