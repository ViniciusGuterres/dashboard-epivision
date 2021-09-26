import React from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";

// templates
import Header from "./templates/header/Header.jsx";
import Main from './templates/main/Main.jsx';
import MenuNav from "./templates/menuNav/MenuNav.jsx";
import Footer from './templates/footer/Footer.jsx';

// styled components
import ContainerHome from './Home.js';

export default function Home() {
    return (
        <ContainerHome>
            <BrowserRouter >
                <Header />
                <MenuNav />
                <Main>
                    <Routes />
                </Main>
                <Footer />
            </BrowserRouter>
        </ContainerHome>
    )
}