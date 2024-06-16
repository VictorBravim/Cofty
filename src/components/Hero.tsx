// Hero.tsx
'use client'
import React from 'react';

export default function Hero() {
    return (
        <div className="relative h-full bg-cover bg-center lg:mx-12" style={{ backgroundImage: "url('/Banner.webp')" }}>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white py-72">
                <h1 className="text-5xl font-bold">Coffee House</h1>
                <p className="mt-4 text-2xl">FEEL THE AROMA</p>
                <button className="mt-8 px-6 py-3 bg-white hover:bg-blue-700 text-black font-semibold">
                    DISCOVER MORE
                </button>
            </div>
        </div>
    );
}