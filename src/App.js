import './App.css';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Day from './pages/Day';
import DayList from './pages/DayList';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: pink;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoApp = styled.div`
  width: 375px;
  height: 781px;   /* 67+647+67 */
  background-color: white;
`;

function App() {
  const todayEpoch = new Date(2023, 1, 14).getTime();
  return (
    <Container>
      <TodoApp>
        <Header />
        <Routes>
          <Route path='/day' element={<Day todayEpoch={todayEpoch} />} />
          <Route path='/daylist' element={<DayList />} />
        </Routes>
        <Footer />
      </TodoApp>
    </Container>
  );
}

export default App;
