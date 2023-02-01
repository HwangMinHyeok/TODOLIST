import React, { useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addList, addTodo, navToDay } from "../actions/actions";
import { isSameDay } from "../pages/DayPage";

const Container = styled.div`
  width: 375px;
  height: 60px;
  margin: 5px 0;
  padding: 0 10px;
  border-radius: 10px;
  background-color: #f9eed6;

  position: absolute;
  bottom: 100px;

  z-index: 999;

  display: flex;
`;

const LabelBox = styled.label`
  flex: 1 0 0;
  flex-grow: ${(props) => props.fg};
`;

const InputBox = styled.input.attrs((props) => ({
  type: "text" || props.type,
  placeholder: props.placeholder,
}))`
  flex: 1 0 0;
  flex-grow: ${(props) => props.fg};
`;

const SaveBtn = styled.button`
  flex: 1 0 0;
  flex-grow: ${(props) => props.fg};
`;

const ModalWindow = ({ handleCreateBtn }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const contentsRef = useRef(null);
  console.log(state.currentPage);
  if (state.currentPage === "DayList") {
    const handleSaveBtn_DayList = () => {
      const [year, month, date] = dateRef.current.value.split("-");
      const chosenDate = new Date(Number(year), Number(month), Number(date));
      if (
        state.todolistData.filter((dayObj) =>
          isSameDay(dayObj.date, chosenDate)
        ).length === 1
      ) {
        console.log("해당 날짜 todolist가 존재하므로 해당 날짜로 넘어감");
        dispatch(navToDay("Day", chosenDate));
      } else {
        dispatch(addList(chosenDate));
        dispatch(navToDay("Day", chosenDate));
      }
      handleCreateBtn();
    };
    return (
      <Container>
        <LabelBox htmlFor="dateInput">날짜 선택</LabelBox>
        <input type="date" ref={dateRef} id="dateInput" />
        <SaveBtn onClick={handleSaveBtn_DayList}>생성</SaveBtn>
      </Container>
    );
  } else {
    const handleSaveBtn_Day = () => {
      const time = timeRef.current.value;
      const contents = contentsRef.current.value;
      if (time !== "" && contents !== "")
        dispatch(addTodo(state.chosenDate, time, contents));
      handleCreateBtn();
    };
    return (
      <Container>
        <LabelBox htmlFor="timeInput" fg="1">
          시간 선택
        </LabelBox>
        <input type="time" ref={timeRef} id="timeInput" />
        <InputBox ref={contentsRef} placeholder="내용 입력" />
        <SaveBtn onClick={handleSaveBtn_Day}>생성</SaveBtn>
      </Container>
    );
  }
};

export default ModalWindow;
