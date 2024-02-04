import {useState} from "react";
import styled from "styled-components";

const Panel = styled.div`
    height: 12.8rem;
    display: flex;
    div:last-child {
    margin-left: 3rem;
    }
`

const Arrow = styled.div`
    margin-top: -2rem;
    font-size: 6rem;
    color: rgba(0, 0, 0, 0.5)
`

const Container = styled.div`
    height: 12.8rem;
    width: 12.8rem;
`

const Figure = styled.figure`
    margin-left: 6rem;
`;


interface Props{
    images: string[]
}

function Carousel({images}: Props) {
    const [cursor, setCursor] = useState(0);
    const displayCount = 4

    return (
        <Panel>
            {cursor > 0 && <Arrow onClick={() => (setCursor(cursor - 1))}> ‹ </Arrow>}
            {images.slice(cursor, cursor + displayCount).map((image, index) => (
                <Container key={index}><Figure className="image"><img src={image} alt={`Slide ${index}`} /></Figure></Container>
            ))}
            {cursor < images.length - displayCount && images.length > displayCount && <Arrow onClick={() => (setCursor(Math.min(cursor + 1, images.length - displayCount)))}> › </Arrow>}
        </Panel>
    );
}


export default Carousel
