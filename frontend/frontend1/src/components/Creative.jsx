import React from "react";
import { Link } from "react-router-dom";

const Creative = () => {
  return (
    <>
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1
                className="text-white font-weight-bold"
                style={{ fontSize: "30px" }}
              >
                거친 마음의 파도에 휩쓸리고 있다면
              </h1>
              <hr className="divider" style={{ color: "cornflowerblue" }} />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
                집착, 의존, 불안, 두려움, 분노, 고립, 엄격한 기준으로
                고통받고있나요? <br />
                테스트를 통해 당신이 빠진 심리적 덫의 원인과 해결책을
                알려드릴게요
              </p>
              <a href="#services">
                <button className="btn btn-primary btn-xl">
                  마음의 파도란?
                </button>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="#contact">
                <button className="btn btn-primary btn-xl">
                  덫에 대해 알아보기
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">마음의 파도는요</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-gem fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">진단하기</h3>
                <hr className="sign-desc-dark" />
                <p className="text-muted mb-0">
                  일상 속에서 지친 우리의 마음에
                  <br />
                  숨어있는 덫을 발견하고
                  <br />
                  이를 정확하게 인지해요.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-laptop fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">마음일지</h3>
                <hr className="sign-desc-dark" />
                <p className="text-muted mb-0">
                  마음의 덫에서 빠져나오기 위해
                  <br />내 마음을 솔직하게 적어보아요.
                  <br />꼭 솔직하게요.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-globe fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">마음분석</h3>
                <hr className="sign-desc-dark" />
                <p className="text-muted mb-0">
                  도대체 내 마음은 뭘까요?
                  <br />
                  작성한 일기 바탕으로 분석한
                  <br />
                  당신의 마음 상태를 알려드려요.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-heart fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">성찰하기</h3>
                <hr className="sign-desc-dark" />
                <p className="text-muted mb-0">
                  스스로의 변화가 매우 중요해요.
                  <br />
                  나에게 필요한 힘은 무엇일까요?
                  <br />
                  천천히 생각해보아요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-dark text-white" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="text-center mt-5">
            <h2 className="display-4">마음의 덫으로는</h2>
            <hr className="divider divider-light" />
          </div>
          <br />
          <br />
          <div className="row justify-content-center">
            {/* 버림받음의 덫 */}
            <div className="col-lg-13 col-sm-6 mb-4 mx-auto">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-contact mb-3">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="text-center">
                  <h4 className="text-white">버림받음의 덫</h4>
                  <hr className="sign-desc-light" />
                  <p className="text-muted">
                    사랑하는 사람이 자신을 떠나고,
                    <br />
                    자신은 영원히 정서적으로 고립되어 살게 될 것이라는 느낌
                  </p>
                </div>
              </div>
            </div>

            {/* 불신과 학대의 덫 */}
            <div className="col-lg-13 col-sm-6 mb-4 mx-auto">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-contact mb-3">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="text-center">
                  <h4 className="text-white">불신과 학대의 덫</h4>
                  <hr className="sign-desc-light" />
                  <p className="text-muted">
                    다른 사람들이 어떤 방법으로든
                    <br />
                    자신을 헤치거나 학대할 것이라는 예상
                  </p>
                </div>
              </div>
            </div>

            {/* 취약성의 덫 */}
            <div className="col-lg-13 col-sm-6 mb-4 mx-auto">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-contact mb-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="text-center">
                  <h4 className="text-white">취약성의 덫</h4>
                  <hr className="sign-desc-light" />
                  <p className="text-muted">
                    재앙, 즉 자연재해, 범죄, 질병, 경제적 파산 등이 닥칠 거라는
                    두려움 속에 사는 것
                  </p>
                </div>
              </div>
            </div>

            {/* 의존의 덫 */}
            <div className="col-lg-13 col-sm-6 mb-4 mx-auto">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-contact mb-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="text-center">
                  <h4 className="text-white">의존의 덫</h4>
                  <hr className="sign-desc-light" />
                  <p className="text-muted">
                    자신은 다른 사람의 세시함 도움 없이는
                    <br />
                    일상생활을 제대로 할 수 없다고 느끼는 것
                  </p>
                </div>
              </div>
            </div>

            {/* 정서적 결핍의 덫 */}
            <div className="col-lg-13 col-sm-6 mb-4 mx-auto">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-contact mb-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="text-center">
                  <h4 className="text-white">정서적 결핍의 덫</h4>
                  <hr className="sign-desc-light" />
                  <p className="text-muted">
                    사랑받고자 하는 자신의 욕구가
                    <br />
                    절대로 타인에 의해 적절하게
                    <br />
                    충족되지 못할 것이라는 믿음
                  </p>
                </div>
              </div>
            </div>

            {/* 사회적 소외의 덫 */}
            <div className="col-lg-13 col-sm-6 mb-4 mx-auto">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-contact mb-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="text-center">
                  <h4 className="text-white">사회적 소외의 덫</h4>
                  <hr className="sign-desc-light" />
                  <p className="text-muted">
                    친구와의 집단과의 관계를 포함하여,
                    <br />
                    세상과 격리된 느낌, 남들과 다르다느 느낌
                  </p>
                </div>
              </div>
            </div>

            {/* 결함의 덫 */}
            <div className="col-lg-13 col-sm-6 mb-4 mx-auto">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-contact mb-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="text-center">
                  <h4 className="text-white">결함의 덫</h4>
                  <hr className="sign-desc-light" />
                  <p className="text-muted">
                    내적으로 부족하고 결함이 있다고 느끼며,
                    <br />
                    누군가 자신의 참모습을 알게 되면,
                    <br />
                    자신은 사랑받을 수 없게 될 것이라고 믿음
                  </p>
                </div>
              </div>
            </div>

            {/* 실패의 덫*/}
            <div className="col-lg-13 col-sm-6 mb-4 mx-auto">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-contact mb-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="text-center">
                  <h4 className="text-white">실패의 덫</h4>
                  <hr className="sign-desc-light" />
                  <p className="text-muted">
                    성취해야 할 분야에서
                    <br />
                    자신은 부적합하다는 믿음
                  </p>
                </div>
              </div>
            </div>

            {/* 복종의 덫 */}
            <div className="col-lg-13 col-sm-6 mb-4 mx-auto">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-contact mb-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="text-center">
                  <h4 className="text-white">복종의 덫</h4>
                  <hr className="sign-desc-light" />
                  <p className="text-muted">
                    다른 이들을 기쁘게 하거나
                    <br />
                    그들의 욕구를 만족시키기 위해
                    <br />
                    자신의 욕구와 욕망을 희생
                  </p>
                </div>
              </div>
            </div>

            {/* 엄격한 기준의 덫 */}
            <div className="col-lg-13 col-sm-6 mb-4 mx-auto">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-contact mb-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="text-center">
                  <h4 className="text-white">엄격한 기준의 덫</h4>
                  <hr className="sign-desc-light" />
                  <p className="text-muted">
                    스스로 설정해 놓은 지나치게 극단적으로
                    <br />
                    높은 기준에 맞추기 위해 가혹하게 노력
                  </p>
                </div>
              </div>
            </div>

            {/* 특권 의식의 덫 */}
            <div className="col-lg-13 col-sm-6 mb-4 mx-auto">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-contact mb-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="text-center">
                  <h4 className="text-white">특권 의식의 덫</h4>
                  <hr className="sign-desc-light" />
                  <p className="text-muted">
                    무언갈 얻기 위해 다른 사람들이 고려하는
                    <br />
                    합리성, 실현 가능성, 시간, 인내심,
                    <br />
                    치러야 할 대가 등을 무시
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-13 col-sm-6 mb-4 mx-auto">
            <div className="d-flex flex-column align-items-center">
              <div className="icon-contact mb-3">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div className="text-center">
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <hr className="sign-desc-light2" />
                <br />
                <h3 className="text-white">덫에서 벗어날 준비가 되었나요?</h3>
                <br />
                <br />
                <Link className="btn btn-primary btn-xl" to="/qna">
                  테스트 시작하기
                </Link>
                <br />
                <br />
                <hr className="sign-desc-light2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">
            마음의 파도 &copy; Your Website {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Creative;
