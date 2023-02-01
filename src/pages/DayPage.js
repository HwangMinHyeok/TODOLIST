import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Todo from '../components/Todo';
import { dayMap } from '../components/DayList';

const Container = styled.div`
    width:375px;
    height: 647px;
    background-color: #CCD970;
    padding: 20px 20px;

    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: 700;

    display: flex;
    align-items: center;

    & > *{
        flex: 1 0 0;
    }
`;
const TitleChild = styled.div`

`;

const TodoList = styled.ul`
    width: 100%;
    height: 528px;
    overflow-y: scroll;
    flex-grow: 1;
`;

export const isSameDay = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate();
}

export const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

const DayPage = () => {
    const state = useSelector(state => state);
    const todolistData = state.todolistData;
    const todolist = todolistData.find(dayObj => isSameDay(dayObj.date, state.chosenDate)).todolist;

    const dayDif = state.chosenDate.getDate() - new Date().getDate();

    const getDateIRL = (chosenDate) => {
        const year = chosenDate.getFullYear() % 100;
        const month = chosenDate.getMonth() + 1;
        const date = chosenDate.getDate();
        const day = chosenDate.getDay();
        // return `${year}/${month}/${date}`;
        return `${month}/${date} (${dayOfWeek[day]})`;
    }

    return (
        <Container>
            {Math.abs(dayDif) <= 3
                ? <Title>
                    <TitleChild>{dayMap[dayDif + 3]}</TitleChild>
                    <TitleChild>{getDateIRL(state.chosenDate)}</TitleChild>
                </Title>
                : <Title>
                    <TitleChild>{getDateIRL(state.chosenDate)}</TitleChild>
                </Title>}

            <TodoList>
                {todolist.map((_, todoIdx) => <Todo key={todoIdx} todoIdx={todoIdx} />)}
            </TodoList>
        </Container>
    );
};

export default DayPage;