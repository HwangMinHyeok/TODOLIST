import { CHECK_BTN, DELETE_TODO, ADD_TODO, ADD_LIST } from '../actions/actions';
import todolistData from './todolistData';

// Reducer
const todolistReducer = (state = todolistData, action) => {
    // block 내 const 재선언 불가
    // what if action.payload doesn't exist??
    // const [date, todoIdx, contents] = action.payload || [undefined, undefined];
    const updatedState = new Map(state);

    const sortByTime = (todo1, todo2) => {
        const [h1, m1] = todo1.time;
        const [h2, m2] = todo2.time;
        return (Number(h1) * 60 + Number(m1)) - (Number(h2) * 60 + Number(m2));
    }

    switch (action.type) {
        case CHECK_BTN:
            var [date, todoIdx] = action.payload;
            updatedState.get(date)[todoIdx].checked = !state.get(date)[todoIdx].checked;
            return updatedState;
        case DELETE_TODO:
            var [date, todoIdx] = action.payload;
            updatedState.get(date).splice(todoIdx, 1);
            return updatedState;
        case ADD_TODO:
            var [date, time, contents] = action.payload;
            updatedState.get(date).push({
                checked: false,
                time,
                contents,
            });
            // 시간 기준 sort
            updatedState.get(date).sort(sortByTime);
            // 애니메이션??
            return updatedState;

        default:
            return state;
    }
}

export default todolistReducer;