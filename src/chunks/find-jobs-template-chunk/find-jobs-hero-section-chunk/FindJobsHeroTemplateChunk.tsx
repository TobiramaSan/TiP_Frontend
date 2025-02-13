"use client";
import Image from "next/image";
import React from "react";
import headline from "public/images/headline.svg";
import SelectInput2 from "@/components/inputs/select-input/SelectInput2";
import { LocationIcon, ArrowDown } from "@assets/images";
import searchicon from "public/images/searchicon.svg";
import Navbar from "@/components/navbar/Navbar";
import Button from "@/components/button/Button";

const FindJobsHeroTemplateChunk = () => {
  return (
    <section>
      <Navbar />
      <div className="bg-[#f8f8f8]  md:h-[500px] lg:h-[460px] max-w-full w-full">
        {/* hero components */}
        <div className="flex flex-col  items-center justify-center md:pt-2">
          <div className="flex  flex-col  pt-[3.5rem]  gap-2 items-center  ">
            {/* find your dream job section */}
            <div className="flex  flex-col md:flex-row items-center justify-center gap-[24px]  top-[205px]">
              <h1 className="text-[48px] font-[600] text-[#002360] leading-[52px] font-clash">
                Find your{" "}
              </h1>
              <div
                className="flex flex-col  md:h-[66px] md:w-[255px] h-[44px]  w-[300px]
                md:items-start items-center justify-center mt-0 md:mt-[0.9rem] mx-0"
              >
                <h1 className="text-[#26A4FF] text-[48px] font-[600] font-clash leading-[52px]">
                  dream job
                </h1>
                <Image
                  src={headline}
                  alt="background_pics"
                  className="md:w-[100%] w-[241px] relative h-[14px] md:h-full"
                />
              </div>
            </div>

            <p
              className="font-[400] md:text-[18px] text-[16px] leading-[30px]  font-epilogue text-[#515B6F] md:leading-[32px]
            text-center pt-1 px-1"
            >
              Find your next career at companies like HubSpot, Nike and Dropbox
            </p>
          </div>

          <div className="flex flex-col items-start  gap-[18px] max-w-full w-full px-[1rem] ">
            {/* search Input */}
            <div
              className="flex flex-col lg:flex-row bg-white items-center justify-center  p-[16px] md:p-0 lg:ml-[1rem] lg:w-[1196px] lg:h-[104px] max-w-full  w-[100%]  h-[210px] 
             mt-[2rem] gap-3 relative "
              style={{
                boxShadow: `
                0px 2.71px 4.4px 0px #C0C0C007,
                0px 6.86px 11.12px 0px #C0C0C00A,
                0px 14px 22.68px 0px #C0C0C00C,
                0px 28.84px 46.72px 0px #C0C0C00F,
                0px 79px 128px 0px #C0C0C017
              `,
              }}
            >
              {/* placeholder and search icon for smaller screen*/}
              <div className="flex items-center   lg:w-[485px] w-[100%] lg:px-1 gap-[16px] pt-0  pb-0 lg:pl-[16px] md:px-[1.4rem] ">
                <Image
                  src={searchicon}
                  alt="searchIcon"
                  className=" md:w-[24px] w-[20px] md:h-[24px] h-[20px] ml-[0.4rem] md:ml-0 lg:mt-[1rem]"
                />

                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className=" border-b-[1px] border-gray  bg-transparent rounded-none focus:outline-none 
            focus:ring-0  lg:w-[485px]  w-full h-[60px] items-center  md:mt-2 mt-[0rem] lg:mt-[0.8rem] "
                />
              </div>

              {/* divider */}
              <div className="border-[1px] border-gray my-1 md:h-[66px] lg:mx-2  hidden  lg:flex" />

              {/* florence,italy  */}
              <div className=" lg:w-[485px] w-[100%] items-center  h-[39px] bg-transparent flex rounded-0   lg:mt-[0rem] rounded-bl-none rounded-br-none md:px-[1rem]  lg:px-0  ">
                <Image src={LocationIcon} alt="" className="" />

                <SelectInput2
                  label=""
                  placeholder="Florence, Italy"
                  options={[{ id: "Country", name: "City, Country" }]}
                  overrideStyles="border-r-0 border-l-0 border-t-0  rounded-0 bg-transparent items-center md:w-full md:h-[45px] h-[39px] lg:h-[70px] border-b-[1px] border-gray rounded-br-none  rounded-bl-none w-full  flex  "
                  onChange={() => {}}
                  iconRight={
                    <div className="w-[16px] h-[16px] opacity-[50%]">
                      <Image
                        src={ArrowDown}
                        alt=""
                        className="absolute  w-[16px] h-[16px]  text-[#25324B]"
                      />
                    </div>
                  }
                />
              </div>

              {/* button */}
              <div className="w-full md:px-1  lg:w-[107px] md:h-[50px] h-[42px] ">
                <Button
                  overrideStyles=" bg-[#0046BF] text-white md:p-3 gap-1 w-[98%] flex text-center items-center justify-center ml-[0.4rem]
               lg:w-[107px] md:h-[50px h-[42px]  mt-[0rem] md:mt-[-0.4rem] lg:mt-[0.55rem] rounded-none"
                  aria-label="Search"
                >
                  Search <span className="md:hidden block">my job</span>
                </Button>
              </div>
            </div>

            {/* popular text */}
            <div
              className=" text-start sm:text-start md:p-2  pb-[1rem] lg:ml-[1rem]
          "
            >
              <p className="opacity-70 font-epilogue text-[16px] font-[400] leading-25px] text-[#1B1B1B]">
                Popular : <br className="md:hidden block" /> UI Designer, UX
                Researcher, Android, Admin
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindJobsHeroTemplateChunk;
