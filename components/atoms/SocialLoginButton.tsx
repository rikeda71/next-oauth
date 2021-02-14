import Button from "react-bootstrap/Button";

interface SocialLoginButtonProps {
    type: 'github' | 'google' | 'yahoo' | 'facebook'; //...
}

export function SocialLoginButton(props: SocialLoginButtonProps) {
    const buttonClassName = `btn-social btn-${props.type}`;
    const spanClassName = `fa fa-${props.type}`;
    const comment = `sign in with ${props.type}`
    const style = {
        marginRight: '2px'
    };
    return (
        <Button className={buttonClassName} style={style}>
            <span className={spanClassName}/>{comment}
        </Button>
    );
}