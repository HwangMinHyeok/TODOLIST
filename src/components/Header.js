import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 375px;
    height: 67px;
    background-color: #ABBD35;

    font-family: Inter;
    font-size: 20px;
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;
`;


const Header = () => {
    const logo = "TODOTO\nDOTODO";
    // const logo = 
    // `TODOTO
    // DOTODO`;
    return (
        <Container>{logo}</Container>
    );
};

export default Header;