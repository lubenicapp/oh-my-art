import styled from "styled-components";

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
        </Figure>
    )
}

export default Frame
