import styled from "styled-components";

const ContainerHome = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 9vh auto 7vh;
    grid-template-areas: "header header"
                         "${props => props.showMenuNav ? "menu main" : "main main"}"
                         "${props => props.showMenuNav ? "menu footer" : "footer footer"}";
`;

export default ContainerHome;