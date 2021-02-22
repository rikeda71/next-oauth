import { useRouter } from "next/router";
import { GITHUB_OAUTH_ENDPOINT } from "../../../constants";
import { socialLoginCallback } from "../../../repository/authApi";
import { useEffect } from "react";

const GithubLoginCallback = () => {
  const router = useRouter();
  useEffect(() => {
    // router が使用可能になったらリダイレクト
    if (router.isReady) {
      socialLoginCallback(`${GITHUB_OAUTH_ENDPOINT}/callback`, router.query);
    }
  }, [router]);

  return "github からログイン情報を取得中です。。。";
};

export default GithubLoginCallback;
