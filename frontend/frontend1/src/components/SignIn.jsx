import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://127.0.0.1:8080/api/members/login",
        {
          email: email,
          password: password,
        }
      );
      console.log("로그인 성공!:", result);
      if (result.status === 200) {
        alert("어서오세요!");
        localStorage.setItem("isLoggedIn", "true");
        setEmail("");
        setPassword("");
        navigator("/");
        window.location.reload();
      }
    } catch (error) {
      console.error("로그인 실패!:", error);
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
