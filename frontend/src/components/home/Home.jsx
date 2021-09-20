import React from "react";

// templates
import Header from "../templates/Header.jsx";
import Main from '../templates/Main';
import MenuNav from "../templates/MenuNav.jsx";
import Footer from '../templates/Footer';

// styled components
import ContainerHome from './Home'; 

export default function Home() {

    return (
        <ContainerHome>
            <Header />
            <MenuNav />
            <Main />
            <Footer />
        </ContainerHome>
    )
} 