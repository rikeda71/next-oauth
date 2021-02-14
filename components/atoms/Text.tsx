interface BoldTextProps {
    text: string
}

export function BoldText(props: BoldTextProps) {
    const style = {
        fontWeight: 400,
    }
    const className = "h3 mb-3"
    return <p style={style} className={className}>{props.text}</p>
}