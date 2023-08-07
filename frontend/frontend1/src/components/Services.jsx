import React, { useState } from "react";
import "./Services.css";
import axios from "axios";

const FeelingList = [
  {
    name: "분노",
    info: "무엇이 당신에게 분노를 느끼게 했나요?\n스스로에게 위로와 격려의 말을 건네봅시다.",
  },
  {
    name: "기쁨",
    info: "무엇이 당신을 기쁘게 느끼게 했나요?\n오늘도 수고한 스스로에게 한마디 건네봅시다.",
  },
  {
    name: "불안",
    info: "무엇이 당신을 불안하게 했나요?\n스스로에게 위로와 격려의 말을 건네봅시다.",
  },
  {
    name: "당황",
    info: "무엇이 당신을 당황스럽게 했나요?\n스스로에게 위로와 격려의 말을 건네봅시다.",
  },
  {
    name: "슬픔",
    info: "무엇이 당신을 슬프게 했나요?\n스스로에게 위로와 격려의 말을 건네봅시다.",
  },
  {
    name: "상처",
    info: "무엇이 당신을 상처받게 했나요?\n스스로에게 위로와 격려의 말을 건네봅시다.",
  },
];

function Feelings(props) {
  const foundInfo = FeelingList.find((item) => item.name === props.name);
  return (
    <div className="result">
      {/*감정분석 결과*/}
      당신은 <span className="fw-boldline">{props.name}</span>을(를)
      느끼고있습니다.
      <br />
      <p>
        {foundInfo.info.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}
const Services = (e) => {
  /*달력*/
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const today = new Date();
  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date > today;
  };

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [letterContent, setLetterContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/diary/post",
        {
          writer,
          title,
          content,
        }
      );

      if (response.status === 200) {
        console.log("일기가 성공적으로 작성되었습니다.", response);
      } else {
        console.log("전송에 실패했습니다.");
      }
    } catch (error) {
      alert("전송 중 오류가 발생했습니다.");
    }
  };

  const [buttonVisible, setButtonVisible] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = (props) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setButtonVisible(false);
      setContentVisible(true);
    }, 2000);
  };

  const handleContentClick = () => {
    setButtonVisible(true);
    setContentVisible(false);
  };

  const handleLetterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8080/api/letter", {
        content: letterContent,
      });

      if (response.status === 201) {
        // 상태 값을 200에서 201로 변경
        console.log("편지가 성공적으로 전송되었습니다.", response);
        alert("전송이 완료되었습니다.");
        setTitle(""); // 제목 초기화
        setContent(""); // 내용 초기화
        setLetterContent(""); // 내용 초기화
      } else {
        console.log("전송에 실패했습니다.", response);
      }
    } catch (error) {
      alert("전송 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <header className="masthead">
        {/* 마음일지 */}
        <hr className="sign-divider-light mt-7" />
        <h2 className="text-center mt-0 text-white text-center">마음일지</h2>
        <hr className="sign-divider-light" />
        <div>
          <div className="content d-flex align-items-center justify-content-center ">
            {/* 일기 작성란 */}
            <div className="diary text-center">
              <div className="text-white ">
                <i
                  className="fa-regular fa-calendar m-2 mb-3"
                  style={{ color: "#ffffff", fontSize: "35px" }}
                >
                  &nbsp;
                  {selectedDate.toDateString()}
                </i>
              </div>

              <form onSubmit={handleSubmit}>
                <input
                  name="DiaryTitle"
                  placeholder="일기제목을 작성해주세요"
                  className="input mb-2 "
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                  name="postcontent"
                  placeholder="오늘의 일기를 작성하세요..."
                  className="write mb-3"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />

                <div className="d-grid">
                  {buttonVisible && (
                    <a href="#results">
                      <button
                        type="submit"
                        className="btn btn-primary btn-xl"
                        style={{ width: "100%", height: "60px" }}
                        onClick={handleButtonClick}
                      >
                        {loading ? "당신의 감정은...?" : "진단하기"}
                      </button>
                    </a>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      <header className="masthead">
        <section className="page-section" id="results">
          <div className="result-content">
            {contentVisible && (
              <div>
                <Feelings name="분노" />
                <br />

                <div className="letter">
                  <textarea
                    name="resultcontent"
                    placeholder="스스로에게 하고 싶은 말을 작성해봅시다."
                    value={letterContent}
                    onChange={(e) => setLetterContent(e.target.value)}
                    className="write wb-4"
                  />
                  <br />
                </div>
                <form onSubmit={handleLetterSubmit}>
                  <button
                    type="submit"
                    className="btn btn-primary btn-xl "
                    style={{
                      height: "90px",
                      fontSize: "18px",
                      marginTop: "4%",
                      marginBottom: "6%",
                      marginLeft: "auto" /* 자동으로 왼쪽 여백 조절 */,
                      marginRight: "auto" /* 자동으로 오른쪽 여백 조절 */,
                      width: "25%",
                      display: "block" /* block 속성으로 변경 */,
                    }}
                  >
                    나에게 편지 보내기
                  </button>
                </form>
              </div>
            )}
            ;
          </div>
        </section>
      </header>
    </>
  );
};

export default Services;
