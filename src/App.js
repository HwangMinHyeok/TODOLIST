import "./App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import DayPage from "./pages/DayPage";
import DayListPage from "./pages/DayListsPage";
import ModalWindow from "./components/ModalWindow";

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
  height: 781px; /* 67+647+67 */
  background-color: white;
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const updateModalState = (bool) => {
    if (bool) setIsModalOpen(bool);
    else setIsModalOpen(!isModalOpen);
  };
  // useEffect(()=>{
  //   console.log(isModalOpen);
  // },[isModalOpen]);
  return (
    <Container>
      <TodoApp>
        <Header />
        <Routes>
          <Route path="/" element={<DayPage />} />
          <Route path="/day" element={<DayPage />} />
          <Route path="/daylist" element={<DayListPage />} />
        </Routes>
        {isModalOpen && <ModalWindow handleCreateBtn={updateModalState} />}
        <Footer toggleModalWindow={updateModalState} />
      </TodoApp>
    </Container>
  );
}

export default App;
