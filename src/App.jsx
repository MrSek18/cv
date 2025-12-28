
import './App.css'
import { useEffect } from 'react'
import { useState } from "react";
import mysql_logo from "./assets/mysql_logo.png";
import card1Img1 from "./assets/ongProyectImg.png";
import card2Img1 from "./assets/requestProyectImg.png";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() =>{
    document.body.style.backgroundColor = '#04101B';
    const timer = setTimeout(() =>{
      setShow(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="min-h-screen bg-[#04101B] text-white mx-auto max-w-3xl">

        <div className={`h-[30px] w-full bg-[#410001] transition-opacity duration-1000 ${
          show ? "opacity-100": "opacity-0"}`}
          ></div>
          
        <div className='min-h-screen relative flex flex-col items-center'>
          <div
            className={`absolute left-0 right-0 top-0 border-l-4 border-r-4 border-[#FF0543] transition-all duration-5000 ${
              show ? "h-full" : "h-0"
            }`}
          >
          </div>
          {/* Header */}
            <div className="flex flex-wrap h-auto min-h-[340px] w-[95%] items-start [container-type:inline-size] pt-10 ">
              {/* Primer bloque */}
              <div className="w-full sm:w-[50%] flex flex-col justify-center space-y-3  sm:items-start items-center  ">
                <div className="h-[250px] space-y-3 flex flex-col justify-center ">

                  <h1
                    className="text-7xl md:text-7xl text-white tracking-[0.25em] text-center  @[470px]:text-left  "
                    style={{ fontFamily: "'SDGlitchDemo', sans-serif" }}
                  >
                    KEVIN BG
                  </h1>
                  <h2
                    className="text-lg md:text-lg tracking-wide text-white w-auto text-center @[470px]:text-left "
                    style={{ fontFamily: '"Roboto Condensed", sans-serif', fontWeight: 300 }}
                  >
                    Software Engineer with IA student
                  </h2>
                  <p
                    className="text-sm tracking-wide text-white text-center @[470px]:text-left  "
                    style={{ fontFamily: '"Roboto Condensed", sans-serif', fontWeight: 100 }}
                  >
                    I like to program
                  </p>
                </div>
              </div>

              {/* Segundo bloque */}
              <div className="w-full sm:w-[50%] h-full flex justify-center sm:justify-end items-center ">
                <img
                  src={"/img/hacking_guy_logo.png"}
                  alt="hacking guy logo"
                  className="w-60 h-60 sm:w-80 sm:h-80 object-cover rounded @[470px]:mx-0 mx-auto "
                />
              </div>
            </div>


          {/* Projects */}
          <div className="flex flex-col h-auto  w-full z-0 mt-20 border-1">
            <h1
              className="md:pl-5 text-2xl tracking-[0.25em]  text-[#fff] text-center md:text-left " 
              style={{ fontFamily: '"Roboto Condensed", sans-serif', fontWeight: 400 }}
            >
              Projects
            </h1>

            <div className="flex h-auto sm:h-75 flex-col sm:flex-row gap-6 w-full justify-center items-center  [container-type:inline-size] mt-5" >
              {/* Tarjeta 1 */}
              <div className="w-70 h-full @[380px]:w-[360px] @[380px]:p-7 flex flex-col @[380px]:flex-row  items-center relative z-0 gap-x-4  gap-y-4 pt-15 pb-10 ">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 350 240"
                  className="absolute top-0 left-0 z-0"
                  preserveAspectRatio="none"
                >
                  {/* líneas y polígonos */}
                  <line x1="1" y1="19" x2="150" y2="19" stroke="#fff" strokeWidth=".5" />
                  <line x1="1" y1="19" x2="1" y2="239" stroke="#fff" strokeWidth=".5" />
                  <line x1="1" y1="239" x2="349" y2="239" stroke="#fff" strokeWidth=".5" />
                  <line x1="250" y1="19" x2="349" y2="19" stroke="#fff" strokeWidth=".5" />
                  <line x1="250.5" y1="18.8" x2="234" y2="32" stroke="#fff" strokeWidth=".5" />
                  <polyline
                    points="349,19 349,30 329,50 329,150 349,160 349,239"
                    stroke="#fff"
                    strokeWidth=".5"
                    fill="none"
                  />
                  <polyline
                    points="170,23 170,15 180,15 180,23 170,23"
                    stroke="#fff"
                    strokeWidth=".5"
                    fill="none"
                  />
                  <polyline
                    points="190,23 190,15 200,15 200,23 190,23"
                    stroke="#fff"
                    strokeWidth=".5"
                    fill="#04D9D9"
                  />
                  <polyline
                    points="210,23 210,15 220,15 220,23 210,23"
                    stroke="#fff"
                    strokeWidth=".5"
                    fill="none"
                  />
                </svg>

                <div className="h-auto w-[80%] sm:w-[60%] flex flex-col items-center @[380px]:items-start  justify-center space-y-3 text-left z-10 ">
                  <h1
                    className="text-2xl tracking-[0.15em] text-[#02E8E8]"
                    style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
                  >
                    ONG
                  </h1>
                  <p
                    className="text-base tracking-wider text-center @[380px]: text-left"
                    style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
                  >
                    Pagina institucional con sistema de donacion integrado con mercado pago
                  </p>
                  <div className="flex justify-center gap-1">
                    <img src="/img/laravel_logo.png" alt="laravel" className="h-7.5 w-7.5" />
                    <img src={mysql_logo} alt="postgresql" className="h-7.5 w-7.5 " />
                    <img src="/img/react_logo.png" alt="react" className="h-7.5 w-7.5" />
                  </div>
                </div>

                <div className="h-30 w-[70%] relative flex items-center justify-center z-10 ">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage: `url(${card1Img1})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      clipPath:
                        'polygon(15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%, 0% 15px)',
                    }}
                  ></div>
                </div>
              </div>

              {/* Tarjeta 2 */}
              <div className="w-70 h-full @[380px]:w-[360px] @[380px]:p-7 flex flex-col @[380px]:flex-row  items-center relative z-0 gap-x-4 gap-y-4 pt-15 pb-10 ">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 350 240"
                  className="absolute top-0 left-0 z-0"
                  preserveAspectRatio="none"
                >
                  {/* líneas y polígonos */}
                  <line x1="1" y1="19" x2="150" y2="19" stroke="#fff" strokeWidth=".5" />
                  <line x1="1" y1="19" x2="1" y2="239" stroke="#fff" strokeWidth=".5" />
                  <line x1="1" y1="239" x2="349" y2="239" stroke="#fff" strokeWidth=".5" />
                  <line x1="250" y1="19" x2="349" y2="19" stroke="#fff" strokeWidth=".5" />
                  <line x1="250.5" y1="18.8" x2="234" y2="32" stroke="#fff" strokeWidth=".5" />
                  <polyline
                    points="349,19 349,30 329,50 329,150 349,160 349,239"
                    stroke="#fff"
                    strokeWidth=".5"
                    fill="none"
                  />
                  <polyline
                    points="170,23 170,15 180,15 180,23 170,23"
                    stroke="#fff"
                    strokeWidth=".5"
                    fill="none"
                  />
                  <polyline
                    points="190,23 190,15 200,15 200,23 190,23"
                    stroke="#fff"
                    strokeWidth=".5"
                    fill="#04D9D9"
                  />
                  <polyline
                    points="210,23 210,15 220,15 220,23 210,23"
                    stroke="#fff"
                    strokeWidth=".5"
                    fill="none"
                  />
                </svg>

                <div className="h-auto w-[80%] sm:w-[60%] flex flex-col items-center @[380px]:items-start  justify-center space-y-3 text-left z-10 ">
                  <h1
                    className="text-2xl tracking-[0.15em] text-[#02E8E8]"
                    style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
                  >
                    MVC Panel
                  </h1>
                  <p
                    className="text-base tracking-wider text-center @[380px]: text-left"
                    style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
                  >
                    Panel de administración para proyectos, clientes y empleados.
                  </p>
                  <div className="flex justify-center gap-1">
                    <img src="/img/laravel_logo.png" alt="laravel" className="h-7.5 w-7.5" />
                    <img src={mysql_logo} alt="postgresql" className="h-7.5 w-7.5 " />
                    <img src="/img/react_logo.png" alt="react" className="h-7.5 w-7.5" />
                  </div>
                </div>

                <div className="h-30 w-[70%] relative flex items-center justify-center z-10 ">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage: `url(${card2Img1})`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      clipPath:
                        'polygon(15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%, 0% 15px)',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies / Tools  */}
          <div className="flex flex-col h-auto w-full z-0 mt-20 border-1">
            <h1 className="md:pl-5 text-2xl tracking-[0.25em] text-[#fff] text-center md:text-left"
                style={{ fontFamily: '"Roboto Condensed", sans-serif', fontWeight: 400}}  >Technologies / Tools 
            </h1>
            <div className='flex flex-wrap gap-6 w-full max-w-3xl justify-around items-center mt-6'>
              <div className='h-auto w-full max-w-120 sm:w-120 flex items-center justify-center relative  pl-10 pr-10 pb-12'>
              
                <svg width="100%" height="100%" viewBox="0 0 400 240" className="absolute top-0 left-0" preserveAspectRatio="none">
                  <line x1="40" y1="1" x2="350" y2="1" stroke="#fff" stroke-width=".5" />
                  <line x1="40" y1="1" x2="20" y2="30" stroke="#fff" stroke-width=".5" />
                  <line x1="20" y1="30" x2="20" y2="219" stroke="#fff" stroke-width=".5" />

                  <polyline // squares inside the card
                      points="15,80 25,80 25,93 15,93 15,80" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="#04D9D9" 
                  />

                  <polyline // squares inside the card
                      points="15,219 25,219 25,232 15,232 15,219" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="#04D9D9" 
                  />
                  
                  <polyline // squares inside the card
                      points="372.5,1 372.5,12 384,12 384,1 372.5,1" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />

                  <polyline // squares inside the card
                      points="372.5,20 372.5,32 384,32 384,20 372.5,20" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <polyline // squares inside the card
                      points="372.5,39 372.5,51 384,51 384,39 372.5,39" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <polyline // rectangle inside the card
                      points="375,99 375,171 381.5,171 381.5,99 375,99" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <line // vertical line inside the rectangle
                  x1="378.25" y1="151" x2="378.25" y2="55" stroke="#fff" stroke-width=".5" />
                  
                  <polyline // bottom right line
                      points="384,191 372.5,191 352,219 352,232" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />

                  <line // vertical line inside the rectangle
                  x1="180" y1="228.75" x2="305" y2="228.75" stroke="#fff" stroke-width=".5" />
                  <polyline // bottom right line
                      points="320,232 320,225.5 260,225.5 260,232 320,232" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />

                  <polyline // bottom right line
                      points="170,232 170,219 160,219 160,232 170,232" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />

                  <polyline // bottom right line
                      points="150,232 150,219 140,219 140,232 150,232" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />

                  <polyline // bottom right line
                      points="130,232 130,219 120,219 120,232 130,232" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <line // parallel line
                  x1="40" y1="232" x2="47.5" y2="219" stroke="#fff" stroke-width=".5" />
                  <line // parallel line
                  x1="47.5" y1="232" x2="55" y2="219" stroke="#fff" stroke-width=".5" />
                  <line // parallel line
                  x1="55" y1="232" x2="62.5" y2="219" stroke="#fff" stroke-width=".5" />
                  <line // parallel line
                  x1="62.5" y1="232" x2="69" y2="219" stroke="#fff" stroke-width=".5" />
                  <line // parallel line
                  x1="69" y1="232" x2="76.5" y2="219" stroke="#fff" stroke-width=".5" />
                  <line // parallel line
                  x1="76.5" y1="232" x2="84" y2="219" stroke="#fff" stroke-width=".5" />

                  
                </svg>
                <div className='h-auto w-full flex flex-col items-center text-left [container-type:inline-size] mb-5  '>
                  <h1 className="text-md tracking-[0.15em] mb-5 mt-5 text-center sm:text-left  w-full"
                  style={{ fontFamily: '"Roboto Condensed", sans-serif' }} >FRAMEWORKS</h1>
                  
                  <div
                    className="
                      flex
                      flex-wrap
                      justify-center
                      gap-3
                      max-w-[390px]
                      sm:max-w-[560px]
                      
                    "
                  >
                    <div className="h-[170px] w-[120px] flex flex-col items-center relative ">
                      <h1
                        className="text-sm tracking-[0.10em] mt-1 mb-7"
                        style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
                      >
                        Backend
                      </h1>
                      <img
                        src="/img/laravel_logo.png"
                        alt="laravel logo"
                        className="w-[57.684px] h-[60px] object-cover rounded"
                      />
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 120 170"
                        className="absolute top-0 left-0"
                        preserveAspectRatio="none"
                      >
                        <line x1="0" y1="0" x2="0" y2="170" stroke="#FF2D20" strokeWidth="6" />
                        <polyline
                          points="2,1 115,1 115,140 105,140 105,169 2,169"
                          stroke="rgba(255, 45, 32, .28)"
                          strokeWidth="1.7"
                          fill="none"
                        />
                        <polyline
                          points="115.9,0.4 120,0.4 120,144 110,144 110,169.7 105.9,169.7"
                          stroke="rgba(255, 45, 32, .28)"
                          strokeWidth="0.8"
                          fill="none"
                        />
                      </svg>
                    </div>

                    <div className="h-[170px] w-[120px] flex flex-col items-center relative ">
                      <h1
                        className="text-sm tracking-[0.10em] mt-1 mb-7"
                        style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
                      >
                        Frontend
                      </h1>
                      <img
                        src="/img/react_logo.png"
                        alt="react logo"
                        className="w-[60px] h-[53.4375px] object-cover rounded"
                      />
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 120 170"
                        className="absolute top-0 left-0"
                        preserveAspectRatio="none"
                      >
                        <line x1="0" y1="0" x2="0" y2="170" stroke="#30A2FF" strokeWidth="6" />
                        <polyline
                          points="2,1 115,1 115,140 105,140 105,169 2,169"
                          stroke="rgba(48, 162, 255, .28)"
                          strokeWidth="1.7"
                          fill="none"
                        />
                        <polyline
                          points="115.9,0.4 120,0.4 120,144 110,144 110,169.7 105.9,169.7"
                          stroke="rgba(48, 162, 255, .28)"
                          strokeWidth="0.8"
                          fill="none"
                        />
                      </svg>
                    </div>

                    <div className="h-[170px] w-[120px] flex flex-col items-center relative">
                      <h1
                        className="text-sm tracking-[0.10em] mt-1 mb-10"
                        style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
                      >
                        Styling
                      </h1>
                      <img
                        src="/img/tailwindcss_logo.png"
                        alt="tailwind logo"
                        className="w-[60px] h-[36.09375px] object-cover rounded"
                      />
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 120 170"
                        className="absolute top-0 left-0"
                        preserveAspectRatio="none"
                      >
                        <line x1="0" y1="0" x2="0" y2="170" stroke="#0FCEB7" strokeWidth="6" />
                        <polyline
                          points="2,1 115,1 115,140 105,140 105,169 2,169"
                          stroke="rgba(15, 206, 183, 0.28)"
                          strokeWidth="1.7"
                          fill="none"
                        />
                        <polyline
                          points="115.9,0.4 120,0.4 120,144 110,144 110,169.7 105.9,169.7"
                          stroke="rgba(15, 206, 183, 0.28)"
                          strokeWidth="0.8"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              
                
              </div>
              <div className='h-[280px] w-[200px] flex items-center relative'>
              
                <svg width="100%" height="100%" viewBox="0 0 200 280" className="absolute top-0 left-0" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="0" y2="0" stroke="#fff" stroke-width=".5" />
                  
                  
                  <polyline // squares inside the card
                      points="52,7 10,7 10,225" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />

                  <polyline // squares inside the card
                      points="6.5,100 13.5,100 13.5,230 6.5,230 6.5,100" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  
                  <polyline // left buttom item
                      points="5,240 15,240 35,260 35,270" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <polyline // squares inside the card
                      points="45,260 95,260 95,270 45,270 45,260" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <line x1="70" y1="265" x2="188" y2="265" stroke="#fff" stroke-width=".5" />


                  
                  <line x1="64" y1="3" x2="60" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="67" y1="3" x2="63" y2="11" stroke="#fff" stroke-width=".5" /> 
                  <line x1="70" y1="3" x2="66" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="73" y1="3" x2="69" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="76" y1="3" x2="72" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="79" y1="3" x2="75" y2="11" stroke="#fff" stroke-width=".5" />

                  <polyline // squares inside the card
                      points="90,0.5 90,15 100,15 100,0.5 90,0.5" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <polyline // squares inside the card
                      points="105,0.5 105,15 117,15 117,0.5 105,0.5" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="#F24E1E" 
                  />
                  <polyline // squares inside the card
                      points="122,0.5 122,15 132,15 132,0.5 122,0.5" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <polyline // squares inside the card
                      points="150,7 199.5,7 199.5,18 193,30 193,80 199.5,92 199.5,240" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <line x1="190" y1="265" x2="199.5" y2="242" stroke="#fff" stroke-width=".5" />
                </svg>
                <div className='h-[280px] w-[200px] '>
                  <h1 className="text-md tracking-[0.15em] mt-5 ml-5 text-left "
                  style={{ fontFamily: '"Roboto Condensed", sans-serif' }} >Styling and structure</h1>
                  <img 
                    src="/img/figma_logo.png" 
                    alt="postgresql logo"
                    className="w-[120px] h-[120px] object-cover rounded ml-10 mt-5"
                  />
                  <div className="absolute bottom-5 right-5 w-[30px] h-[30px]">
                    <svg
                      viewBox="0 0 30 30"
                      className="w-full h-full"
                    >
                      {/* Fondo transparente pero clickeable */}
                      <rect 
                        width="30" 
                        height="30" 
                        fill="transparent" 
                        className="cursor-default"
                      />
                      
                      {/* Triángulo de play (solo aquí aparece cursor-pointer) */}
                      <path
                        d="M10 5 L10 25 L25 15 Z"
                        fill="transparent"
                        stroke="white"
                        strokeWidth="2"
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => console.log("Play clickeado")}
                      />
                    </svg>
                </div>
                </div>
              
              </div>
              <div className='h-[280px] w-[200px] flex items-center relative'>
              
                <svg width="100%" height="100%" viewBox="0 0 200 280" className="absolute top-0 left-0" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="0" y2="0" stroke="#fff" stroke-width=".5" />
                  
                  
                  <polyline // squares inside the card
                      points="52,7 10,7 10,225" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />

                  <polyline // squares inside the card
                      points="6.5,100 13.5,100 13.5,230 6.5,230 6.5,100" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  
                  <polyline // left buttom item
                      points="5,240 15,240 35,260 35,270" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <polyline // squares inside the card
                      points="45,260 95,260 95,270 45,270 45,260" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <line x1="70" y1="265" x2="188" y2="265" stroke="#fff" stroke-width=".5" />


                  
                  <line x1="64" y1="3" x2="60" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="67" y1="3" x2="63" y2="11" stroke="#fff" stroke-width=".5" /> 
                  <line x1="70" y1="3" x2="66" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="73" y1="3" x2="69" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="76" y1="3" x2="72" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="79" y1="3" x2="75" y2="11" stroke="#fff" stroke-width=".5" />

                  <polyline // squares inside the card
                      points="90,0.5 90,15 100,15 100,0.5 90,0.5" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <polyline // squares inside the card
                      points="105,0.5 105,15 117,15 117,0.5 105,0.5" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="#F24E1E" 
                  />
                  <polyline // squares inside the card
                      points="122,0.5 122,15 132,15 132,0.5 122,0.5" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <polyline // squares inside the card
                      points="150,7 199.5,7 199.5,18 193,30 193,80 199.5,92 199.5,240" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <line x1="190" y1="265" x2="199.5" y2="242" stroke="#fff" stroke-width=".5" />
                </svg>
                <div className='h-[280px] w-[200px] '>
                  <h1 className="text-md tracking-[0.15em] mt-5 ml-5 text-left "
                  style={{ fontFamily: '"Roboto Condensed", sans-serif' }} >Programming languages</h1>
                  <img 
                    src="/img/php_logo.png" 
                    alt="postgresql logo"
                    className="w-[120px] h-[120px] object-cover rounded ml-10 mt-5"
                  />
                  <div className="absolute bottom-5 right-5 w-[30px] h-[30px]">
                    <svg
                      viewBox="0 0 30 30"
                      className="w-full h-full"
                    >
                      {/* Fondo transparente pero clickeable */}
                      <rect 
                        width="30" 
                        height="30" 
                        fill="transparent" 
                        className="cursor-default"
                      />
                      
                      {/* Triángulo de play (solo aquí aparece cursor-pointer) */}
                      <path
                        d="M10 5 L10 25 L25 15 Z"
                        fill="transparent"
                        stroke="white"
                        strokeWidth="2"
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => console.log("Play clickeado")}
                      />
                    </svg>
                </div>
                </div>
              
              </div>
              <div className='h-[280px] w-[200px] flex items-center relative'>
              
                <svg width="100%" height="100%" viewBox="0 0 200 280" className="absolute top-0 left-0" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="0" y2="0" stroke="#fff" stroke-width=".5" />
                  
                  
                  <polyline // squares inside the card
                      points="52,7 10,7 10,225" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />

                  <polyline // squares inside the card
                      points="6.5,100 13.5,100 13.5,230 6.5,230 6.5,100" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  
                  <polyline // left buttom item
                      points="5,240 15,240 35,260 35,270" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <polyline // squares inside the card
                      points="45,260 95,260 95,270 45,270 45,260" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <line x1="70" y1="265" x2="188" y2="265" stroke="#fff" stroke-width=".5" />


                  
                  <line x1="64" y1="3" x2="60" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="67" y1="3" x2="63" y2="11" stroke="#fff" stroke-width=".5" /> 
                  <line x1="70" y1="3" x2="66" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="73" y1="3" x2="69" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="76" y1="3" x2="72" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="79" y1="3" x2="75" y2="11" stroke="#fff" stroke-width=".5" />

                  <polyline // squares inside the card
                      points="90,0.5 90,15 100,15 100,0.5 90,0.5" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <polyline // squares inside the card
                      points="105,0.5 105,15 117,15 117,0.5 105,0.5" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="#F24E1E" 
                  />
                  <polyline // squares inside the card
                      points="122,0.5 122,15 132,15 132,0.5 122,0.5" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <polyline // squares inside the card
                      points="150,7 199.5,7 199.5,18 193,30 193,80 199.5,92 199.5,240" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <line x1="190" y1="265" x2="199.5" y2="242" stroke="#fff" stroke-width=".5" />
                </svg>
                <div className='h-[280px] w-[200px] '>
                  <h1 className="text-md tracking-[0.15em] mt-5 ml-5 text-left "
                  style={{ fontFamily: '"Roboto Condensed", sans-serif' }} >Code editors</h1>
                  <img 
                    src="/img/visualStudio_logo.png" 
                    alt="postgresql logo"
                    className="w-[120px] h-[120px] object-cover rounded ml-10 mt-5"
                  />
                  <div className="absolute bottom-5 right-5 w-[30px] h-[30px]">
                    <svg
                      viewBox="0 0 30 30"
                      className="w-full h-full"
                    >
                      {/* Fondo transparente pero clickeable */}
                      <rect 
                        width="30" 
                        height="30" 
                        fill="transparent" 
                        className="cursor-default"
                      />
                      
                      {/* Triángulo de play (solo aquí aparece cursor-pointer) */}
                      <path
                        d="M10 5 L10 25 L25 15 Z"
                        fill="transparent"
                        stroke="white"
                        strokeWidth="2"
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => console.log("Play clickeado")}
                      />
                    </svg>
                </div>
                </div>
              
              </div>
              <div className='h-[280px] w-[200px] flex items-center relative'>
              
                <svg width="100%" height="100%" viewBox="0 0 200 280" className="absolute top-0 left-0" preserveAspectRatio="none">
                  <line x1="0" y1="0" x2="0" y2="0" stroke="#fff" stroke-width=".5" />
                  
                  
                  <polyline // squares inside the card
                      points="52,7 10,7 10,225" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />

                  <polyline // squares inside the card
                      points="6.5,100 13.5,100 13.5,230 6.5,230 6.5,100" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  
                  <polyline // left buttom item
                      points="5,240 15,240 35,260 35,270" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <polyline // squares inside the card
                      points="45,260 95,260 95,270 45,270 45,260" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <line x1="70" y1="265" x2="188" y2="265" stroke="#fff" stroke-width=".5" />


                  
                  <line x1="64" y1="3" x2="60" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="67" y1="3" x2="63" y2="11" stroke="#fff" stroke-width=".5" /> 
                  <line x1="70" y1="3" x2="66" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="73" y1="3" x2="69" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="76" y1="3" x2="72" y2="11" stroke="#fff" stroke-width=".5" />
                  <line x1="79" y1="3" x2="75" y2="11" stroke="#fff" stroke-width=".5" />

                  <polyline // squares inside the card
                      points="90,0.5 90,15 100,15 100,0.5 90,0.5" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <polyline // squares inside the card
                      points="105,0.5 105,15 117,15 117,0.5 105,0.5" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="#F24E1E" 
                  />
                  <polyline // squares inside the card
                      points="122,0.5 122,15 132,15 132,0.5 122,0.5" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <polyline // squares inside the card
                      points="150,7 199.5,7 199.5,18 193,30 193,80 199.5,92 199.5,240" 
                      stroke="#fff" 
                      stroke-width=".5" 
                      fill="none" 
                  />
                  <line x1="190" y1="265" x2="199.5" y2="242" stroke="#fff" stroke-width=".5" />
                </svg>
                <div className='h-[280px] w-[200px] '>
                  <h1 className="text-md tracking-[0.15em] mt-5 ml-5 text-left "
                  style={{ fontFamily: '"Roboto Condensed", sans-serif' }} >Socials</h1>
                  <img 
                    src="/img/linkedin_logo.png" 
                    alt="postgresql logo"
                    className="w-[120px] h-[120px] object-cover rounded ml-10 mt-5"
                  />
                  <div className="absolute bottom-5 right-5 w-[30px] h-[30px]">
                    <svg
                      viewBox="0 0 30 30"
                      className="w-full h-full"
                    >
                      {/* Fondo transparente pero clickeable */}
                      <rect 
                        width="30" 
                        height="30" 
                        fill="transparent" 
                        className="cursor-default"
                      />
                      
                      {/* Triángulo de play (solo aquí aparece cursor-pointer) */}
                      <path
                        d="M10 5 L10 25 L25 15 Z"
                        fill="transparent"
                        stroke="white"
                        strokeWidth="2"
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => console.log("Play clickeado")}
                      />
                    </svg>
                </div>
                </div>
              
              </div>
            </div>
          </div>
          <div className='flex flex-wrap items-center mt-20 border-2 w-full '>
            <h1 className="pl-5 text-xl tracking-[0.25em] text-[#fff] text-left border-2 w-full"
                style={{ fontFamily: '"Roboto Condensed", sans-serif', fontWeight: 400}}  >Info
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full pt-5 border-4 border-yellow-500 p-10" >
              <div class="  h-64 text-left border-2 border-green-500" style={{ fontFamily: '"Roboto Condensed", sans-serif', fontWeight: 400  }}>
                <h2 className=" tracking-[0.25em] text-lg text-[#02E8E8]">Education</h2>
                <p class="mt-3 font-light" >Software Engineer with IA</p>
                <p class="mt-3 font-light">Senati - Higher Technological Institute</p>
                <p class="mt-3 font-light">January 2024 - Currently</p>
              </div>
              <div class=" h-64 text-left border-2 border-green-500" style={{ fontFamily: '"Roboto Condensed", sans-serif', fontWeight: 400  }}>
                <h2 className=" tracking-[0.25em] text-lg text-[#02E8E8]">Email</h2>
                <p class=" mt-1 font-light" >mrsek0192@gmail.com</p>
                <h2 className=" mt-3 tracking-[0.25em] text-lg text-[#02E8E8]">Adress</h2>
                <p class=" mt-1 font-light" >Lima, Perú</p>
                <h2 className=" mt-3 tracking-[0.25em] text-lg text-[#02E8E8]">Number</h2>
                <p class=" mt-1 font-light" >991979925</p>
              </div>
              <div className=" justify-start flex border-2 border-green-500">
                <div className='h-13 w-30 flex items-center relative justify-center align-center '>
                  <svg width="100%" height="100%" viewBox="0 0 30 13" className="absolute top-0 left-0" preserveAspectRatio="none">

                    <polyline // up line
                      points="21,0.65 0.1,0.65 0.1,12.35 1.5,12.35 " 
                      stroke="#02E8E8" 
                      stroke-width="0.2" 
                      fill="none" 
                    />

                    <polyline // squares inside the card
                      points="30,0.1 28.8,0.1 28.8,1.2 29.9,1.2 29.9,0.1" 
                      stroke="#02E8E8" 
                      stroke-width="0.2" 
                      fill="none" 
                    />
                    <polyline // squares inside the card
                      points="28.3,0.1 27.1,0.1 27.1,1.2 28.2,1.2 28.2,0" 
                      stroke="#02E8E8" 
                      stroke-width="0.2" 
                      fill="#02E8E8" 
                    />
                    <polyline // squares inside the card
                      points="26.6,0.1 25.4,0.1 25.4,1.2 26.5,1.2 26.5,0.1" 
                      stroke="#02E8E8" 
                      stroke-width="0.2" 
                      fill="none" 
                    />

                    <polyline // down line
                      points="29.4,2.5 29.4,12.35 10,12.35" 
                      stroke="#02E8E8" 
                      stroke-width="0.2" 
                      fill="none" 
                    />
                    <polyline // rectangle connection
                      points="1.5,13 1.5,11.9 9.5,11.9 9.5,12.9 1.5,12.9" 
                      stroke="#02E8E8" 
                      stroke-width="0.2" 
                      fill="none" 
                    />

                   
                   <line x1="24.5" y1="0.1" x2="24.12" y2="1.2" stroke="#02E8E8" stroke-width="0.2" />
                   <line x1="24" y1="0.1" x2="23.62" y2="1.2" stroke="#02E8E8" stroke-width="0.2" />
                   <line x1="23.5" y1="0.1" x2="23.12" y2="1.2" stroke="#02E8E8" stroke-width="0.2" />
                   <line x1="23" y1="0.1" x2="22.62" y2="1.2" stroke="#02E8E8" stroke-width="0.2" />
                   <line x1="22.5" y1="0.1" x2="22.12" y2="1.2" stroke="#02E8E8" stroke-width="0.2" />
                   
                  </svg>
                  <a
                    href="/cv.pdf"
                    download="cv.pdf"
                    className="w-26 h-8 bg-[#09F0F0] text-[#04101B] 
                              hover:bg-[#06caca] hover:text-white 
                              flex justify-center items-center cursor-pointer 
                              relative z-10 transition-colors duration-200"
                    style={{ fontFamily: '"Roboto Condensed", sans-serif', fontWeight: 300 }}
                  >
                    <h2 className="tracking-[0.08em] text-sm">
                      Download cv
                    </h2>
                  </a>

                </div>
              </div>
                  
            </div>
          </div>
        </div>
        
        
        
      </div>
    </>
  )
}

export default App
