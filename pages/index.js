import { useEffect, useState } from 'react'
import Image from "next/image";
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
const Index = () => {
const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="justify-center mx-auto">
        <div className="">
          <div className="flex flex-wrap justify-between items-center">
            <Image className="cursor-pointer" src="/Top.svg" width={80} height={80}/>
          
            <button
          className=" block xl:hidden text-gray   py-4 "
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

       
            <div className="items-right justify-center flex absolute right-8 p-4 -top-0 text-white z-40 cursor-pointer">
            <ul className="xl:flex hidden gap-9 font-['Work+Sans']" >
              <li className="cursor-pointer relative">
                <div className="flex items-center ">
                  <a href="#home-section" className="  cursor-pointer text-base leading-4 text-gray-600 ">
                    Home
                  </a>
                </div>
              </li>
              <li className="relative mx-2">
                <div className="flex items-center ">
                  <a href="#explore-section" className="cursor-pointer text-base leading-4 text-gray-600  ">
                    Explore
                  </a>
                </div>
              </li>
              <li className="relative mx-2">
                <div className="flex items-center ">
                  <a href="#packages-section" className=" cursor-pointer text-base leading-4 text-gray-600  ">
                    Packages
                  </a>
                </div>
              </li>
              <li className="relative mx-2">
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
              <li className="relative mx-2">
                <div className="flex items-center ">
                  <a href="#contact-section" className=" cursor-pointer text-base leading-4 text-gray-600  ">
                    Contact
                  </a>
                </div>
              </li>
              <li className="relative mx-2">
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
               <div className="items-right justify-center flex absolute right-8 p-4 -top-0  text-white z-40 cursor-pointer">
              <Image
                src="/icons8-multiply-50.png"
                width={40}
                height={40}
                alt=""
                onClick={() => setShowMenu(!showMenu)}
              />
            </div>
            <ul className="xl:hidden flex bg-gray-100 w-full flex-col w-full px-8 rounded-xl my-6">
              <li className=" cursor-pointer relative pb-4 pt-8">
                <div className="flex items-center ">
                  <a href="#home-section" className="cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Home
                  </a>
                </div>
              </li>
              <li className=" relative py-2">
                <div className="flex items-center ">
                  <a href="#explore-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Explore
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center ">
                  <a href="#packages-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Packages
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center ">
                  <a href="#timeline-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Timeline
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center ">
                  <a href="#about-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    About
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center ">
                  <a href="#contact-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Contact
                  </a>
                </div>
              </li>
              <li className="relative py-2">
                <div className="flex items-center ">
                  <a href="#register-section" className="cursor-pointer cursor-pointer font-normal text-base leading-4 text-gray-600 ">
                    Register
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="lg:flex relative lg:pb-28 md:pb-18 pb-8 pt-40 items-center container justify-center mx-auto px-10" id="home">
        <div className="   lg:max-w-[31%] lg:pb-0 pb-8">
          <p className="lg:text-9xl md:text-7xl md:text-5xl text-4xl font-normal uppercase z-20 text-gray-800  font-semibold lg:text-left text-center "> Barefoot Adventures</p>
          <p className="pt-4 text-gray-600 lg:pr-8 lg:text-justify text-center ">
            A travel agency is a tourism-related services to the general public
            to offer different kinds of travelling packages for each
            destination.
          </p>{" "}
        </div>
        <Image src="/unsplash_HNip-HjxrpQ.png" width="843" height="750" className="-z-20 max-w-[60%]"/>
      </div>
          
        <div className="container-2xl" id="explore-section">
            <div className="xl:mx-auto xl:pt-40 lg:pt-20 xl:container">
                <div className="lg:flex md:flex-row sm:flex-col items-strech justify-center">
                    <div className="lg:flex-col md:flex-col sm:flex-col md:w-2/5 flex justify-center items-center -mt-14 md:-mt-0 md:ml-72 lg:-ml-16 md:py-24 lg:py-36 relative z-10 mx-4 md:mx-0">
                        <div className="">
                        <h3 className="md:text-6xl lg:text-8xl lg:mt-24 md:mt-24 sm:mt-36 sm:text-6xl font-normal text-gray-900" >TIMELINE</h3>
                        </div>
                        <button className="text-base lg:px-10 px-6 py-6 bg-gray-900 mt-10 text-white font-semibold font-['Work+Sans'] border border-1 border-black xl:mt-10 lg:ml-4 lg:mt-24 ml-0 hover:bg-gray-200 focus:bg-gray-300 hover:text-black focus:text-black transition duration-300">
                            Book Now
                        </button>
                    </div>
                    <div className="h-1/2 w-1/2 bg-gray-200 my-10 xl:ml-0 lg:ml-0 md:ml-60 sm:ml-44">
                        <div>
                            <div className=" font-['Work+Sans'] flex xl:flex-row lg:flex-row md:flex-col sm:flex-col justify-between px-10 py-10 border-gray-500 border-b">
                                <h1 className="lg:text-5xl md:text-4xl sm:text-3xl border-bottom text-gray-900 ">
                                    Trip to Greece
                                </h1>
                                <h1 className="lg:text-2xl md:text-xl sm:text-xl border-bottom text-gray-800 ">
                                    10 Days
                                </h1>
                            </div>

                            <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col justify-between px-10 py-10 border-gray-500 border-b">
                                <div className="flex-col">
                                    <h1 className="lg:text-2xl font-medium md:text-2xl sm:text-xl text-gray-700 ">
                                        Batch 1
                                    </h1>
                                    <h1 className="text-gray-900 font-normal lg:text-2xl md:text-2xl sm:text-xl pt-6">
                                        August 1, 2022
                                    </h1>
                                </div>
                            
                                <h1 className="lg:text-base md:text-base sm:text-base text-base text-gray-700 font-normal">
                                    Slots filled
                                </h1>
                            </div>

                            <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col justify-between px-10 py-10 border-gray-500 border-b">
                                <div className="flex-col">
                                    <h1 className="lg:text-2xl font-medium md:text-2xl sm:text-xl text-gray-700 ">
                                        Batch 2
                                    </h1>
                                    <h1 className="text-gray-900 font-normal lg:text-2xl md:text-2xl sm:text-xl pt-6">
                                        August 15, 2022
                                    </h1>
                                </div>
                            
                                <h1 className="lg:text-base md:text-base sm:text-base text-base text-gray-700 font-normal">
                                    Slots Available
                                </h1>
                            </div>

                             <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col justify-between px-10 py-10 border-gray-500 border-b">
                                <div className="flex-col">
                                    <h1 className="lg:text-2xl font-medium md:text-2xl sm:text-xl text-gray-700 ">
                                        Batch 3
                                    </h1>
                                    <h1 className="text-gray-900 font-normal lg:text-2xl md:text-2xl sm:text-xl pt-6">
                                        August 25, 2022
                                    </h1>
                                </div>
                            
                                <h1 className="lg:text-base md:text-base sm:text-base text-base text-gray-700 font-normal">
                                    Slots Available
                                </h1>
                            </div>

                            <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col justify-between px-10 py-10">
                                <div className="flex-col">
                                    <h1 className="lg:text-2xl font-medium md:text-2xl sm:text-xl text-gray-700 ">
                                        Batch 4
                                    </h1>
                                    <h1 className="text-gray-900 font-normal lg:text-2xl md:text-2xl sm:text-xl pt-6">
                                        September 1, 2022
                                    </h1>
                                </div>
                            
                                <h1 className="lg:text-base md:text-base sm:text-base text-base text-gray-700 font-normal">
                                    Slots Available
                                </h1>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>


        <div>
            <div className="container mx-auto mt-12 mb-56" id="packages-section">
                <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xl:ml-0 lg:ml-0 md:ml-60 sm:ml-36 gap-7">
                    <div className="w-11/12">
                        <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col font-['Work+Sans'] gap-5 xl:ml-0 lg:ml-0 md:-ml-36 sm:ml-0">
                            <div className=" flex flex-col w-11/12 p-3 ">
                                <div className="mt-12 border border-gray-200 p-5">
                                    <h1 className="text-8xl text-gray-700 font-normal p-8">1.</h1>
                                    <h1 className="text-5xl px-8 font-semibold">Tell us what you want</h1>
                                    <h1 className="font-semibold px-8 pb-8 text-2xl mt-8 text-gray-600">Fill out a form sharing all details about your likes and dislikes</h1>
                                </div>
                                <div className="mt-12 border border-gray-200 p-5">
                                    <h1 className="text-8xl text-gray-700 font-normal p-8">2.</h1>
                                    <h1 className="text-5xl px-8 font-semibold">Share your plan with us</h1>
                                    <h1 className="font-semibold px-8 pb-8 text-2xl mt-8 text-gray-600">Share all details including days and number of people.</h1>
                                </div>
                            </div>

                            <div className="w-11/12 flex flex-col p-3 xl:mt-16 lg:mt-16 md:mt-0">
                                <div className="mt-12 border border-gray-200 p-5">
                                    <h1 className="text-8xl text-gray-700 font-normal p-8">3.</h1>
                                    <h1 className="text-5xl px-8 font-semibold">Finalize the plan we gave</h1>
                                    <h1 className="font-semibold px-8 pb-8 text-2xl mt-8 text-gray-600">Alter the plan we provided according to your details.</h1>
                                </div>
                                <div className="mt-12 border border-gray-200 p-5">
                                    <h1 className="text-8xl text-gray-700 font-normal p-8">4.</h1>
                                    <h1 className="text-5xl px-8 font-semibold">Have fun on your trip</h1>
                                    <h1 className="font-semibold px-8 pb-8 text-2xl mt-8 text-gray-600">Alter the plan we provided according to your details.</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="xl:w-4/12 lg:w-4/12 md:w-11/12 sm:w-9/12">
                    <div className="mt-48">
                        <h1 className="font-normal text-8xl xl:text-right lg:text-right md:text-left sm:text-left xl:pt-36 xl:text-8xl lg:text-7xl md:text-7xl sm:text-6xl">MAKE YOUR OWN TRIP</h1>
                    </div>
                </div>
                
            </div>
        </div>
        </div>

<div className='py-24'>
        <div className="container flex lg:flex-row md:flex-col sm:flex-col gap-12 mt-12 mb-12 mx-auto px-20 " id="timeline-section">
            <div className="w-9/12">
                <h1 className="text-9xl xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl font-bold text-left lg:mt-0 md:mt-10 sm:mt-4 xl:mt-44">POPULAR PLACES</h1>
            </div>
            <div className="w-11/12 relative flex-col ">
                <Image className="" src="/unsplash_2czy17jLM_0.png" width={733} height={600}/>
                <h1 className="absolute px-10 bottom-10 text-white font-semibold xl:text-7xl lg:text-5xl md:text-4xl lg:mb-24 md:mb-36 sm:mb-28 sm:text-3xl text-8xl">NORWAY</h1>
                <h1 className="font-['Work+Sans'] absolute bottom-0 text-white text-2xl px-10 py-10 xl:w-11/12 lg:w-11/12 md:w-9/12 sm:w-9/12 md:text-xl sm:text-base">Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. Oslo, the capital, is a city of green spaces and museums.</h1>
            </div>
        </div>


        <div className="container flex lg:flex-row md:flex-col sm:flex-col gap-12 mt-12 mb-12 mx-auto px-20  ">
            <div className="w-11/12 relative flex-col ">
                <Image src="/unsplash_gW3ddTAKTJg.png" width={733} height={600}/>
                <h1 className="absolute px-10 bottom-10 text-white font-semibold xl:text-7xl lg:text-5xl md:text-4xl lg:mb-24 md:mb-36 sm:mb-28 sm:text-3xl text-8xl">SWITZERLAND</h1>
                <h1 className="font-['Work+Sans'] absolute bottom-0 text-white text-2xl px-10 py-10 xl:w-11/12 lg:w-11/12 md:w-9/12 sm:w-9/12 md:text-xl sm:text-base">Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. Oslo, the capital, is a city of green spaces and museums.</h1>
            </div>
            <div className="w-9/12">
                <h1 className="text-9xl xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl font-bold text-right lg:mt-0 md:mt-10 sm:mt-4 xl:mt-24">TO GO AND LIVE</h1>
            </div>
        </div>
            

        <div className="container flex lg:flex-row md:flex-col sm:flex-col gap-12 mt-12 mb-12 mx-auto px-20 ">
            <div className="w-9/12">
                <h1 className="text-9xl xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl font-bold text-left lg:mt-0 md:mt-10 sm:mt-4 xl:mt-24">TO HAVE FUN</h1>
            </div>
            <div className="w-11/12 relative flex-col ">
                <Image src="/unsplash_PgHc0Ka1E0A.png" width={733} height={600}/>
                <h1 className="absolute px-10 bottom-10 text-white font-semibold xl:text-7xl lg:text-5xl md:text-4xl lg:mb-24 md:mb-36 sm:mb-28 sm:text-3xl text-8xl">ICELAND</h1>
                <h1 className="font-['Work+Sans'] absolute bottom-0 text-white text-2xl px-10 py-10 xl:w-11/12 lg:w-11/12 md:w-9/12 sm:w-9/12 md:text-xl sm:text-base">Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. Oslo, the capital, is a city of green spaces and museums.</h1>
            </div>
        </div>


        <div className="container flex lg:flex-row md:flex-col sm:flex-col gap-12 mt-12 mb-12 mx-auto px-20 ">
            <div className="w-11/12 relative flex-col ">
                <Image src="/unsplash_FSuY7d0BBmY.png" width={733} height={600}/>
                <h1 className="absolute px-10 bottom-10 text-white font-semibold xl:text-7xl lg:text-5xl md:text-4xl lg:mb-24 md:mb-36 sm:mb-28 sm:text-3xl text-8xl">DREECE</h1>
                <h1 className="font-['Work+Sans'] absolute bottom-0 text-white text-2xl px-10 py-10 xl:w-11/12 lg:w-11/12 md:w-9/12 sm:w-9/12 md:text-xl sm:text-base">Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. Oslo, the capital, is a city of green spaces and museums.</h1>
            </div>
            <div className="w-9/12">
                <h1 className="text-9xl xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl font-bold text-right lg:mt-0 md:mt-10 sm:mt-4 xl:mt-24">TO WHICH SUNSET</h1>
            </div>
        </div>


        <div className="container flex lg:flex-row md:flex-col sm:flex-col gap-12 mt-12 mb-12 mx-auto px-20 ">
            <div className="w-9/12">
                <h1 className="text-9xl xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl font-bold text-left xl:mt-16 lg:mt-0 md:mt-10 sm:mt-4">TO HAVE MOMENT OF A LIFETIME</h1>
            </div>
            <div className="w-11/12 relative flex-col ">
                <Image src="/unsplash_QAwciFlS1g4.png" width={733} height={600}/>
                <h1 className="absolute px-10 bottom-10 text-white font-semibold xl:text-7xl lg:text-5xl md:text-4xl lg:mb-24 md:mb-36 sm:mb-28 sm:text-3xl text-8xl">PARIS</h1>
                <h1 className="font-['Work+Sans'] absolute bottom-0 xl:bottom-0 lg:bottom-48 md:bottom-16 sm:bottom-0 text-white text-2xl px-10 py-10 xl:w-11/12 lg:w-11/12 md:w-9/12 sm:w-9/12 md:text-xl sm:text-base">Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. Oslo, the capital, is a city of green spaces and museums.</h1>
            </div>
        </div>
</div>

        <div>
            <div className="container mx-auto px-20 mt-32 mb-12 ">
                <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-12 ">
                    <div className="w-11/12">
                        <h1 className="text-8xl font-normal mt-20">ABOUT US</h1>
                    </div>
                    <div className="flex-colw-10/12 font-['Work+Sans']">
                        <Image src="/Hourglass.png" width={128} height={128}/>
                        <h1 className="text-2xl font-semibold mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet lectus quam, quis euismod turpis ornare quis. Morbi tincidunt erat quis eros semper dignissim. Cras risus dui, ultrices vel sem vitae, tristique hendrerit lacus. Vivamus mattis ultricies ullamcorper. Morbi at ligula sit amet risus suscipi.</h1>
                    </div>
                </div>
            </div>
        </div>


        <div>
            <div className="container px-20 mx-auto mt-36 mb-16 " id="about-section">
                <div className="xl:flex-row lg:flex-row md:flex-col sm:flex-col flex">

                    <div className="font-['Work+Sans'] xl:flex-row lg:flex-row md:flex-col sm:flex-col flex gap-12 mt-8 lg:pl-0 md:pl-0 sm:pl-40 md:pl-60">
                        <div className="">
                            <h1 className="text-5xl font-semibold">10M+</h1>
                            <h1 className="text-3xl font-semibold pt-4 text-gray-700">Visitors</h1>
                        </div>
                        <div className="">
                            <h1 className="text-5xl font-semibold">1260</h1>
                            <h1 className="text-3xl font-semibold pt-4 text-gray-700">Hotels</h1>
                        </div>
                        <div className="">
                            <h1 className="text-5xl font-semibold">30K+</h1>
                            <h1 className="text-3xl font-semibold pt-4 text-gray-700">Customers</h1>
                        </div>
                    </div>

                    <div className="ml-auto font-normal flex-col lg:pr-0 md:pr-0 sm:pr-36 md:pr-44 lg:pt-0 md:pt-0 sm:pt-10 md:pt-10">
                        <h1 className="text-8xl ">Since</h1>
                        <h1 className="text-8xl ">2005</h1>
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


            <div className=" font-['Work+Sans']">
    <img className="w-full h-full absolute bg-gray-800" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%2011%20%281%29.png" id="register-section"/>
            <div className=" pt-48 relative">
                <div className="lg:flex items-center justify-between text-white px-20 container mx-auto">
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <ul className="z-30 text-white border-r border-gray-500 ">
                      <li className="font-['Work+Sans'] cursor-pointer"> Home</li>
                      <li className="font-['Work+Sans'] py-4 cursor-pointer">Explore</li>
                      <li className="font-['Work+Sans'] cursor-pointer">Packages</li>
                      <li className="font-['Work+Sans'] py-4 cursor-pointer">Timeline</li>
                      <li className="font-['Work+Sans'] cursor-pointer">About</li>
                      <li className="font-['Work+Sans'] py-4 cursor-pointer">Contact</li>
                      </ul>
                      <div className="pl-8 mt-10">
                      <h1 className="text-gray-400 pb-6">Follow us on socials</h1>
                      <div className="flex flex-row gap-x-8 ml-2"> 
                        <image className='cursor-pointer' src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ELEMENTS.svg" width={8.27} height={15.29}/>
                        <image className='cursor-pointer' src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Group%2015.svg" width={8.27} height={15.29}/>
                        <image className='cursor-pointer' src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Vector.svg" width={8.27} height={15.29}/>
                        <image className='cursor-pointer' src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Vector.svg" width={8.27} height={15.29}/>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/3 w-full lg:mt-0 mt-8">
                    <h1 className="lg:text-2xl md:text-xl mb-9 ">Join our mailing list for update about latest packages and deals!</h1>
                    <div className="flex justify-between border-b border-gray-500">
                      <input placeholder="Your email address" className="placeholder-gray-400 py-4 bg-transparent z-30 focus:outline-none"/>
                      </div>
                    </div>
                  </div>
                </div>

</div>
        </div>    
    </>
    
  );
};

export default Index;