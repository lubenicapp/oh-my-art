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
`


const Figure = styled.figure`
    margin-left: 3rem;
    img {
        max-width: 12.8rem;
        max-height: 12.8rem;
    }
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
                <div><Figure className="image" key={index}><img src={image} alt={`Slide ${index}`} /></Figure></div>
            ))}
            {cursor < images.length - displayCount && images.length > displayCount && <Arrow onClick={() => (setCursor(Math.min(cursor + 1, images.length - displayCount)))}> › </Arrow>}
        </Panel>
    );
}


export default Carousel
