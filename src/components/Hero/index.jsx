import React, { useEffect, useState } from "react";
import Carousel_item from "./Carousel_item";
import { styled } from "styled-components";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const timer = useEffect(() => {
    setTimeout(() => {
      if (activeIndex === 0) {
        setActiveIndex(1);
      } else if (activeIndex === 1) {
        setActiveIndex(2);
      } else if (activeIndex === 2) {
        setActiveIndex(0);
      }
    }, 5000);
    return clearTimeout(timer);
  }, [activeIndex]);

  const items = [
    {
      title: "Raining Offers For Upcoming Winter",
      content: "15% Off On All Products",
      url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Jewelry Of Precious Craft",
      content: "Because every piece caries a precious story",
      url: "https://images.unsplash.com/photo-1585960622850-ed33c41d6418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "We Print What You Want!",
      content: "Create your own trend with us",
      url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <Container className="carousel relative   overflow-hidden ">
      <div className="inner   " style={{ transform: `translate(-${activeIndex * 100}%) ` }}>
        {items.map((item) => {
          return <Carousel_item item={item} />;
        })}
      </div>
      <div className="indicators relative  bottom-8 justify-center flex gap-3">
        <li key="slide-1" className={`indicator ${activeIndex === 0 ? "active" : "indicator"}`} onClick={() => setActiveIndex(0)}></li>
        <li key="slide-2" className={`indicator ${activeIndex === 1 ? "active" : "indicator"}`} onClick={() => setActiveIndex(1)}></li>
        <li key="slide-3" className={`indicator ${activeIndex === 2 ? "active" : "indicator"}`} onClick={() => setActiveIndex(2)}></li>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .inner {
    width: 100%;
    display: inline-flex;
    transition: transform 0.3s;
  }
  .indicators {
    .indicator {
      list-style: none;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: white;
    }
    .active {
      background-color: red;
    }
  }
`;
