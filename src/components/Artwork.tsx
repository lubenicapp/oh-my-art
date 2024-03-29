import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import styled from "styled-components";

import Breadcrumb from "./artwork/Breadcrumb.tsx";
import Frame from "./artwork/Frame.tsx";
import PurchaseDetails from "./artwork/PurchaseDetails.tsx";
import DeliveryDetails from "./artwork/DeliveryDetails.tsx";
import Description from "./artwork/Description.tsx";
import TechnicalInfo from "./artwork/TechnicalInfo.tsx";
import Carousel from "./artwork/Carousel.tsx";

const Container = styled.div`
    margin-top: 3rem;
`


interface RouteParams {
    [id: string]: any;
}

interface Artwork {
    _id: string;
    title: string;
    category: string;
    styles: string[];
    mediums: string[];
    materials: string[];
    subjects: string[];
    description: string;
    dimensions: {
        depth: number;
        height: number;
        width: number;
    };
    creationYear: number;
    imageUrl: string;
    price: number;
    artistShort: {
        name: string;
        country: string;
        countryCode: string;
        fullname: string;
    };
    fullname: string;
    status: string;
    artistId: string;
    otherArtworkImages: string[];
}

function Artwork() {
    const [artwork, setArtwork] = useState<Artwork | null>(null);
    const {id} = useParams<RouteParams>();

    useEffect(() => {
        axios.get(`https://storage.googleapis.com/ya-misc/interviews/front/examples/${id}.json`)
            .then((res) => setArtwork(res.data))
    }, [id]);

    if (!artwork) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className="columns">
                <div className="column is-2"></div>
                <div className="column">
                    <Breadcrumb items={
                        [
                            "Home",
                            capitalizeWord(artwork.category),
                            artwork.artistShort.fullname,
                            "Artworks",
                            artwork.title
                        ]
                    }>
                    </Breadcrumb>
                </div>
            </div>
            <div className="columns">
                <div className="column is-2"></div>
                <div className="column is-5">
                    <div className="container">
                        <Frame imageUrl={artwork.imageUrl}/>
                    </div>
                    <Container className="container">
                        <Description
                            content={artwork.description}
                        />
                        <TechnicalInfo data={
                            {
                                "subject": artwork.subjects,
                                "style": artwork.styles,
                                "medium": artwork.mediums,
                                "materials": artwork.materials
                            }
                        }></TechnicalInfo>
                    </Container>
                    <Container className="container">
                        <Carousel images={
                            artwork.otherArtworkImages
                        } />
                    </Container>
                </div>
                <div className="column is-3">
                    <PurchaseDetails
                        title={artwork.title}
                        artistName={artwork.artistShort.fullname}
                        country={capitalizeWord(artwork.artistShort.country)}
                        category={capitalizeWord(artwork.category)}
                        creationYear={artwork.creationYear}
                        dimensions={artwork.dimensions}
                        price={artwork.price}
                    />
                    <DeliveryDetails/>
                </div>
                <div className="column is-2"></div>
            </div>
        </>

    );
}

function capitalizeWord(word: string) {
    if (word.length > 0)
        return word[0].toUpperCase() + word.substring(1).toLowerCase()
}

export default Artwork;
