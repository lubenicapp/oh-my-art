import styled from "styled-components";
import RoomViewLink from "./frame_components/FrameLink.tsx";
import FrameLink from "./frame_components/FrameLink.tsx";

const Figure = styled.figure`
    max-width: 100%;

    img {
        max-width: 100%;
        max-height: 60rem;
        height: auto;
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
                <div className="column"><FrameLink logo="fa-solid fa-eye" content="View in a room"/></div>
                <div className="column"><FrameLink logo="fa-brands fa-unity" content="AR view"/></div>
                <div className="column"></div>
            </div>
        </Figure>
    )
}

export default Frame
