// action types
export const NAV_TO_LIST = "NAV_TO_LIST";
export const NAV_TO_DAY = "NAV_TO_DAY";
export const CHECK_BTN = "CHECK_BTN";
export const DELETE_TODO = "DELETE_TODO";
export const ADD_TODO = "ADD_TODO";
export const ADD_LIST = "ADD_LIST";

// action controllers
export const navToList = (dayListPage) => {
    return {
        type: NAV_TO_LIST,
        payload: dayListPage,
    };
};

export const navToDay = (dayPage, date) => {
    return {
        type: NAV_TO_DAY,
        payload: [dayPage, date],
    };
};

export const checkBtn = (date, todoIdx) => {
    return {
        type: CHECK_BTN,
        payload: [date, todoIdx],
    };
};

export const deleteBtn = (date, todoIdx) => {
    return {
        type: DELETE_TODO,
        payload: [date, todoIdx],
    };
};

export const addTodo = (date, time, contents) => {
    return {
        type: ADD_TODO,
        payload: [date, time, contents],
    };
};

export const addList = (date) => {
    return {
        type: ADD_LIST,
        payload: date,
    };
};