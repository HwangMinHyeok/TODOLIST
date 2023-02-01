import styled from 'styled-components';
import PlusIcon from '../icons/PlusIcon';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { navToList, navToDay } from '../actions/actions';

const Container = styled.div`
    width: 375px;
    height: 67px;;
    background-color: #66BB6A;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Button = styled.button`
    width: 54px;
    height: 54px;;
    border-radius: 10px;
`;


const Footer = ({toggleModalWindow}) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const handleListBtn = () => {
        toggleModalWindow(false);
        dispatch(navToList("DayList"));
    }
    const handleTodayBtn = () => {
        toggleModalWindow(false);
        dispatch(navToDay("Day", new Date(Date.now())));
    }

    // // tmp func -> for sort test
    // const getRandomTime = () => {
    //     const randH = Math.floor(Math.random() * 24);
    //     const randM = Math.floor(Math.random() * 60);
    //     return `${String(randH).padStart(2, 0)}:${String(randM).padStart(2, 0)}`;
    // }
    return (
        <Container>
            <Link to="/daylist">
                <Button onClick={handleListBtn}>전체</Button>
            </Link>
            <Link to="/day">
                <Button onClick={handleTodayBtn}>오늘</Button>
            </Link>
            {/* {isModalOpen && <ModalWindow setIsModalOpen={setIsModalOpen} />} */}
            <Button onClick={toggleModalWindow}><PlusIcon /></Button>
        </Container>
    );
};

export default Footer;