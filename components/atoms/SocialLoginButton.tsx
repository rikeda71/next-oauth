import Button from "react-bootstrap/Button";
import { GITHUB_OAUTH_ENDPOINT, GOOGLE_OAUTH_ENDPOINT } from "../../constants";
import { socialLogin } from "../../repository/authApi";

interface SocialLoginButtonProps {
  type: "github" | "google" | "yahoo" | "facebook"; //...
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = (props) => {
  const buttonClassName = `btn-social btn-${props.type}`;
  const spanClassName = `fa fa-${props.type}`;
  const comment = `sign in with ${props.type}`;
  const style = {
    marginRight: "2px",
  };

  const endpoint = (): string => {
    switch (props.type) {
      case "google":
        return GOOGLE_OAUTH_ENDPOINT;
      case "github":
        return GITHUB_OAUTH_ENDPOINT;
      // ...
    }
  };

  const login = () => {
    socialLogin(endpoint());
  };

  return (
    <Button className={buttonClassName} style={style} onClick={login}>
      <span className={spanClassName} />
      {comment}
    </Button>
  );
};
