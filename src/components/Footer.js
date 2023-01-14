import React from 'react';
import styled from 'styled-components';
import PlusIcon from '../icons/PlusIcon';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/actions';
const Container = styled.div`
    width: 375px;
    height: 67px;;
    background-color: #66BB6A;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Button = styled.button`
    width: 54px;
    height: 54px;;
    border-radius: 10px;
`;


const Footer = () => {
    const dispatch = useDispatch();

    // for sort test
    const getRandomTime = () => {
        const randH = Math.floor(Math.random() * 24);
        const randM = Math.floor(Math.random() * 60);
        return `${String(randH).padStart(2, 0)}:${String(randM).padStart(2, 0)}`;
    }
    // state.currentPage가 Day일 때,
    // chosenDate = state.chosenDate
    const handleAddBtn = () => {
        // set date, time, contents
        
        const chosenDate = new Date(2023, 1, 14).getTime();
        const time = getRandomTime();
        const contents = "temp contents";
        // add to state
        dispatch(addTodo(chosenDate, time, contents));
    }

    return (
        <Container>
            <Link to="/daylist">
                <Button>전체</Button>
            </Link>
            <Link to="/day">
                <Button>오늘</Button>
            </Link>
            <Button onClick={handleAddBtn}><PlusIcon /></Button>
        </Container>
    );
};

export default Footer;