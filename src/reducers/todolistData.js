const todolistData = new Map([
    [new Date(2023, 1, 9).getTime(), [
        { checked: 1, time: "01:00", contents: "꿀잠" },
        { checked: 0, time: "09:00", contenst: "daily coding 29" },
        { checked: 0, time: "12:00", contents: "쭈삼" }
    ]],
    [new Date(2023, 1, 10).getTime(), [
        { checked: 1, time: "01:00", contents: "꿀잠" },
        { checked: 1, time: "09:00", contents: "데일리코딩 30" },
        { checked: 1, time: "10:00", contents: "Figma" },
        { checked: 1, time: "12:00", contents: "핫케익 & 소세지" },
        { checked: 0, time: "13:00", contents: "React 구현하기" },
    ]],
    [new Date(2023, 1, 11).getTime(), [
        { checked: true, time: "00:00", contents: "휴가" },
        { checked: true, time: "00:00", contents: "do nothing" }
    ]],
    [new Date(2023, 1, 14).getTime(), [
        { checked: true, time: "21:30", contents: "헬스" },
        { checked: false, time: "22:22", contents: "영화" },
        { checked: true, time: "23:30", contents: "TODO list 만들기" },
    ]],
    [new Date(2023, 1, 15).getTime(), [
        { checked: false, time: "04:00", contents: "취침" },
        { checked: false, time: "09:00", contents: "기상" },
        { checked: false, time: "09:30", contents: "TODO list 만들기" }
    ]],
]);

export default todolistData;

// 다른 상태도 저장
// chosen Date = (default) Date.now();
// current Page = (default) Day;

// 아마 이런 형태

// const data = {
//     todolistData: new Map([
//         [new Date(2023, 1, 9).getTime(), [
//             { checked: 1, time: "01:00", contents: "꿀잠" },
//             { checked: 0, time: "09:00", contenst: "daily coding 29" },
//             { checked: 0, time: "12:00", contents: "쭈삼" }
//         ]],
//         [new Date(2023, 1, 10).getTime(), [
//             { checked: 1, time: "01:00", contents: "꿀잠" },
//             { checked: 1, time: "09:00", contents: "데일리코딩 30" },
//             { checked: 1, time: "10:00", contents: "Figma" },
//             { checked: 1, time: "12:00", contents: "핫케익 & 소세지" },
//             { checked: 0, time: "13:00", contents: "React 구현하기" },
//         ]],
//         [new Date(2023, 1, 11).getTime(), [
//             { checked: true, time: "00:00", contents: "휴가" },
//             { checked: true, time: "00:00", contents: "do nothing" }
//         ]],
//         [new Date(2023, 1, 14).getTime(), [
//             { checked: true, time: "21:30", contents: "헬스" },
//             { checked: false, time: "22:22", contents: "영화" },
//             { checked: true, time: "23:30", contents: "TODO list 만들기" },
//         ]],
//         [new Date(2023, 1, 15).getTime(), [
//             { checked: false, time: "04:00", contents: "취침" },
//             { checked: false, time: "09:00", contents: "기상" },
//             { checked: false, time: "09:30", contents: "TODO list 만들기" }
//         ]],
//     ]),
//     chosenDate: Date.now(),
//     currentPage: "Day",
// };

// 이렇게 바뀌면
// state 건드린 거 다 바꿔줘야 함..
// 근데 그래야 할 듯..