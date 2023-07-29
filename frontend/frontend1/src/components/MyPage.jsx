import React, { useState, useRef } from 'react';
import Calendar from 'react-calendar';
import './Services.css';

function MyPage(){
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const today = new Date();
    const tileDisabled = ({ activeStartDate, date, view }) => {
        return date > today;
    };
    return(
        <header class="masthead">
            <hr class="sign-divider-light mt-7"/>
            <h2 class="text-center mt-0 text-white text-center">마이페이지</h2>
            <hr class="sign-divider-light"/>
            <div class="container">
            <input class="search"></input>
                <div class="mypagecontent">
                    <div class="testresult">
                        <h2>지금 당신이 걸려있는 덫은?</h2>
                        <br/>
                        <div class="testresultcontent">
                                <div class="divide">
                                    버림받음의 덫<br/>
                                    <hr className="sign-desc-light" />
                                    <p>
                                        버림받음의 덫은<br/>
                                        사랑하는 사람이 자신을 떠나고,<br/>
                                        자신은 영원히 정서적으로 고립되어<br/> 
                                        살게 될 것이라는 느낌에 사로잡혀 있음을<br/> 
                                        의미합니다.
                                    </p>
                                </div>
                                <div class="divide">
                                    버림받음의 덫<br/>
                                    <hr className="sign-desc-light" />
                                    <p>
                                        버림받음의 덫은<br/>
                                        사랑하는 사람이 자신을 떠나고,<br/>
                                        자신은 영원히 정서적으로 고립되어<br/> 
                                        살게 될 것이라는 느낌에 사로잡혀 있음을<br/> 
                                        의미합니다.
                                    </p>
                                </div>
                                <div class="divide">
                                    버림받음의 덫<br/>
                                    <hr className="sign-desc-light" />
                                    <p>
                                        버림받음의 덫은<br/>
                                        사랑하는 사람이 자신을 떠나고,<br/>
                                        자신은 영원히 정서적으로 고립되어<br/> 
                                        살게 될 것이라는 느낌에 사로잡혀 있음을<br/> 
                                        의미합니다.
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="mt-6 diary-calendar">
                        <div className="calendardate">
                            <Calendar
                                onChange={handleDateChange}
                                value={selectedDate}
                                tileDisabled={tileDisabled}
                                className="react-calendar"
                            />
                        </div>
                        <div className="diarys">
                            <div  className="date">{selectedDate.toDateString()}</div>
                            <div className="selecteddate title">
                                이것은 제목이다 그날의 일기에 대한
                            </div>
                            <div className="selecteddate diary">
                                이것은 내용이다 그날의 일기에 대한 ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ<br/>
                                없다 오늘의 일기는 
                            </div>
                            <div className="selecteddate letter">
                                이것은 성찰이다 그날의 일기에 대한
                            </div>
                            <br></br>
                            <button className="btn btn-primary btn-xl" style={{ width: "50%", height: "60px"}}>수정</button>
                            <button className="btn btn-primary btn-xl" style={{ width: "50%", height: "60px" }}>삭제</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MyPage;