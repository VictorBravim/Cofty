// Footer.tsx
'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import logo from '@/assets/logo.png'

export default function Footer() {
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition < window.innerHeight - 100) {
            setActiveSection('home');
        } else if (scrollPosition < 2 * window.innerHeight - 100) {
            setActiveSection('produtos');
        } else if (scrollPosition < 3 * window.innerHeight - 100) {
            setActiveSection('sobre');
        } else {
            setActiveSection('contato');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-transparent text-white p-8">
            <div className="mx-5 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="flex items-center mb-2 lg:mb-0">
                    <Image src={logo} alt="Texto" width={150} height={32} />
                </div>
                <div className="md:flex space-x-2 lg:space-x-12 mt-4 md:mt-0">
                    <button
                        className={`text-base md:text-lg ${activeSection === 'home' ? 'bg-transparent text-white py-2 border-b-2 border-white' : ''}`}
                        onClick={() => scrollToSection('home')}>
                        HOME
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'produtos' ? 'bg-transparent text-white py-2 border-b-2 border-white' : ''}`}
                        onClick={() => scrollToSection('produtos')}>
                        PRODUTOS
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'sobre' ? 'bg-transparent text-white py-2 border-b-2 border-white' : ''}`}
                        onClick={() => scrollToSection('sobre')}>
                        SOBRE
                    </button>
                    <button
                        className={`text-base md:text-lg ${activeSection === 'contato' ? 'bg-transparent text-white py-2 border-b-2 border-white' : ''}`}
                        onClick={() => scrollToSection('contato')}>
                        CONTATO
                    </button>
                </div>
            </div>
        </footer>
    );
}