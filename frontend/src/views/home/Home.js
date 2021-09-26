import styled from "styled-components";

const ContainerHome = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 50px auto 10vh;
    grid-template-areas: "header header"
                         "menu main"
                         "footer footer";
`;

export default ContainerHome;