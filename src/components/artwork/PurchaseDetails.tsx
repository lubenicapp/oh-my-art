import styled from "styled-components";


import LinkWithLogo from "./LinkWithLogo.tsx";
import {useState} from "react";

const Panel = styled.div`
    .liked {
        color: gold;
    }
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    
    i {
       margin-top: 0.7rem; 
    }
`

const ArtistInfo = styled.div`
    display: flex;
    h2 {
        margin-right: 1.5rem;
    }
    
    h2:first-child{
        color: coral;
    }
    h2:last-child {
        color: lightgrey;
    }
`

const TechnicalDetails = styled.div`
    h3:last-child {
        margin-top: -0.8rem;
    }
`

const Price = styled.div`
    margin-top: 1rem;
    font-size: 2.5rem;
    font-weight: bold;
`

const PurchaseActions = styled.div`
    margin-top: 2rem;
    button {
        height: 2.5rem;
        width: 100%;
        border-radius: 15rem;
    }
    button:first-child {
        margin-bottom: 0.7rem;
        color: antiquewhite;
        background-color: #101010;
    }
    h4 {
        margin-top: 0.7rem;
        text-align: center;
        text-transform: uppercase;
    }
`

const DeliveryDetails = styled.div`

`


interface Props {
    title: string;
    artistName: string;
    country: string;
    dimensions: object;
    category: string;
    creationYear: number;
    price: number;
}

function PurchaseDetails( props: Props){
    const [liked, setLiked] = useState(false)
    const { dimensions } = props;
    return (
        <Panel>
            <Title className="header">
                <h1 className="title is-2"> {props.title} </h1>
                <i className={`fa-regular fa-star title is-4 ${liked ? "liked" : ""}`} onClick={() => setLiked(!liked)}></i>
            </Title>
            <ArtistInfo>
                <h2 className="title is-3">{props.artistName}</h2> <h2 className="title is-3">{props.country}</h2>
            </ArtistInfo>
            <TechnicalDetails>
                <h3 className="title is-5">{props.category}, {props.creationYear}</h3>
                <h3 className="title is-5">{dimensions.width} W × {dimensions.height} H  × {dimensions.depth} D in</h3>
            </TechnicalDetails>
            <Price>
                {props.price.toLocaleString('en-US')} €
            </Price>
            <PurchaseActions>
                <button>Acquire</button>
                <button>Make an offer</button>
                <LinkWithLogo logo="fa-solid fa-hourglass-half" content="pre-reserve for 24 hours"/>
            </PurchaseActions>
        </Panel>
    )
}

export default PurchaseDetails
