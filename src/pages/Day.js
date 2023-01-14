import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Todo from '../components/Todo';
import { ADD_TODO } from '../actions/actions';

const Container = styled.div`
    width:375px;
    height: 647px;
    background-color: #CCD970;
    /* background-color: #fff; */
    padding: 20px 20px;

    
`;

const Title = styled.div`
    /* background-color: purple; */

    font-size: 30px;
    font-weight: 700;

    display: flex;
    /* justify-content: center; */
    align-items: center;

    & > *{
        flex: 1 0 0;
    }
`;

const TodoList = styled.ul`
    /* list-style: none; */
    width: 100%;
    height: 528px;
    overflow-y: scroll;
    /* background-color: paleturquoise; */
`;

const Day = ({ todayEpoch }) => {
    const state = useSelector(state => state);
    const todolist = state.get(todayEpoch);
    const today = new Date(todayEpoch);

    const getDateIRL = (day) => {
        const year = day.getFullYear() % 100;
        const month = day.getMonth(); // +1??
        const date = day.getDate();
        return `${year}/${month}/${date}`;
    }

    // const dispatch = useDispatch();
    // dispatch(ADD_TODO());



    return (
        <Container>
            <Title>{getDateIRL(today)}</Title>
            <TodoList>
                {/* {today_todolist.map((_, todoIdx) => <Todo key={todoIdx} today={today} todoIdx={todoIdx} />)} */}
                {/* 일단 today로 넘기고 나중에 선택한 날짜(상태) props로 넘기기 */}
                {todolist.map((_, todoIdx) => <Todo key={todoIdx} todayEpoch={todayEpoch} todoIdx={todoIdx} />)}
            </TodoList>
        </Container>
    );
};

export default Day;