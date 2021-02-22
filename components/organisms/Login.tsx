import { EmailAndPasswordForm } from "../molecules/EmailAndPasswordForm";
import { NormalButton } from "../atoms/NormalButton";
import { BoldText } from "../atoms/Text";
import { Form } from "react-bootstrap";
import { SocialLoginButton } from "../atoms/SocialLoginButton";
import React from "react";

export const Login: React.FC = () => {
  return (
    <Form className={"form-signin"}>
      <BoldText text={"Please Login or Sign in"} />
      <EmailAndPasswordForm />
      <div className="buttonGroups">
        <NormalButton text={"Login"} />
        <NormalButton text={"Sign in"} variant={"success"} />
      </div>
      <div className="socialButtonGroups" style={{ display: "block" }}>
        <SocialLoginButton type={"google"} />
        <SocialLoginButton type={"github"} />
      </div>
    </Form>
  );
};
