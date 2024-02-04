import { Link } from "react-router-dom";

function Home() {

    return (
        <>
            <div>
                <Link to="/artwork/0">Artwork 0</Link>
            </div>
            <div>
                <Link to="/artwork/1">Artwork 1</Link>
            </div>
        </>

    )

}

export default Home
