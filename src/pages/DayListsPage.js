import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import DayList from '../components/DayList';

const Container = styled.div`
    width:375px;
    height: 647px;
    background-color: #CCD970;

    display: flex;
    flex-direction: column;
`;

const DayLists = styled.ul`
    width: 100%;
    height: 528px;
    padding: 20px 20px;
    /* overflow-y: scroll; */
    flex-grow: 1;
`;

const DayListsPage = () => {
    const state = useSelector(state => state);
    const chosenDate = state.chosenDate;
    const days = state.todolistData.filter(dayObj => Math.abs(dayObj.date.getDate() - chosenDate.getDate()) <= 3);
    // console.log("DayListsPage.js days:", days);
    return (
        <Container>
            <DayLists>
                {days.map((day, dayIdx) => <DayList key={dayIdx} day={day} />)}
            </DayLists>
        </Container>
    );
};

export default DayListsPage;