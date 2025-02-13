import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex justify-center items-center  md:justify-end">
        <img src={bannerImg} alt="Banner" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">
          New Releases This Week
        </h1>
        <p className="mb-10">
          Enhance your curated reading list with this week's premier literary
          releases, featuring critically acclaimed titles spanning gripping
          thrillers, thought-provoking memoirs, and genre-defining works. These
          new publications cater to diverse literary tastes, offering refined
          selections for discerning readers.
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
