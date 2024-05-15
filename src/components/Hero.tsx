// Hero.tsx
'use client'
import React from 'react';

export default function Hero() {
    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <h1 className="text-5xl font-bold">Seu Texto Aqui</h1>
                <p className="mt-4 text-lg">Texto descritivo adicional pode ser colocado aqui.</p>
                <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md">
                    Clique Aqui
                </button>
            </div>
        </div>
    );
}