import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home.tsx";
import About from "./about.tsx";
import Layout from "./Layout.tsx";
import Projects from "./pages/projects.tsx";
import CreativeCoding from "./pages/CreativeCoding.tsx";

function App() {

    return (
        <BrowserRouter basename={"/personal-site/"}>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/creative-coding" element={<CreativeCoding/>}/>
                    <Route path="/about" element={<About/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App
