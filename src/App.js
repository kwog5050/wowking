import React,{useRef, useEffect, useState} from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { reviewList, faqList, infoCheck } from "./data";

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './scss/main.scss';
import "./scss/common.scss";

import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

function App() {
  const [menuBox, setMenuBox] = useState(false);

  const [intro, setIntro] = useState(false);
  const [training, setTraining] = useState(false);
  const [fastTranining, setFastTranining] = useState(false);
  const [week, setWeek] = useState(false);
  const [map, setMap] = useState(false);
  const [review, setReview] = useState(false);
  const [faq, setFaq] = useState(false);
  const [contact, setContact] = useState(false);

  const introScroll = useRef(null);
  const trainingScroll = useRef(null);
  const fastTraniningScroll = useRef(null);
  const weekScroll = useRef(null);
  const mapScroll = useRef(null);
  const reviewScroll = useRef(null);
  const faqScroll = useRef(null);
  const contactScroll = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {

      if (introScroll.current.offsetTop < window.scrollY + 300) {
        setIntro(true);
        setReview(false);
        setTraining(false);
        setFastTranining(false);
        setWeek(false);
        setMap(false);
        setFaq(false);
        setContact(false);
      }
      if (trainingScroll.current.offsetTop < window.scrollY + 200) {
        setIntro(false);
        setReview(false);
        setTraining(true);
        setFastTranining(false);
        setWeek(false);
        setMap(false);
        setFaq(false);
        setContact(false);
      }
      if (fastTraniningScroll.current.offsetTop < window.scrollY + 200) {
        setIntro(false);
        setReview(false);
        setTraining(false);
        setFastTranining(true);
        setWeek(false);
        setMap(false);
        setFaq(false);
        setContact(false);
      }
      if (weekScroll.current.offsetTop < window.scrollY + 200) {
        setIntro(false);
        setReview(false);
        setTraining(false);
        setFastTranining(false);
        setWeek(true);
        setMap(false);
        setFaq(false);
        setContact(false);
      }
      if (mapScroll.current.offsetTop < window.scrollY + 200) {
        setIntro(false);
        setReview(false);
        setTraining(false);
        setFastTranining(false);
        setWeek(false);
        setMap(true);
        setFaq(false);
        setContact(false);
      }
      if (reviewScroll.current.offsetTop < window.scrollY + 200) {
        setIntro(false);
        setReview(true);
        setTraining(false);
        setFastTranining(false);
        setWeek(false);
        setMap(false);
        setFaq(false);
        setContact(false);
      }
      if (faqScroll.current.offsetTop < window.scrollY + 200) {
        setIntro(false);
        setReview(false);
        setTraining(false);
        setFastTranining(false);
        setWeek(false);
        setMap(false);
        setFaq(true);
        setContact(false);
      }
      if (contactScroll.current.offsetTop < window.scrollY + 300) {
        setIntro(false);
        setReview(false);
        setTraining(false);
        setFastTranining(false);
        setWeek(false);
        setMap(false);
        setFaq(false);
        setContact(true);
      }
    })
  }, [])

  const [gender, setGender] = useState(true);
  const [submit, setSubmit] = useState(false);
  const [infoBox, setInfoBox] = useState(false);
  const goMail = () => {
    if (submit == false) {
      alert("개인정보처리방침에 동의해주세요");
    }
  }
  
  return (
    <HashRouter>
      <div className="App">
        <header>
          <a href="#" className="logo"><img src="/img/hd_logo.png" alt="" /></a>

          <div className="wrap">
            <div></div>
            <nav className="menu pc">
              <MenuList
                intro={intro}
                introScroll={introScroll}
                review={review}
                reviewScroll={reviewScroll}
                training={training}
                trainingScroll={trainingScroll}
                fastTranining={fastTranining}
                fastTraniningScroll={fastTraniningScroll}
                week={week} weekScroll={weekScroll}
                map={map} mapScroll={mapScroll}
                faq={faq}
                faqScroll={faqScroll}
                contact={contact}
                contactScroll={contactScroll}
                setMenuBox={setMenuBox}
              ></MenuList>
            </nav>
          </div>

          <nav className="mobile">
            <div className="wrap">
              <div></div>
              <i onClick={()=>{setMenuBox(!menuBox)}} className="fas fa-bars"></i>
            </div>
            <nav className={menuBox == false ? "menuBox" : "menuBox on"}>
              <MenuList
                intro={intro}
                introScroll={introScroll}
                review={review}
                reviewScroll={reviewScroll}
                training={training}
                trainingScroll={trainingScroll}
                fastTranining={fastTranining}
                fastTraniningScroll={fastTraniningScroll}
                week={week} weekScroll={weekScroll}
                map={map} mapScroll={mapScroll}
                faq={faq}
                faqScroll={faqScroll}
                contact={contact}
                contactScroll={contactScroll}
                setMenuBox={setMenuBox}
              ></MenuList>
            </nav>
            <a href="tel:010-3226-8558" className="moCall">
              {/* <i class="fas fa-phone-alt"></i> */}
              
            <img src="/img/moCall.png" alt="" />
            </a>
            <a href="http://pf.kakao.com/_xbuxmxmb" className="moCall kakao">
              <img src="/img/카카오톡.png" alt="" />
            </a>
          </nav>

          <a href="tel:010-3226-8558" className="call">
            <i class="fas fa-phone-alt"></i>
            <div className="content">
              <p>빠른상담문의</p>
              <h2>010-3226-8558</h2>
            </div>
          </a>
        </header>
        <main>
          <Swiper
          loop={true}
          pagination={true}
          className="mySwiper banner"
        >
          <SwiperSlide className="slide">
            <img src="/img/banner.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img src="/img/banner.jpg" alt="" />
          </SwiperSlide>
          </Swiper>

          <div id="0" className="intro" ref={introScroll}>
            <div className="bg"><img src="/img/carBg.jpg" alt="" /></div>
            <div className="content">
              <h2>방문운전연수는 와우킹드라이브</h2>
              <h3>고객 만족도 100%, 고객만족도 1위</h3>
              <p>
                경력 10년 이상의 베테랑 강사와 1:1 강습 <br />
                초보운전, 장롱 면허도 문제 없는 <br />
                편안하고, 체계적인 교육 시스템
              </p>
              <p>
                종합보험 가입으로 걱정없이 안전하게! <br />
                와우킹과 함께 쉽고 빠르게 베스트 드라이버가 되어보세요!
              </p>
              <img className={ intro == true ? "on" : "" } src="/img/car.png" alt="" />
            </div>
          </div>

          <div id="2" className="training"  ref={trainingScroll}>
            <div className="wrap">
              <div className="title">
                <h2>일반연수</h2>
              </div>
              <div className="time">
                <img src="/img/training_table.jpg" alt="" />
                <img src="/img/training_content.jpg" alt="" />
              </div>
              <img className="process" src="/img/training_process.jpg" alt="" />
            </div>
          </div>

          <div id="3" className="fastTranining" ref={fastTraniningScroll}>
            <div className="wrap">
              <div className="title">
                <h2>속성연수</h2>
              </div>

              <img src="/img/fastTranining_process01.png" alt="" />
              <img src="/img/fastTranining_process02.png" alt="" />
              <img src="/img/fastTranining_content.png" alt="" />
            </div>
          </div>

          <div id="4" className="week" ref={weekScroll}>
            <div className="wrap">
              <div className="title">
                <h2>주말반</h2>
              </div>
              <img src="/img/week01.png" alt="" />
              <img src="/img/week02.png" alt="" />
              <img src="/img/week_content.png" alt="" />
            </div>
          </div>

          <div id="5" className="map" ref={mapScroll}>
            <div className="title">
              <h2>연수가능지역</h2>
            </div>
            <div className="wrap">
              <div>
                <img src="/img/map01.png" alt="" />
                <p><span></span>대구광역시</p>
              </div>
              <div>
                <img src="/img/map02.png" alt="" />
                <p><span></span>경상북도</p>
              </div>
            </div>
          </div>

          <div id="1" className="review" ref={reviewScroll}>
            <div className="wrap">
              <div className="title">
                <h2>운전연수후기</h2>
              </div>
              
              <ul>
                  <li>
                    <img src="/img/review01.png" alt="" />
                    <p dangerouslySetInnerHTML={{ __html:reviewList[0] }}></p>
                  </li>
                  <li>
                    <p dangerouslySetInnerHTML={{ __html:reviewList[1] }}></p>
                    <img src="/img/review02.png" alt="" />
                  </li>
                  <li>
                    <img src="/img/review03.png" alt="" />
                    <p dangerouslySetInnerHTML={{ __html:reviewList[2] }}></p>
                  </li>
                </ul>
            </div>
          </div>

          <div id="6" className="faq" ref={faqScroll}>
            <div className="wrap">
              <div className="title">
                <h2>FAQ</h2>
              </div>

              <h3>
                <span></span>
                <p>자주묻는 질문</p>
                <span></span>
              </h3>

              <ul>
                {
                  faqList.map((a, i) => {
                    return (
                      <li key={i}>
                        <div className="q">
                          <img src="/img/Faq_Q.png" alt="" />
                          <p dangerouslySetInnerHTML={{ __html: a.Q }}></p>
                        </div>
                        <div className="a">
                          <p dangerouslySetInnerHTML={{ __html:a.A }}></p>
                          <img src="/img/Faq_A.png" alt="" />
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>

          <div id="7" className="contact">
            <div className="wrap">
              <ul>
                <li><a href="http://pf.kakao.com/_xbuxmxmb" target="_blank"><img src="/img/카톡내용.png" alt="" /></a></li>
                <li><a href="tel:010-3226-8558"><img src="/img/전화내용.png" alt="" /></a></li>
              </ul>

              <form action="/mail/mail.php" method="post" ref={contactScroll}>
                <h2>
                  <img src="/img/온라인.png" alt="" />
                  온라인 상담신청
                  <img src="/img/온라인.png" alt="" />
                </h2>

                <input type="text" placeholder="이름" name="name"/>
                <div className="check">
                  <label>
                    <input type="checkbox" value="남자" name="man" id="man" onClick={()=>{setGender(true)}} checked={ gender == true ? true : false}/>
                    <span>남자</span>
                  </label>
                  <label>
                    <input type="checkbox" value="여자" onClick={()=>{setGender(false)}} name="woman" id="woman" checked={ gender == false ? true : false} />
                    <span>여자</span>
                  </label>
                </div>
                <input type="text" placeholder="연락처" name="tel"/>
                <div className="select">
                  <select name="car">
                    <option value="선택안함">차량 선택해주세요</option>
                    <option value="호시차량">회사차량</option>
                    <option value="개인차량">개인차량</option>
                  </select>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className="select">
                  <select name="time">
                    <option value="선택안함">희망 시간대 선택해주세요</option>
                    <option value="오전">오전</option>
                    <option value="오후">오후</option>
                    <option value="저녁">저녁</option>
                    <option value="주말">주말</option>
                  </select>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <input type="text" placeholder="연수지역(ㅇㅇ시ㅇㅇ구ㅇㅇ동)" name="address"/>
                <input type="text" placeholder="문의내용" name="context"/>
                <div className="checkBox">
                  <label>
                    <input type="checkbox" id="btCheck" onClick={()=>{setSubmit(!submit)}}/>
                    <span>개인정보취급방침 약관에 동의합니다.</span>
                  </label>
                  <div onClick={()=>{setInfoBox(!infoBox)}}>[자세히 보기]</div>
                  <span className={infoBox == true ? "box on" : " box"}>
                    <p dangerouslySetInnerHTML={{ __html: infoCheck }}></p>
                    <div className="bg" onClick={()=>{setInfoBox(false)}}></div>
                  </span>
                </div>
                <input
                  type={submit == true ? "submit" : "button"}
                  value="상담 신청하기"
                  onClick={()=>{goMail()}}
                />
              </form>
            </div>
          </div>
        </main>
        <footer>
          <p>
            상호 : 와우킹드라이브 <br />
            상담문의 : 010-3226-8558 <br />
            이메일 : jgh8988@naver.com
          </p>
          <p style={{ marginTop:  "20px" }}>Copyright&copy; WOWKING</p>
        </footer>
      </div>
    </HashRouter>
  )
}

function MenuList(props) {

  const [subMenu, setSubMenu] = useState(false);
  const clickScroll = (scrollName) => {
    scrollName.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
    props.setMenuBox(false);
    setSubMenu(false);
  }

  return (
    <ul>
      <li onClick={() => { clickScroll(props.introScroll) }} className={props.intro == false ? "" : "on"}>회사소개</li>
      <li onClick={()=>{setSubMenu(!subMenu)}} className={
          props.training == false 
          ? props.fastTranining == false
            ? props.week == false
              ? ""
              : "on"
            : "on"
          : "on"
      }>운전연수
        <ol className={subMenu == true ? "on" : ""}>
          <li onClick={() => { clickScroll(props.trainingScroll) }}>일반연수</li>
          <li onClick={() => { clickScroll(props.fastTraniningScroll) }}>속성연수</li>
          <li onClick={() => { clickScroll(props.weekScroll) }}>주말반</li>
        </ol>
      </li>
      <li onClick={() => { clickScroll(props.mapScroll) }} className={props.map == false ? "" : "on"}>연수지역</li>
      <li onClick={() => { clickScroll(props.reviewScroll) }} className={props.review == false ? "" : "on"}>이용후기</li>
      <li onClick={() => { clickScroll(props.faqScroll) }} className={props.faq == false ? "" : "on"}>FAQ</li>
      <li onClick={() => { clickScroll(props.contactScroll) }} className={props.contact == false ? "" : "on"}>상담신청</li>
    </ul>
  )
}

export default App;
