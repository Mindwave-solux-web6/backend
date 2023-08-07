import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedInStatus = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      setLoggedIn(isLoggedIn);
    };

    checkLoggedInStatus();
    window.addEventListener("storage", checkLoggedInStatus);

    return () => {
      window.removeEventListener("storage", checkLoggedInStatus);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8080/api/members/logout"
      );
      if (response.status === 200) {
        alert("성공적으로 로그아웃 되었습니다.");
        localStorage.setItem("isLoggedIn", "false"); // 로그아웃 후 로컬 스토리지 값을 false로 변경
        setLoggedIn(false); // 로그아웃 후 로그인 여부 상태 갱신
        window.location.href = "/";
        // 로그아웃 후 필요한 추가 작업을 여기에 수행하세요
      } else {
        alert("로그아웃에 실패했습니다. 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error("로그아웃 요청 중 오류가 발생했습니다.", error);
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3"
        id="mainNav"
      >
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            마음의 파도
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/qna">
                  진단하기
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  마음일지
                </Link>
              </li>
              {!loggedIn ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">
                      로그인
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      회원가입
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/mypage">
                      마이페이지
                    </Link>
                  </li>

                  <li className="nav-item">
                    <span className="nav-link" onClick={handleLogout}>
                      로그아웃
                    </span>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
