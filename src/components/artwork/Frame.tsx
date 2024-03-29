import styled from "styled-components";
import LinkWithLogo from "./atomic/LinkWithLogo.tsx";

const Figure = styled.figure`
    img {
        max-width: 100%;
        max-height: 60rem;
    }
`;

interface Props {
    imageUrl: string
}

function Frame({imageUrl}: Props) {
    return (
        <Figure className="image">
            <img className="" src={imageUrl}/>
            <div className="columns">
                <div className="column"></div>
                <div className="column"><LinkWithLogo logo="fa-solid fa-eye"> View in a room</LinkWithLogo></div>
                <div className="column"><LinkWithLogo logo="fa-brands fa-unity"> AR view</LinkWithLogo></div>
                <div className="column"></div>
            </div>
        </Figure>
    )
}

export default Frame
