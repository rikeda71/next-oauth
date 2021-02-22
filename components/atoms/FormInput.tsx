import FormControl from "react-bootstrap/FormControl";

interface FormProps {
  placeholder: string;
  type: string;
}

export function FormInput(props: FormProps) {
  return <FormControl placeholder={props.placeholder} type={props.type} />;
}
