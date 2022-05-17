import React from "react";
import {Link} from "react-router-dom"

function Header() {
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const top = window.scrollY;
    
  })

  const scroll = ((y) => {
    window.scrollTo({top:y, behavior: "smooth"})
  })

  return (
    <header>
      <a href="#" className="logo"><img src="/img/hd_logo.png" alt="" /></a>

      <div className="wrap">
        <div></div>
        <nav className="menu pc">
          <ul>
            <li onClick={()=>{scroll(800)}} className="on">이용후기</li>
            <li onClick={()=>{scroll(1800)}}>일반연수</li>
            <li onClick={()=>{scroll(3700)}}>속성연수</li>
            <li onClick={()=>{scroll(6800)}}>주말반</li>
            <li onClick={()=>{scroll(9900)}}>연수지역</li>
            <li onClick={()=>{scroll(10800)}}>FAQ</li>
          </ul>
        </nav>
      </div>

      <nav className="mobile">
        <div className="wrap">
          <div></div>
          <i class="fas fa-bars"></i>
        </div>
      </nav>

      <a href="tel:010-1213-1234" className="call">
        <i class="fas fa-phone-alt"></i>
        <div className="content">
          <p>빠른상담문의</p>
          <h2>010-1213-1234</h2>
        </div>
      </a>
    </header>
  )
}

export default Header;