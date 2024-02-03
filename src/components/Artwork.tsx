import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

import Breadcrumb from "./artwork/Breadcrumb.tsx";

interface RouteParams {
    id: string;
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
                <div className="column is-1"></div>
                <div className='column'>
                    <div className="container">
                        <Breadcrumb items={
                            [
                                "Home",
                                capitalizeWord(artwork.category),
                                artwork.artistShort.fullname,
                                "Artworks",
                                artwork.title
                            ]
                        }></Breadcrumb>
                    </div>
                    <div className="container">
                        <div className="columns is-8">

                        </div>
                        <div className="columns is-4">

                        </div>
                    </div>
                </div>
                <div className="column is-1"></div>
            </div>
        </>

    );
}

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase()
}

export default Artwork;
