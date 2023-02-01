import { NAV_TO_LIST, NAV_TO_DAY, CHECK_BTN, DELETE_TODO, ADD_TODO, ADD_LIST } from '../actions/actions';
import data from './data';
import { isSameDay } from '../pages/DayPage';

// Reducer
const todolistReducer = (state = data, action) => {
    // block 내 const 재선언 불가
    // what if action.payload doesn't exist??
    // const [date, todoIdx, contents] = action.payload || [undefined, undefined];
    const updatedTodolistData = [...state.todolistData];

    const sortByTime = (todo1, todo2) => {
        const [h1, m1] = todo1.time;
        const [h2, m2] = todo2.time;
        return (Number(h1) * 60 + Number(m1)) - (Number(h2) * 60 + Number(m2));
    }

    switch (action.type) {
        case NAV_TO_LIST:
            return {
                ...state,
                chosenDate: new Date(),
                currentPage: action.payload,
            };
        case NAV_TO_DAY:
            var [dayPage, date] = action.payload;
            return {
                ...state,
                chosenDate: date,
                currentPage: dayPage,
            };
        case CHECK_BTN:
            var [date, todoIdx] = action.payload;
            updatedTodolistData.find(dayObj => isSameDay(dayObj.date, date)).todolist[todoIdx].checked = !updatedTodolistData.find(dayObj => isSameDay(dayObj.date, date)).todolist[todoIdx].checked;
            return {
                ...state,
                todolistData: [...updatedTodolistData],
            };
        case DELETE_TODO:
            var [date, todoIdx] = action.payload;
            updatedTodolistData.find(dayObj => isSameDay(dayObj.date, date)).todolist.splice(todoIdx, 1);
            return {
                ...state,
                todolistData: [...updatedTodolistData],
            };
        case ADD_TODO:
            var [date, time, contents] = action.payload;
            updatedTodolistData.find(dayObj => isSameDay(dayObj.date, date)).todolist.push({
                checked: false,
                time,
                contents,
            });
            // 시간 기준 sort
            updatedTodolistData.find(dayObj => isSameDay(dayObj.date, date)).todolist.sort(sortByTime);
            // (Advanced) 애니메이션??
            return {
                ...state,
                todolistData: [...updatedTodolistData],
            };
        case ADD_LIST:
            return {
                ...state,
                todolistData: [
                    ...state.todolistData,
                    {
                        date: action.payload,
                        todolist: [],
                    }
                ],
            };
        default:
            return state;
    }
}

export default todolistReducer;