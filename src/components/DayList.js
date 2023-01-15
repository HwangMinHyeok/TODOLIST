import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { navToDay } from '../actions/actions';

const Container = styled.li`
    width: 100%;
    height: 80px;
    margin: 6px 0;
    background-color: #F9EED6;
    /* #A7BA2B */
    border-radius: 10px;

    text-decoration: none;
    &:visited{
        text-decoration: none;
    }
    &:active{
        text-decoration: none;
    }

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: 700;

    
`;

//                       -3      -2     -1     0      1      2      3
export const dayMap = ["그끄제", "그제", "어제", "오늘", "내일", "모레", "글피"];

const DayList = ({ day }) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const dayDif = day.date.getDate() - state.chosenDate.getDate();
    console.log("DayList.js ", dayMap[dayDif + 3]);
    const handleClickDayList = () => {
        dispatch(navToDay("Day", day.date));
    }

    return (
        <Link to="/day">
            <Container onClick={handleClickDayList}>
                <Title>{dayMap[dayDif + 3]}</Title>
            </Container>
        </Link>
    );
};

export default DayList;