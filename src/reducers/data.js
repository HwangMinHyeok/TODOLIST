// Date.getTime이 키이면 안 됨

const data = {
    chosenDate: new Date(),
    currentPage: "Day",
    todolistData: [
        {
            date: new Date(2023, 0, 9),
            todolist: [
                { checked: true, time: "01:00", contents: "꿀잠" },
                { checked: false, time: "09:00", contenst: "daily coding 29" },
                { checked: false, time: "12:00", contents: "쭈삼" }
            ]
        },
        {
            date: new Date(2023, 0, 10),
            todolist: [
                { checked: true, time: "01:00", contents: "꿀잠" },
                { checked: true, time: "09:00", contents: "데일리코딩 30" },
                { checked: true, time: "10:00", contents: "Figma" },
                { checked: true, time: "12:00", contents: "핫케익 & 소세지" },
                { checked: false, time: "13:00", contents: "React 구현하기" },
            ]
        },
        {
            date: new Date(2023, 0, 12),
            todolist: [
                { checked: true, time: "21:30", contents: "???" },
                { checked: false, time: "22:22", contents: "??" },
                { checked: true, time: "23:30", contents: "????" },
            ]
        },
        {
            date: new Date(2023, 0, 13),
            todolist: [
                { checked: true, time: "21:30", contents: "???" },
                { checked: false, time: "22:22", contents: "??" },
                { checked: true, time: "23:30", contents: "????" },
            ]
        },
        {
            date: new Date(2023, 0, 14),
            todolist: [
                { checked: true, time: "21:30", contents: "헬스" },
                { checked: false, time: "22:22", contents: "영화" },
                { checked: true, time: "23:30", contents: "TODO list 만들기" },
            ]
        },
        {
            date: new Date(2023, 0, 15),
            todolist: [
                { checked: false, time: "04:00", contents: "취침" },
                { checked: true, time: "09:00", contents: "기상" },
                { checked: true, time: "09:30", contents: "TODO list 만들기" },
                { checked: false, time: "11:00", contents: "떡만둣국" },
                { checked: false, time: "16:00", contents: "헬스" },
                { checked: false, time: "19:00", contents: "드라마 - 어스" },
            ]
        },
        {
            date: new Date(2023, 0, 16),
            todolist: [
                { checked: false, time: "01:00", contents: "취침" },
                { checked: false, time: "08:00", contents: "기상" },
                { checked: false, time: "09:00", contents: "데코 32" },
                { checked: false, time: "10:00", contents: "브라우저" },
                { checked: false, time: "12:00", contents: "점뭐먹" },
                { checked: false, time: "13:30", contents: "반응형 웹" },
                { checked: false, time: "14:30", contents: "반응형 웹 페어" },
                { checked: false, time: "18:30", contents: "스터디" },
                { checked: false, time: "19:30", contents: "저녁" },
                { checked: false, time: "20:00", contents: "운동" },
                { checked: false, time: "21:30", contents: "휴식" },
                { checked: false, time: "22:00", contents: "공부/복습" },
            ]
        },
        {
            date: new Date(2023, 0, 17),
            todolist: [
                { checked: false, time: "01:00", contents: "뒹" },
                { checked: false, time: "08:00", contents: "굴" },
                { checked: false, time: "09:00", contents: "뒝" },
                { checked: false, time: "10:00", contents: "굴" },
                { checked: false, time: "12:00", contents: "뒹" },
                { checked: false, time: "13:30", contents: "굴" },
                { checked: false, time: "14:30", contents: "뒹" },
                { checked: false, time: "18:30", contents: "굴" },
                { checked: false, time: "19:30", contents: "뒹" },
                { checked: false, time: "20:00", contents: "굴" },
                { checked: false, time: "21:30", contents: "뒹" },
                { checked: false, time: "22:00", contents: "굴" },
            ]
        },
        {
            date: new Date(2023, 0, 18),
            todolist: [
                { checked: false, time: "01:00", contents: "헌혈" },
                { checked: false, time: "12:00", contents: "헌혈" },
            ]
        },
        {
            date: new Date(2023, 0, 19),
            todolist: [
                { checked: false, time: "01:00", contents: "취침" },
            ]
        },
        {
            date: new Date(2023, 1, 1),
            todolist: [
                { checked: false, time: "01:00", contents: "취침" },
                { checked: false, time: "19:30", contents: "DK vs GEN" },
            ]
        },
        {
            date: new Date(2023, 1, 2),
            todolist: [
                { checked: false, time: "01:00", contents: "취침" },
                { checked: false, time: "19:30", contents: "헬스" },
            ]
        },
    ],
};

export default data;