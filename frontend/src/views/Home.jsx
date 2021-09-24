import React from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes.js";

// templates
import Header from "../templates/Header.jsx";
import Main from '../templates/Main.jsx';
import MenuNav from "../templates/MenuNav.jsx";
import Footer from '../templates/Footer.jsx';

// styled components
import ContainerHome from './Home';

export default function Home() {
    return (
        <ContainerHome>
            <BrowserRouter >
                <Header />
                <MenuNav />
                <Main>
                    <Routes />
                    {/* <EmployeeRegistration /> */}
                </Main>
                <Footer />
            </BrowserRouter>

        </ContainerHome>
    )
}