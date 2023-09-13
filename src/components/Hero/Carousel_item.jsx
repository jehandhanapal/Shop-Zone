import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function Carousel_item({ item }) {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 7, 7, 0.6)) ,url(${item.url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <>
      <Container className="carousel-item relative min-w-full ">
        <div className="image lg:h-[85vh] h-[50vh] " style={styles}></div>
        <div className="desc absolute top-[15%] flex flex-col items-start lg:top-[25%] md:w-[80%]  lg:w-[60%] w-[90%] text-white ml-8 ">
          <h1 className="lg:text-5xl md:text-4xl text-xl font-semibold">{item.title}</h1>
          <p className="lg:my-16 my-6 lg:text-xl md:text-base text-white text-xs font-medium">{item.content}</p>
          <button className="">
            <Link className="lg:text-xl md:text-base text-sm  font-semibold px-4 pb-2 pt-2 bg-red-600 rounded-lg" to="/products">
              Read More
            </Link>
          </button>
        </div>
      </Container>
    </>
  );
}
const Container = styled.div``;
