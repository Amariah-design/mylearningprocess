import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";
export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Page" element={<Page />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
