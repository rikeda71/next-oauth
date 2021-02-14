// import { css, jsx } from '@emotion/react';
import Button from 'react-bootstrap/Button';

// 以下のような感じで css-in-js を実現できる
// const buttonStyle = css({
//   padding: '12px',
//   borderRadius: '4px',
// });
//
// export function NormalButton() {
//   return <button css={buttonStyle}></button>;
// }
//

interface ButtonProps {
    text: string;
    variant?: string;
    color?: string;
}

export function NormalButton(props: ButtonProps) {
    const variant = !!props.variant ? props.variant : 'primary';
    const color = !!props.color ? props.color : '';
    const style = {
        color: color,
        margin: 10,
        padding: 10,
    }
    return <Button variant={variant} style={style}>{props.text}</Button>;
}
