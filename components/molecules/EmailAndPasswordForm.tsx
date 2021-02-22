import React from "react";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import { FormInput } from "../atoms/FormInput";

export function EmailAndPasswordForm() {
  return (
    <React.Fragment>
      <FormGroup controlId={"email"}>
        <FormLabel>email address</FormLabel>
        <FormInput placeholder={"email address"} type={"email"} />
      </FormGroup>
      <FormGroup controlId={"password"}>
        <FormLabel>password</FormLabel>
        <FormInput placeholder={""} type={"password"} />
      </FormGroup>
    </React.Fragment>
  );
}
