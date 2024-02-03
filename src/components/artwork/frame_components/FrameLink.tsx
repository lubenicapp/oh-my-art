import styled from "styled-components";

const Link = styled.a`
    margin-left: 0.8rem;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
`

interface Props {
    logo: string,
    content: string
}

function FrameLink({logo, content}: Props){
    return (
        <>
            <i className={logo}></i>
            <Link href="#">{content}</Link>
        </>

    )
}

export default FrameLink
