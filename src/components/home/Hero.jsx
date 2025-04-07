import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Full Stack Developer",
      subtitle: "Crafting Digital Experiences with Modern Technologies",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      description: "Specializing in React, Node.js, and Cloud Technologies"
    },
    {
      title: "UI/UX Enthusiast",
      subtitle: "Creating Beautiful and Intuitive User Interfaces",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description: "Focused on User-Centered Design and Modern Aesthetics"
    },
    {
      title: "Problem Solver",
      subtitle: "Building Scalable and Efficient Solutions",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Expert in Database Design and API Development"
    },
    {
      title: "Innovation Driven",
      subtitle: "Exploring New Technologies and Best Practices",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Committed to Continuous Learning and Growth"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    beforeChange: (current, next) => setCurrentSlide(next),
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="relative h-screen py-20" >
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl text-gray-200 mb-8 animate-fade-in-delay">
                  {slide.subtitle}
                </p>
                <p className="text-xl text-gray-300 mb-12 animate-fade-in-delay-2">
                  {slide.description}
                </p>
                <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                  View My Work
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero; 