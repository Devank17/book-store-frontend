import React, { useEffect, useState } from "react";
import BookCard from "../books/BookCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";
const category = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSellers = () => {
  const [selectedCat, setSelectedCat] = useState("Choose a genre");

  const {data:books=[]}= useFetchAllBooksQuery();

  const filteredBooks =
    selectedCat === "Choose a genre"
      ? books
      : books.filter((book) => book.category === selectedCat.toLowerCase());


  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6 ">Top Sellers</h2>
      {/* Category filtering */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(event) => setSelectedCat(event.target.value)}
          name="category"
          id="category"
          className="border bg-[#eaeaea] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {category.map((category, idx) => (
            <option key={idx} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 2.25,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 &&
          filteredBooks.map((book, idx) => (
            <SwiperSlide key={idx}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopSellers;
