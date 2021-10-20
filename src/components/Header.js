import react from "react";
import styled from "@emotion/styled";

const Contenedorheader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({ titulo }) => {
    return (
        <Contenedorheader>
            <TextoHeader>{titulo}</TextoHeader>
        </Contenedorheader>
    );
}

export default Header;