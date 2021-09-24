import styled from "styled-components";

const Aside = styled.aside`
    background: #fff;
    grid-area: menu;
    box-shadow: rgb(122 122 158 / 15%) 4px 2px 6px;
    width: 95%;
`;

const Li = styled.li`
    border-bottom: 1px solid black;
    padding: 10px;

`;

const Ul = styled.ul`
    font-size: 20px;
    margin-top: 30px;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
`;

const modules = {Aside, Li, Ul};
export default modules;