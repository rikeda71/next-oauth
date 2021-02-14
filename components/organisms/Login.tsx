import {EmailAndPasswordForm} from "../molecules/EmailAndPasswordForm";
import {NormalButton} from "../atoms/NormalButton";
import {BoldText} from "../atoms/Text";
import {Form} from "react-bootstrap";

export function Login() {
    return (
        <Form className={'form-signin'}>
            <BoldText text={'Please Login or Sign in'}/>
            <EmailAndPasswordForm/>
            <div className='buttonGroups'>
                <NormalButton text={'Login'}/>
                <NormalButton text={'Sign in'} variant={'success'}/>
            </div>
            <div className='socialButtonGroups'>
            </div>
        </Form>
    )
}