import './App.css';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import DayPage from './pages/DayPage';
import DayListPage from './pages/DayListsPage';

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
  return (
    <Container>
      <TodoApp>
        <Header />
        <Routes>
          <Route path='/day' element={<DayPage />} />
          <Route path='/daylist' element={<DayListPage />} />
        </Routes>
        <Footer />
      </TodoApp>
    </Container>
  );
}

export default App;
