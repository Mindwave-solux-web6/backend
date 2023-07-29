import React, { useState } from "react";
import { Link } from "react-router-dom";

// const SignIn = () => {
//   const [id, setId] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = () => {
//     console.log('회원가입 정보:');
//     console.log('아이디:', id);
//     console.log('비밀번호:', password);
//   }

import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:8080/api/members/login",
        {
          email: email,
          password: password,
        }
      );
      console.log("회원가입 결과:", result);
    } catch (error) {
      console.error("회원가입 에러:", error);
    }
  };

  return (
    <header className="masthead">
      <section id="signin" className="mt-7">
        <hr className="sign-divider-light" />
        <h2 className="text-center mt-0 text-white">Sign In</h2>
        <hr className="sign-divider-light" />

        <br />

        <div className="row gx-4 gx-lg-5 justify-content-center mb-5 mt-2">
          <div className="col-lg-4">
            <form id="login" style={{ width: "70%", marginLeft: "15%" }}>
              {/* Email input */}
              <div className="form-floating mb-3">
                <input
                  className="form-control "
                  id="email"
                  type="text"
                  placeholder="Enter your Email…"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="id">Email</label>
              </div>

              {/* PASSWORD input */}
              <div className="form-floating mb-4">
                <input
                  className="form-control"
                  id="password"
                  type="password"
                  placeholder="Enter your Password…"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>

              {/* SUBMIT button */}
              <div className="d-grid">
                <button
                  onClick={handleSignUp}
                  className="btn btn-primary btn-xl"
                  id="submitButton"
                  type="submit"
                >
                  Login
                </button>
              </div>

              <div className="text-center text-white mt-5">
                만약 계정이 없다면&nbsp;&nbsp;
                <Link className="text-center text-white" to="/signup">
                  <i
                    className="fa-solid fa-right-to-bracket"
                    style={{ color: "#ffffff" }}
                  ></i>
                  &nbsp;회원가입하기
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </header>
  );
};

export default SignIn;
