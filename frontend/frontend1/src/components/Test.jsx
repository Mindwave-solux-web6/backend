import React from "react";
import TestStartPage from "./TestStartPage";
import "./teststyle.css";

const Test = () => {
  const begin = () => {

  };

  return (
    <div className="container">
      <section id="main" className="mx-auto my-5 py-5 px-3">
        <h1>마음의 덫 찾기</h1>
        <div className="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
          <img src="./img/main.png" alt="mainImage" className="img-fluid" />
        </div>
        <p>
          나의 마음 속에는 어떤 마음의 덫이 있을까요?<br />
          아래 시작하기 버튼을 눌러 시작해 주십시오.
        </p>
        <button
          type="button"
          className="btn btn-outline-danger mt-3"
          onClick={begin}
        >
          시작하기
        </button>
      </section>
      <section id="qna">
        <div className="status mx-auto mt-5">
          <div className="statusBar"></div>
        </div>
        <div className="qBox my-5 py-3 mx-auto"></div>
        <div className="answerBox"></div>
      </section>
      <section id="result" className="mx-auto my-5 py-5 px-3">
        <h1>당신의 결과는?!</h1>
        <div className="resultname"></div>
        <div
          id="resultImg"
          className="my-3 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto"
        ></div>
        <div className="resultDesc"></div>
        <button
          type="button"
          className="kakao mt-3 py-2 px-3"
          onClick={() => {}}
        >
          공유하기
        </button>
      </section>
    </div>
  );
};

export default Test;
