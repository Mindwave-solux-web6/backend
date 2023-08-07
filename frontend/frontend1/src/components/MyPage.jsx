import React, {useState,useEffect} from 'react';
import Calendar from 'react-calendar';
import './Services.css';
import "./MyPage.css";
import axios from "axios";

const infoList = [
    {
        name: "버림받음의 덫",
        info: "사랑하는 사람이 자신을 떠나고,\n 자신은 영원히 정서적으로 고립되어 살게 될 것이라는 느낌에 \n사로잡혀있음을 의미합니다."
    },
    {
        name: "불신과 학대의 덫",
        info: "다른 사람들이 어떤 방법으로든 자신을 헤치거나\n 학대할 것이라는 예상에\n 사로잡혀 있음을 의미합니다."
    },
    {
        name: "취약성의 덫",
        info: "재앙, 즉 자연재해, 범죄, 질병, 경제적 파산 등이\n 닥칠 거라는 두려움 속에 사는 것을 의미합니다."
    },
    {
        name: "의존의 덫",
        info: "자신은 다른 사람의 세심함 도움 없이는\n 일상생활을 제대로 할 수 없다는 느낌에\n 사로잡혀 있음을 의미합니다."
    },
    {
        name: "정서적 결핍의 덫",
        info: "사랑받고자 하는 자신의 욕구가\n 절대로 타인에 의해 적절하게 충족되지 못할 것이라는\n 믿음에 사로잡혀 있음을 의미합니다."
    },
    {
        name: "사회적 소외의 덫",
        info: "친구와의 집단과의 관계를 포함하여,\n 세상과 격리된 느낌\n 혹은 남들과 다르다는 느낌에 사로잡혀 있음을 의미합니다."
    },
    {
        name: "결함의 덫",
        info: "내적으로 부족하고 결함이 있다고 느끼며,\n 누군가 자신의 참모습을 알게 되면,\n 자신은 사랑받을 수 없게 될 것이라고 믿는 것을 의미합니다."
    },
    {
        name: "실패의 덫",
        info: `성취해야 할 분야에서\n자신은 부적합하다는 믿음에\n 사로잡혀 있음을 의미합니다. `
    },
    {
        name: "복종의 덫",
        info: "다른 이들을 기쁘게 하거나\n 그들의 욕구를 만족시키기 위해\n 자신의 욕구와 욕망을 희생하는 것에\n 사로잡혀 있음을 의미합니다."
    },
    {
        name: "엄격한 기준의 덫",
        info: "스스로 설정해 놓은\n 지나치게 극단적으로 높은 기준에 맞추기 위해\n 가혹하게 노력하는 것에 사로잡혀 있음을 의미합니다."
    },
    {
        name: "특권 의식의 덫",
        info: "무언갈 얻기 위해\n 다른 사람들이 고려하는 합리성,\n 실현 가능성, 시간, 인내심, 치러야 할 대가 등을\n 무시하는 것을 의미합니다."
    }
];


function TestResult(props){
    const foundInfo = infoList.find((item) => item.name === props.name);
    if(foundInfo){
        return (
            <div className="divide">
                {props.name}<br/>
            <hr className="sign-desc-light" />
                <p>
                    {foundInfo.info.split('\n').map((line,index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                    ))}
                </p>
            </div>
        );
    } 
};

let totalCount = 1;
function MyPage(){
    const fetchTableData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/test');
          const count = response.data.length;
          console.log("테이블 개수를 구하기 위한 첫걸음", count);
          return count;
        } catch (error) {
          console.error('테이블의 총 개수를 가져오는데 실패했습니다:', error);
          return null;
        }
      };
      

    // const fetchTableData = async () => {
    //     try {
    //       const response = await axios.get('http://localhost:8080/api/test');
    //       const count = response.data.length;
    //       console.log("테이블 개수를 구하기 위한 첫걸음",count);
    //       totalCount = count;
    //     } catch (error) {
    //       console.error('테이블의 총 개수를 가져오는데 실패했습니다:', error);
    //     }
    // };
    
    const [trapResults, setTrapResults] = useState([]);
    const fetchTrapResults = async () => {
        const totalCount = await fetchTableData();
        if (totalCount !== null) {
          try {
            const response = await axios.get(
              `http://127.0.0.1:8080/api/test/${totalCount}`
            );
            const results = response.data;
            setTrapResults(results);
            console.log("실행은 했다 오버", results);
          } catch (error) {
            console.error("덫 결과를 가져오는데 실패했습니다:", error);
          }
        } else {
          console.error("totalCount 값이 없습니다");
        }
      };
      
    // const fetchTrapResults = async () => {
    //     fetchTableData();
    //     try {
    //         const response = await axios.get(
    //             `http://127.0.0.1:8080/api/test/{id}`
    //         );
    //         const results = response.data;
    //         setTrapResults(results);
    //         console.log("실행은 했다 오버",results);
    //         } catch (error) {
    //         console.error("덫 결과를 가져오는데 실패했습니다:", error);
    //         }
    // };

    useEffect(() => {
        fetchTrapResults();
    }, []);

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const today = new Date();
    const tileDisabled = ({ activeStartDate, date, view }) => {
        return date > today;
    };

    const [value, setValue] = useState(new Date());
    const [selectedData, setSelectedData] = useState({
        diaryTitle: "",
        diaryContent: "",
        letterContent: "",
    });
    

    const fetchData = async (dateString) => {
        try {
        const diaryResponse = await axios.get(`http://127.0.0.1:8080/api/diary-and-letter/diary?date=${dateString}`);
        const letterResponse = await axios.get(`http://127.0.0.1:8080/api/diary-and-letter/letter?date=${dateString}`);

        setSelectedData({
            diaryTitle: diaryResponse.data.title,
            diaryContent: diaryResponse.data.content,
            letterContent: letterResponse.data.content,
        });
        console.log("전송 완료",dateString,diaryResponse,letterResponse);

        } catch (error) {
        if (error.response.status === 404) { 
            setSelectedData({
                diaryTitle: "일기가 없습니다.",
                diaryContent: "일기가 없습니다.일기를 작성해주세요.",
                letterContent: "편지가 없습니다.편지를 작성해주세요.",
            });
          }
        console.error("전송실패", error);
        }
    };

    const onDateClick = (selectedDate) => {
        setValue(selectedDate);
        const adjustedDate = new Date(selectedDate);
        adjustedDate.setDate(adjustedDate.getDate() + 1);
        const dateString = adjustedDate.toISOString().split("T")[0];
        fetchData(dateString);
    };

    return(
        <>
        <header className="masthead" style={{ height: "60%" }}>
            <hr className="sign-divider-light mt-7"/>
            <h2 className="text-center mt-0 text-white">마이페이지</h2>
            <hr className="sign-divider-light"/>
            <div className="container">
                <div className="mypagecontent">
                    <div className="testresult">
                        <h2>지금 당신이 걸려있는 덫은?</h2>
                        <br/>
                        <div className="testresultcontent">
                            {/* 진단 후 덫에 안걸린 경우와 아직 진단을 받지 않은 경우도 존재*/}
                            {Object.values(trapResults).map((trapResult, index) => (
                                <div key={`trap_${ index+ 1}`} >
                                    <TestResult name={trapResult}/>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 캘린더 선택 */}
                    <div>
                        <hr className="sign-divider-light mt-7"/>
                        <h2 className="text-center mt-0 text-white">다시 보고 싶은 날짜</h2>
                        <hr className="sign-divider-light"/>

                        <div className="my-5 mcontainercontent d-flex align-items-center justify-content-center ">
                        <Calendar
                            onChange={handleDateChange}
                            value={value}
                            tileDisabled={tileDisabled}
                            className="react-calendar"
                            onClickDay={onDateClick}
                        />
                        </div>
                    </div>
                    
                    <div className='show'>
                        {/* 일기 다시 보기 */}
                        <div className="show-d">
                            <div className="date">{selectedDate.toDateString()}</div>
                            <div className="showcontent mb-2">제목: {selectedData.diaryTitle}</div>
                            <div className="showcontent">{selectedData.diaryContent}</div>
                            <div className='b3'>
                                <button className='btn btn-secondary btn-xl2 m-2' id="edit" type='submit'>수정</button>
                                <button className='btn btn-primary btn-xl2 m-2' id="save" type='submit'>저장</button>
                                <button className='btn btn-danger btn-xl2 m-2' id="delete" type='submit'>삭제</button>
                            </div>
                        </div>

                        {/* 성찰 다시 보기 */}
                        <div className="show-d">
                            <div className="date">{selectedDate.toDateString()}</div>
                            <div className="showcontent">{selectedData.letterContent}</div>
                            <div className='b3'>
                                <button className='btn btn-secondary btn-xl2 m-2' id="edit" type='submit'>수정</button>
                                <button className='btn btn-primary btn-xl2 m-2' id="save" type='submit'>저장</button>
                                <button className='btn btn-danger btn-xl2 m-2' id="delete" type='submit'>삭제</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        </>
    );
};

export default MyPage;