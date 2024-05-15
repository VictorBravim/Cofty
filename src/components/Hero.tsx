// Hero.tsx
'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import banner1 from '@/assets/banner1.png'
import banner2 from '@/assets/banner2.png'
import banner3 from '@/assets/banner3.png'

export default function Hero() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        adaptiveHeight: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div id='home' className="w-full px-8 lg:px-12">
            <Slider {...sliderSettings}>
                <div className='shadow-lg'>
                    <Image src={banner1} className="bg-white w-full h-1/2 object-cover pointer-events-none" alt="Slide 1" />
                </div>
                <div className='shadow-lg'>
                    <Image src={banner2} className="bg-white w-full h-1/2 object-cover pointer-events-none" alt="Slide 2" />
                </div>
                <div className='shadow-lg'>
                    <Image src={banner3} className="bg-white w-full h-1/2 object-cover pointer-events-none" alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
}