import React, {useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { review, faq } from "./data";

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './scss/main.scss';

import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);

function Main() {

  return (
    <>
      <Swiper
        loop={true}
        pagination={true}
        className="mySwiper banner"
      >
        <SwiperSlide className="slide">
          <img src="/img/banner.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="/img/banner.png" alt="" />
        </SwiperSlide>
      </Swiper>

      <div id="1" className="review">
        <div className="wrap">
          <div className="title">
            <h2>운전연수후기</h2>
          </div>
          
          <ul>
              <li>
                <img src="/img/review01.png" alt="" />
                <p dangerouslySetInnerHTML={{ __html:review[0] }}></p>
              </li>
              <li>
                <p dangerouslySetInnerHTML={{ __html:review[1] }}></p>
                <img src="/img/review02.png" alt="" />
              </li>
              <li>
                <img src="/img/review03.png" alt="" />
                <p dangerouslySetInnerHTML={{ __html:review[2] }}></p>
              </li>
            </ul>
        </div>
      </div>

      <div id="2" className="training">
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

      <div id="3" className="fastTranining">
        <div className="wrap">
          <div className="title">
            <h2>속성연수</h2>
          </div>

          <img src="/img/fastTranining_process01.png" alt="" />
          <img src="/img/fastTranining_process02.png" alt="" />
          <img src="/img/fastTranining_content.png" alt="" />
        </div>
      </div>

      <div id="4" className="week">
        <div className="wrap">
          <div className="title">
            <h2>주말반</h2>
          </div>
          <img src="/img/week01.png" alt="" />
          <img src="/img/week02.png" alt="" />
          <img src="/img/week_content.png" alt="" />
        </div>
      </div>

      <div id="5" className="map">
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

      <div id="6" className="faq">
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
              faq.map((a, i) => {
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

    </>
  )
}

export default Main;