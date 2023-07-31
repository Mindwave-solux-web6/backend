import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
                <li className="nav-item">
                  <Link className="nav-link" to="/mypage">
                    마이페이지
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg navbar-light fixed-top py-3"
//         id="mainNav">
//         <div className="container px-4 px-lg-5">
//             <Link className="navbar-brand" to="/">
//               마음의 파도
//             </Link>
//           <button
//             className="navbar-toggler navbar-toggler-right"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarResponsive"
//             aria-controls="navbarResponsive"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarResponsive">
//             <ul className="navbar-nav ms-auto my-2 my-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/qna ">
//                   진단하기
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/services">
//                   마음일지
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/signin">
//                   로그인
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/signup">
//                   회원가입
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/mypage">
//                   마이페이지
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;
