import React, { useState, useRef } from 'react';
import Calendar from 'react-calendar';
import './Services.css';
import "./MyPage.css";

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
        <>
        <header className="masthead" style={{ height: "60%" }}>
            <hr class="sign-divider-light mt-7"/>
            <h2 class="text-center mt-0 text-white">마이페이지</h2>
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

                    {/* 캘린더 선택 */}
                    <div>
                        <hr class="sign-divider-light mt-7"/>
                        <h2 class="text-center mt-0 text-white">다시 보고 싶은 날짜</h2>
                        <hr class="sign-divider-light"/>

                        <div className="my-5 mcontainercontent d-flex align-items-center justify-content-center ">
                        <Calendar
                            onChange={handleDateChange}
                            value={selectedDate}
                            tileDisabled={tileDisabled}
                            className="react-calendar"
                        />
                        </div>
                    </div>
                    
                    <div className='show'>
                        {/* 일기 다시 보기 */}
                        <div className="show-d">
                            <div className="date">{selectedDate.toDateString()}</div>
                            <div className="showcontent mb-2">일기 제목이 표시됩니다.</div>
                            <div className="showcontent">일기 내용이 표시됩니다.</div>
                            <div className='b3'>
                                <button className='btn btn-secondary btn-xl m-2'>수정</button>
                                <button className='btn btn-primary btn-xl m-2'>저장</button>
                                <button className='btn btn-danger btn-xl m-2'>삭제</button>
                            </div>
                        </div>

                        {/* 성찰 다시 보기 */}
                        <div className="show-d">
                            <div className="date">{selectedDate.toDateString()}</div>
                            <div className="showcontent">성찰 / 편지 내용이 표시됩니다.</div>
                            <div className='b3'>
                                <button className='btn btn-secondary btn-xl m-2'>수정</button>
                                <button className='btn btn-primary btn-xl m-2'>저장</button>
                                <button className='btn btn-danger btn-xl m-2'>삭제</button>
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

        </>
    );
};

export default MyPage;