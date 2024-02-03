import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.tsx";
import Artwork from "./components/Artwork.tsx";
import 'bulma/css/bulma.min.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/artwork/:id" element={<Artwork />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
