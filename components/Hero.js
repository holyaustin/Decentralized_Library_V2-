import React from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "24K",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "19",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Contents Creators",
      number: "560",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            Learn and earn made easy with <strong>Decentralized Library</strong>.
          </h1> <br />
          <p className="leading-10 text-black-500 mt-4 mb-6 text-justify text-lg my-15">
          A web3 library that offers you the opportunity to learn and earn. We offer you you diversity of learning resources both as ebooks and video-books. Materials are curated from various categories. Connect your wallet, select a category, select a book to read or watch a video book, take the quiz and earn NFTs.
          </p>
          <div className="flex flex-row my-5 ml-2 mr-2 space-x-8">
          <a href="/traverse">
            <ButtonPrimary>Traverse Library</ButtonPrimary>
          </a>
          <a href="/create">
            <ButtonPrimary>Create Ebooks</ButtonPrimary>
            </a>
          </div>
        </div>
        <div className="flex w-full">
          <div className="h-full w-full mt-10">
            <Image
              src="/assets/Illustration1.png"
              alt="Student1"
              quality={100}
              width={612}
              height={423}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
