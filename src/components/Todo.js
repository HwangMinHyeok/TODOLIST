import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import CheckedCheckBoxIcon from '../icons/CheckedCheckBoxIcon';
import DefaultCheckBoxIcon from '../icons/DefaultCheckBoxIcon';
import DeleteIcon from '../icons/DeleteIcon';
// import { CHECK_BTN, DELETE_TODO, ADD_TODO } from '../actions/actions';
import { checkBtn, deleteBtn, addTodo } from '../actions/actions';
const Container = styled.li`
    width: 100%;
    height: 60px;
    background-color: ${props => props.checked ? "#A7BA2B" : "#F9EED6"};
    color: ${props => props.checked ? "rgba(0,0,0,0.4)" : "black"};
    opacity: 0.8;
    padding: 0 10px;
    border-radius: 10px;
    margin: 5px 0;

    display: flex;
    align-items: center;

    user-select: none;

    &:hover{
        background-color: #83C786;
        opacity: 0.6;
        &>*{
            visibility: visible;
        }
    }
    &.deleted{
        display: none;
    }
`;

const Time = styled.div`
    font-size: 18px;
    font-weight: 700;

    flex: 4 0 0;
`;
// 같은 css 겹치기 가능 -> 해보기
const Contents = styled.div`
    font-size: 18px;
    font-weight: 700;

    flex: 6 0 0;
`;

const CheckBox = styled.div`
    flex: 1 0 0;
`;

const DeleteBtn = styled.div`
    font-size: 18px;
    font-weight: 700;
    
    flex: 1 0 0;
    
    visibility: hidden;
`;

const Todo = ({ todayEpoch, todoIdx }) => {
    const todoRef = useRef(null);

    const state = useSelector(state => state);
    const { checked, time, contents } = state.get(todayEpoch)[todoIdx];
    const convertTimeto12HourFormat = (time) => {
        const [hour, min] = time.split(":");
        // 00:00 ~ 11:59 am
        // 12:00 ~ 12:59 pm
        // 13:00 ~ 23:59 pm
        if (Number(hour) < 12) return `오전 ${time}`;
        if (Number(hour) === 12) return `오후 12:${min}`;
        return `오후 ${String(Number(hour) - 12).padStart(2, 0)}:${min}`;
    }

    const dispatch = useDispatch();

    const hadnleClickTodo = () => {
        dispatch(checkBtn(todayEpoch, todoIdx));
    }

    const handleDeleteBtn = () => {
        console.log(todoRef.current.classList);
        todoRef.current.classList.add("deleted");
        console.log(todoRef.current.classList);
        setTimeout(() => {
            dispatch(deleteBtn(todayEpoch, todoIdx));
        }, 3000);
        // addclass해도 리렌더링이 안돼서 안 없어지나??
        // -> 리렌더링할만한 다른 이벤트 만들기
        // : Add tood
    }
    return (
        <Container ref={todoRef} checked={checked} onClick={hadnleClickTodo} >
            <CheckBox>{checked ? <CheckedCheckBoxIcon /> : <DefaultCheckBoxIcon />}</CheckBox>
            <Time>{convertTimeto12HourFormat(time)}</Time>
            <Contents>{contents}</Contents>
            <DeleteBtn onClick={handleDeleteBtn}><DeleteIcon /></DeleteBtn>
        </Container>
    );
};

export default Todo;