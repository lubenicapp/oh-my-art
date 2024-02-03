import styled from "styled-components";

const Component = styled.div`
    text-align: center;
    margin-top: 1rem;
`

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

function LinkWithLogo({logo, content}: Props){
    return (
        <Component>
            <i className={logo}></i>
            <Link href="#">{content}</Link>
        </Component>
    )
}

export default LinkWithLogo
