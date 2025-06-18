import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

function Caroussel() {
    const slides = [
        {
            url: '/hero_img/home.jpg',
            title: 'Bienvenue Sur Creamy Milk Candies',
            description: 'Ayez un apperçu du paradis.',
            buttonText: 'Lire plus',
            buttonLink: '#about'
        },
        {
            url: '/hero_img/delivery.jpg',
            title: 'Soyez livré où que vous soyez !',
            description: '',
            buttonText: 'Commander',
            buttonLink: '/Order_Now'
        },
        {
            url: '/hero_img/personalise.jpeg',
            title: 'Un service personnalisé pour chaque client',
            description: '',
            buttonText: 'Commander',
            buttonLink: '/Order_Now'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);

    useEffect(() => {
        let autoScrollInterval;

        const startAutoScroll = () => {
            autoScrollInterval = setInterval(() => {
                nextSlide();
            }, 7000); // Défilement toutes les 5 secondes
        };

        const stopAutoScroll = () => {
            clearInterval(autoScrollInterval);
        };

        if (isAutoScrolling) {
            startAutoScroll();
        } else {
            stopAutoScroll();
        }

        return () => {
            stopAutoScroll();
        };
    }, [currentIndex, isAutoScrolling]);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handleMouseEnter = () => {
        setIsAutoScrolling(false);
    };

    const handleMouseLeave = () => {
        setIsAutoScrolling(true);
    };

    return (
        <div
            className="max-w-[1700px] h-[820px] w-full m-auto pt-10 px-4 relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative"
            >
                {/* Overlay for text readability */}
                <div className="absolute inset-0 rounded-2xl bg-black/35 flex items-center justify-center text-center p-4">
                    <div className="text-white">
                        <h2 className="text-5xl font-bold">{slides[currentIndex].title}</h2>
                        <p className="mt-2 text-lg">{slides[currentIndex].description}</p>
                        <a
                            href={slides[currentIndex].buttonLink}
                            className="mt-10 inline-block px-6 py-3 bg-red-500 border border-red-500 text-white font-semibold rounded-lg hover:bg-white/30 hover:text-white transition"
                        >
                            {slides[currentIndex].buttonText}
                        </a>
                    </div>
                </div>
            </div>

            {/* Left arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <ChevronLeftIcon onClick={prevSlide} className="h-10" />
            </div>

            {/* Right arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <ChevronRightIcon onClick={nextSlide} className="h-10" />
            </div>
        </div>
    );
}

export default Caroussel;
