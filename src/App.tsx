import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home.tsx";
import About from "./pages/About.tsx";
import Layout from "./Layout.tsx";
import Projects from "./pages/Projects.tsx";
import {Helmet} from 'react-helmet';

import CreativeCoding from "./pages/CreativeCoding.tsx";

function App() {

    return (
        <BrowserRouter basename={"/"}>
            <Helmet>
                <title>Tamir Shklaz</title>
                <meta name={"description"}
                      content={"My personal website showcasing my projects, blog and interests."}></meta>
            </Helmet>
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
