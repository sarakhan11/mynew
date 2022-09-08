import { useEffect, useState } from 'react'
import Image from "next/image";
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
const Index = () => {
const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <div className=''>
      <div className=" justify-center mx-auto">
        <div className="">
          <div className="flex flex-wrap justify-between items-center">
            <div className='pl-20'>
              <Image className="cursor-pointer" src="/Hourglass (1).png" width={80} height={80}/>
            </div>
            <button
          className=" block xl:hidden text-gray py-8 px-6"
          onClick={() => setShowMenu(!showMenu)}
        >
           <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="30px"
                height="30px"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
              </svg>
        </button>

       
            <div className="items-right justify-center flex absolute right-8 p-8 mr-4 -top-0 text-white z-40 cursor-pointer">
            <ul className="xl:flex hidden gap-9 " >
              <li className="cursor-pointer relative">
                <div className="flex items-center ">
                  <a href="#home-section" className="cursor-pointer text-base leading-4 text-gray-600 ">
                    Home
                  </a>
                </div>
              </li>
              <li className="relative mx-4">
                <div className="flex items-center ">
                  <a href="#explore-section" className="cursor-pointer text-base leading-4 text-gray-600  ">
                    Explore
                  </a>
                </div>
              </li>
              <li className="relative mx-4">
                <div className="flex items-center ">
                  <a href="#packages-section" className="cursor-pointer text-base leading-4 text-gray-600  ">
                    Packages
                  </a>
                </div>
              </li>
              <li className="relative mx-4">
                <div className="flex items-center ">
                  <a href="#timeline-section" className="cursor-pointer text-base leading-4 text-gray-600  ">
                    Timeline
                  </a>
                </div>
              </li>
              <li className="relative mx-2">
                <div className="flex items-center ">
                  <a href="#about-section" className="cursor-pointer text-base leading-4 text-gray-600  ">
                    About
                  </a>
                </div>
              </li>
              <li className="relative mx-4">
                <div className="flex items-center ">
                  <a href="#contact-section" className="cursor-pointer text-base leading-4 text-gray-600  ">
                    Contact
                  </a>
                </div>
              </li>
              <li className="relative mx-4">
                <div className="flex items-center ">
                  <a href="#register-section" className="cursor-pointer font-semibold text-base leading-4 text-gray-600  ">
                    Register
                  </a>
                </div>
              </li>
            </ul>
            </div>

            <nav
        className={showMenu
            ? "absolute top-0 xl:hidden w-full h-full transform -translate-x-0 z-40 transition duration-700"
            : "absolute top-0 xl:hidden w-full h-full transform -translate-x-full z-40 transition duration-700"} id="mobile-nav">
               <div className=" items-right justify-center flex absolute right-8 p-4 -top-0  text-white z-40 cursor-pointer">
              <Image
                src="/icons8-multiply-50.png"
                width={40}
                height={40}
                alt=""
                onClick={() => setShowMenu(!showMenu)}
              />
            </div>
            <ul className="xl:hidden flex bg-gray-100 w-full flex-col w-full px-8 rounded-xl my-6">
              <li className="cursor-pointer relative pb-2 pt-8">
                <div className="flex items-center justify-center">
                  <a href="#home-section" className="cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Home
                  </a>
                </div>
              </li>
              <li className=" relative py-2">
                <div className="flex items-center justify-center">
                  <a href="#explore-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Explore
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center justify-center">
                  <a href="#packages-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Packages
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center justify-center">
                  <a href="#timeline-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Timeline
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center justify-center">
                  <a href="#about-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    About
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center justify-center">
                  <a href="#contact-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Contact
                  </a>
                </div>
              </li>
              <li className="relative pt-2 pb-8">
                <div className="flex items-center justify-center">
                  <a href="#register-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Register
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>


          <div className="lg:flex my-24 relative lg:pb-28 md:pb-18 pb-8 items-center container justify-center mx-auto px-10" id="home-section">
            <div className=" lg:max-w-[31%] lg:pb-0 pb-8">
              <p className="lg:text-9xl md:text-7xl md:text-5xl text-4xl font-normal uppercase z-20 text-gray-800 font-semibold lg:text-left text-center ">
                Barefoot Adventures
              </p>
              <p className="pt-4 text-gray-600 lg:pr-8 lg:text-justify text-center">
                A travel agency is a tourism-related services to the general public to 
                offer different kinds of travelling packages for each destination.
              </p> 
            </div>
            <Image src="/unsplash_HNip-HjxrpQ.png" width="843" height="750" className="-z-20 max-w-[60%]"/>
          </div>


            <div className="container pt-32 pb-32 mx-auto">
              <div className="gap-12 flex flex-col lg:flex-col xl:flex-row 2xl:flex-row justify-items-center place-content-center items-center justify-center">
                <div className="w-9/12 mx-auto mb-12 lg:mb-0 xl:mb-0 2xl:mb-0">
                  <h1 className="text-4xl lg:text-8xl xl:text-9xl 2xl:text-9xl font-normal text-center text-gray-800">
                    TIMELINE
                  </h1>
                <div className="mt-12">
                  <button className="hidden lg:block 2xl:block xl:block mx-auto text-center font-semibold text-xl bg-gray-800 hover:bg-gray-600 focus:bg-gray-600 text-white px-10 py-4 flex">
                    Book Now 
                  </button>
                  <button className="block lg:hidden xl:hidden 2xl:hidden bg-gray-800 hover:bg-gray-600 focus:bg-gray-600 text-white mx-auto text-center justify-center items-center font-semibold text-xl py-6 w-full flex">
                    Book Now
                  </button>
                </div>
              </div>

              <div className="w-10/12">
                <div className="bg-gray-50 p-12">
                  <div className="" id="packages-section">
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row pt-12 pb-12 border-b-2 ">
                      <div className="text-2xl lg:text-5xl md:text-5xl xl:text-5xl 2xl:text-5xl text-center lg:text-left xl:text-left 2xl:text-left font-bold text-gray-800">
                        Trip to Greece
                      </div>
                      <div className="ml-0 md:ml-auto lg:ml-auto xl:ml-auto 2xl:ml-auto text-center text-xl lg:text-3xl md:text-3xl xl:text-3xl 2xl:text-3xl font-bold text-gray-600">
                        10 Days
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row pt-12 pb-12 border-b-2 ">
                      <div className="">
                        <div className="text-2xl font-bold text-gray-600 text-center lg:text-left md:text-left xl:text-left 2xl:text-left">
                          Batch 1
                        </div>
                        <h3 className="text-2xl mt-2 text-gray-800 text-center lg:text-left md:text-left xl:text-left 2xl:text-left">
                          August 1, 2022
                        </h3>
                      </div>
                      <div className="ml-0 md:ml-auto lg:ml-auto xl:ml-auto 2xl:ml-auto text-center text-xl font-semibold text-gray-600 ">
                        Slots filled
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row pt-12 pb-12 border-b-2 ">
                      <div className="">
                        <div className="text-2xl font-bold text-center text-gray-600 lg:text-left md:text-left xl:text-left 2xl:text-left">
                          Batch 2
                        </div>
                        <h3 className="text-2xl mt-2 text-center text-gray-800 lg:text-left md:text-left xl:text-left 2xl:text-left">
                          August 15, 2022
                        </h3>
                      </div>
                      <div className="ml-0 md:ml-auto lg:ml-auto xl:ml-auto 2xl:ml-auto text-center text-xl font-semibold text-gray-600">
                        Slots available
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row pt-12 pb-12 border-b-2 ">
                      <div className="">
                        <div className="text-2xl font-semibold text-center text-gray-600 lg:text-left md:text-left xl:text-left 2xl:text-left">
                          Batch 3
                        </div>
                        <h3 className="text-2xl mt-2 text-gray-800 text-center lg:text-left md:text-left xl:text-left 2xl:text-left">
                          August 25, 2022
                        </h3>
                      </div>
                      <div className="ml-0 md:ml-auto lg:ml-auto xl:ml-auto 2xl:ml-auto text-center text-xl font-semibold text-gray-600">
                        Slots available
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row pt-12 pb-3 ">
                      <div className="">
                        <div className="text-2xl font-bold text-gray-600 text-center lg:text-left md:text-left xl:text-left 2xl:text-left">
                          Batch 4
                        </div>
                        <h3 className="text-2xl mt-2 text-center lg:text-left md:text-left xl:text-left 2xl:text-left">
                          September 1, 2022
                        </h3>
                      </div>
                      <div className="ml-0 md:ml-auto lg:ml-auto xl:ml-auto 2xl:ml-auto text-center text-xl font-semibold text-gray-600">
                        Slots available
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        <div className="container hidden 2xl:block xl:block mx-auto mt-12 mb-56" id="Timeline-section">
          <div className="flex gap-7">
            <div className="w-11/12">
              <div className="flex gap-5">
                <div className=" flex flex-col w-11/12 p-5 ">
                  <div className=" p-5 border border-gray-200">
                    <h1 className="text-gray-600 text-9xl font-bold">1.</h1>
                    <h1 className="mt-6 text-7xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold text-gray-800">Tell us what you want</h1>
                    <h1 className="mb-3 font-semibold text-4xl lg:text-4xl xl:text-3xl 2xl:text-4xl mt-8 text-gray-600">Fill out a form sharing all details about your likes and dislike</h1>
                  </div>
                  <div className=" mt-12 border border-gray-200 p-5">
                    <h1 className="text-gray-600 text-9xl font-bold">3.</h1>
                    <h1 className="mt-6 text-7xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">Finalize the</h1>
                      <div className="text-7xl flex lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">
                        <h1 className="text-7xl flex lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">plan we</h1>
                        <h1 className="text-7xl flex lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold ml-3">gave</h1>
                      </div>
                    <h1 className="mb-3 font-semibold text-4xl lg:text-4xl xl:text-3xl 2xl:text-4xl mt-8 text-gray-600">Alter the plan we provided according to your details.</h1>
                  </div>
                </div>
                <div className="w-11/12 flex flex-col p-3 mt-20">
                  <div className=" p-5 border border-gray-200 p-5">
                    <h1 className="text-gray-600 text-9xl font-bold">2.</h1>
                    <h1 className="mt-6 text-7xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">Share your plan with us</h1>
                    <h1 className="mb-3 font-semibold text-4xl lg:text-4xl xl:text-3xl 2xl:text-4xl mt-8 text-gray-600">Share all details including days and number of people.</h1>
                  </div>
                  <div className=" mt-12 border border-gray-200 p-5">
                    <h1 className="text-gray-600 text-9xl font-bold">4.</h1>
                    <h1 className="mt-6 text-7xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">Have fun on your trip</h1>
                    <h1 className="mb-3 font-semibold text-4xl lg:text-4xl xl:text-3xl 2xl:text-4xl mt-8 text-gray-600">Alter the plan we provided according to your details.</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/12">
              <div className="mt-48">
                <h1 className="font-bold text-9xl text-right text-gray-800 mt-7">MAKE</h1>
                <h1 className="font-bold text-9xl text-right text-gray-800 mt-7">YOUR</h1>
                <h1 className="font-bold text-9xl text-right text-gray-800 mt-7">OWN</h1>
                <h1 className="font-bold text-9xl text-right text-gray-800 mt-7">TRIP</h1>
              </div>
            </div>
          </div>
      </div>


          <div className=" container mx-auto lg:pb-16 pb-8 lg:mb-28 md:mb-18 mb-0 md:px-10 sm:px-6 px-4" id="Explore-section">

              <div className="lg:flex lg:text-left text-center items-center justify-center">
                <div>
                  <p className="text-gray-800 lg:text-left xl:text-left md:text-center sm:text-center xl:text-[112px] md:text-7xl sm:text-5xl text-3xl uppercase sm:font-semibold font-bold xl:leading-[112px] uppercase sm:justify-self-end ml-auto xl:w-[515px] w-full lg:pb-0 pb-10">
                    popular Places
                  </p>
                </div>
                <div className="relative ">
                  <Image className="" src="/unsplash_2czy17jLM_0.png" width={733} height={600}/>
                  <div className="absolute bottom-[40px] px-10">
                  <p className="uppercase xl:text-8xl md:text-6xl sm:text-4xl text-2xl text-white md:pb-4 pb-2">norway</p>
                  <p className="xl:text-2xl md:text-xl sm:text-md text-sm text-white ">
                    Norway is a Scandinavian country encompassing mountains, 
                    glaciers and deep coastal fjords. Oslo, the capital, 
                    is a city of green spaces and museums.
                  </p>
                </div>
              </div>
            </div>


          <div className="lg:flex lg:text-left text-center flex-row-reverse justify-between items-center pt-16 ">
            <p className="text-gray-800 lg:text-right xl:text-right md:text-center sm:text-center xl:text-[112px] md:text-7xl sm:text-5xl text-3xl uppercase sm:font-semibold font-bold uppercase xl:leading-[112px] lg:text-right text-center mr-auto lg:w-[515px] w-full lg:pb-0 pb-10 pl-1 ">
              To go and live
            </p>
            <div className="relative flex">
              <Image src="/unsplash_gW3ddTAKTJg.png" width={733} height={600}/>
              <div className="absolute bottom-[40px] px-10">
                <p className="uppercase xl:text-8xl md:text-6xl sm:text-4xl text-2xl text-white md:pb-4 pb-2">Switzerland</p>
                <p className="xl:text-2xl md:text-xl sm:text-md text-sm text-white ">
                  Norway is a Scandinavian country encompassing mountains, 
                  glaciers and deep coastal fjords. Oslo, the capital, 
                  is a city of green spaces and museums.
                </p>
              </div>
            </div>
          </div>
          
          
          <div className="lg:flex lg:text-left text-center items-center justify-center pt-16">
            <div>
              <p className="text-gray-800 lg:text-left xl:text-left md:text-center sm:text-center xl:text-[112px] md:text-7xl sm:text-5xl text-3xl uppercase sm:font-semibold font-bold uppercase xl:leading-[112px] lg:text-right text-center mr-auto lg:w-[515px] w-full lg:pb-0 pb-10 pr-1">
                To have fun
              </p>
            </div>
            <div className="relative ">
            <Image src="/unsplash_PgHc0Ka1E0A.png" width={733} height={600}/>
              <div className="absolute bottom-[40px] px-10">
                <p className="uppercase xl:text-8xl md:text-6xl sm:text-4xl text-2xl text-white md:pb-4 pb-2">Iceland</p>
                <p className="xl:text-2xl md:text-xl sm:text-md text-sm text-white ">
                  Norway is a Scandinavian country encompassing mountains,
                  glaciers and deep coastal fjords. Oslo, the capital,
                  is a city of green spaces and museums.
                </p>
              </div>
            </div>
          </div>


          <div className="lg:flex lg:text-left text-center flex-row-reverse justify-between items-center pt-16 ">
            <p className="text-gray-800 lg:text-right xl:text-right md:text-center sm:text-center xl:text-[112px] md:text-7xl sm:text-5xl text-3xl uppercase sm:font-semibold font-bold uppercase xl:leading-[112px] lg:text-right text-center mr-auto lg:w-[515px] w-full lg:pb-0 pb-10 pl-1">
              To watch sunsets
            </p>
          <div className="relative flex">
            <Image src="/unsplash_FSuY7d0BBmY.png" width={733} height={600}/>
            <div className="absolute bottom-[40px] px-10">
              <p className="uppercase xl:text-8xl md:text-6xl sm:text-4xl text-2xl text-white md:pb-4 pb-2">Greece</p>
              <p className="xl:text-2xl md:text-xl sm:text-md text-sm text-white ">
                Norway is a Scandinavian country encompassing mountains, 
                glaciers and deep coastal fjords. Oslo, the capital, 
                is a city of green spaces and museums.
              </p>
            </div>
          </div>
        </div>
        
        
        <div className="lg:flex lg:text-left text-center items-center justify-center pt-16">
          <div>
            <p className="text-gray-800 lg:text-left xl:text-left md:text-center sm:text-center xl:text-[112px] md:text-7xl sm:text-5xl text-3xl uppercase sm:font-semibold font-bold uppercase xl:leading-[112px] lg:text-right text-center mr-auto lg:w-[515px] w-full lg:pb-0 pb-10 pr-1">
              to have moment of a lifetime
            </p>
          </div>
          <div className="relative ">
          <Image src="/unsplash_QAwciFlS1g4.png" width={733} height={600}/>
            <div className="absolute bottom-[40px] px-10">
              <p className="uppercase xl:text-8xl md:text-6xl sm:text-4xl text-2xl text-white lg:pb-4 pb-2">Paris</p>
              <p className="xl:text-2xl md:text-xl sm:text-md text-sm text-white ">
                Norway is a Scandinavian country encompassing mountains, 
                glaciers and deep coastal fjords. Oslo, the capital, 
                is a city of green spaces and museums.
              </p>
            </div>
          </div>
        </div>

      </div>



          <div className="container mx-auto mt-32 mb-12" id="about-section">
            <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row mx-auto gap-12 ">
              <div className="w-11/12">
                <h1 className="text-5xl lg:text-7xl xl:text-9xl 2xl:text-9xl font-normal mt-20 text-gray-800 text-center">ABOUT US</h1>
              </div>
              <div className="w-10/12 mx-auto">
                <div className="">
                  <Image className='' src="/Hourglass.png" width={128} height={128}/>
                </div>
                <h1 className="text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-semibold mt-8 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin laoreet lectus quam, quis euismod turpis ornare quis.Morbi tincidunt erat quis eros semper dignissim. Cras risus dui, ultrices vel sem vitae, tristique hendrerit lacus. Vivamus mattis ultricies ullamcorper. Morbi at ligula sit amet risus suscipi.</h1>
              </div>
            </div>
          </div>


        <div className="container mx-auto mt-12 mb-12" id="About-section">
            <div className="flex flex-col-reverse lg:flex-row xl:flex-row">
               <div className="flex flex-col md:flex-row lg;lflex-row 2xl:flex-row gap-12 mx-auto">
                  <div className="mt-6 md:mt-24 lg:mt-24 xl:mt-24 2xl:mt-24">
                    <h1 className="text-6xl font-semibold text-gray-800">10M+</h1>
                    <h1 className="text-2xl font-semibold text-gray-600">VISITORS</h1>
                  </div>
                  <div className="mt-6 md:mt-24 lg:mt-24 xl:mt-24 2xl:mt-24">
                    <h1 className="text-6xl font-semibold text-gray-800">1260</h1>
                    <h1 className="text-2xl font-semibold text-gray-600">Hotels</h1>
                  </div>
                  <div className="mt-6 md:mt-24 lg:mt-24 xl:mt-24 2xl:mt-24">
                    <h1 className="text-6xl font-semibold text-gray-800">30K+</h1>
                    <h1 className="text-2xl font-semibold text-gray-600">Customers</h1>
                  </div>
              </div>

                <div className=" mx-auto lg:ml-auto xl:ml-auto 2xl:ml-auto ">
                  <div className="hidden md:block">
                    <h1 className="text-9xl font-normal text-gray-800">Since</h1>
                    <h1 className="text-9xl font-normal text-gray-800">2005</h1>
                  </div>
                  <div className="block md:hidden">
                    <h1 className="text-4xl font-normal text-gray-800">Since 2005</h1>
                  </div>
                </div>
            </div>
            </div>

            <div className="container mx-auto pt-32 pb-32" id='contact-section'>
                <div className=" mt-12">
                    <h1 className="xl:text-9xl lg:text-6xl md:text-6xl sm:text-4xl font-normal">HOLIDAYS SEASON SPECIAL OFFERS</h1>
                    <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={6}
                    visibleSlides={3}
                    className="lg:pr-80 md:pr-0"
                    infinite={true}
                    step={1}
                  >
                    {" "}
                    <div className="">
                      <div className="flex justify-between items-center pb-10 " >
                        <p className="text-gray-600 lg:text-4xl md:text-xl text-d my-auto font-semibold mt-12 font-['Work+Sans']">
                          {" "}
                          A 20 days trip to all your favourite destinations
                        </p>
                        <ButtonNext>
                          {" "}
                          <Image
                            src="/arrow-forward.svg"
                            width="64"
                            height="64"
                            className="my-auto cursor-pointer"
                          />
                        </ButtonNext>
                      </div>
                      <Slider>
                        <div className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                          <Slide index={0}>
                            {" "}
                            <Image
                              src="/Rectangle 49.png"
                              width="296"
                              height="265"
                              className="my-auto "
                            />
                          </Slide>
                          <Slide index={1}>
                            {" "}
                            <Image
                              src="/Rectangle 50.png"
                              width="296"
                              height="265"
                              className="my-auto px-8"
                            />
                          </Slide>
                          <Slide index={2}>
                            {" "}
                            <Image
                              src="/Rectangle 51.png"
                              width="296"
                              height="265"
                              className="my-auto"
                            />
                          </Slide>
                          <Slide index={3}>
                            {" "}
                            <Image
                              src="/Rectangle 49.png"
                              width="296"
                              height="265"
                              className="my-auto"
                            />
                          </Slide>
                          <Slide index={4}>
                            {" "}
                            <Image
                              src="/Rectangle 50.png"
                              width="296"
                              height="265"
                              className="my-auto px-8"
                            />
                          </Slide>
                          <Slide index={5}>
                            {" "}
                            <Image
                              src="/Rectangle 51.png"
                              width="296"
                              height="265"
                              className="my-auto"
                            />
                          </Slide>
                        </div>
                      </Slider>
                    </div>
                  </CarouselProvider>
                  </div>            
                </div>


          <div className="lg:mt-28 md:mt-18 mt-0 lg:pt-24 bg-gray-800 pt-14 lg:pb-28 pb-14 relative" id="register-section">
            <Image src="/image 11 (1).png" layout="fill"/>
            <div className="lg:flex w-full  items-center justify-between text-white  px-10 container mx-auto">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto justify-center grid-cols-1">
                <ul className="z-30 text-white md:justify-left justify-center  md:mx-0 mx-auto md:border-r border-gray-500 ">
                  <li className="font-['Work+Sans'] cursor-pointer">
                      Home
                  </li>
                  <li className="font-['Work+Sans'] py-4  cursor-pointer">
                    Explore
                  </li>
                  <li className="font-['Work+Sans']  cursor-pointer">
                    Packages
                  </li>
                  <li className="font-['Work+Sans'] py-4  cursor-pointer">
                    Packages
                  </li>
                  <li className="font-['Work+Sans'] cursor-pointer">
                    About
                  </li>
                  <li className="font-['Work+Sans'] py-4  cursor-pointer">
                    Contact
                  </li>
                </ul>
                <div className="md:pl-8 pl-0 mt-10  md:justify-left justify-center  md:mx-0 mx-auto">
                  <p className="text-gray-400 pb-6">Follow us on socials</p>
                  <div className="flex gap-x-8 ml-2">
                    {" "}
                    <Image src="/Vector.png" width="9" height="15" className="my-auto cursor-pointer"/>
                    <Image src="/Insta.png" width="15" height="15" className="my-auto cursor-pointer"/>
                    <Image src="/twitter.png" width="15" height="13" className="my-auto cursor-pointer"/>
                    <Image src="/in.png" width="13" height="12" className="my-auto cursor-pointer"/>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 w-full lg:mt-0 mt-8">
                <p className="lg:text-2xl md:text-xl mb-9 ">
                  Join our mailing list for update about latest packages and deals!
                </p>
                <div className="flex justify-between  border-b border-gray-500">
                  <input
                    placeholder="Your email address"
                    className="placeholder-gray-400 py-4 bg-transparent z-30 w-full focus:outline-none focus:bg-transparent"
                  />
                  <Image
                    src="/arrow-forward.svg"
                    width="16"
                    height="2"
                    className="my-auto  cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
              </div>   
    </>
    
  );
};

export default Index;