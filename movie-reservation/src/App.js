import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MyPage from "./components/MyPage/PayDetail/MyPage";
import Reservation from "./pages/Reservation/Reservation";
import Main from "./pages/Reservation/Main";
import Home from "./pages/Mainpage/Mainpage";
import Login from "./pages/Login/Login";
import SignIn from "./pages/SignIn/SignIn";
import DetailPage from "./pages/DetailPage/DetailPage";
import ReservationChange from "./pages/Reservation/ReservationChange";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 로그인 상태 확인 (예: 세션 스토리지 확인)
    const userId = sessionStorage.getItem("myId");
    setIsLoggedIn(!!userId);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/reservation" element={<Reservation />}></Route>
          <Route
            path="/reservationChange/:reserveNum"
            element={<ReservationChange />}
          ></Route>
          <Route path="/mypage/*" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/movie/:title" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
