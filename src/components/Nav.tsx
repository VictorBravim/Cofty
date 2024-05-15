// Nav.tsx  <Image src={logo} alt="Texto" width={150} height={32} />
'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";

export default function Nav() {
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
        <nav className="bg-transparent p-4 px-8 absolut w-full z-20 flex flex-col">
            <div className="mx-5 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                <div className="flex items-center text-white text-left">
                    <div className='flex flex-col'>
                    <h2>We are Here</h2>
                    <p>5 Rue Dolou</p>
                    </div>
                </div>
                <div className="flex items-center text-white space-x-6 lg:space-x-12">
                    <h1 className='text-xl'>CAFTY</h1>
                </div>
                <div className="flex items-center text-white text-right">
                    <div className='flex flex-col'>
                    <h2>Working House</h2>
                    <p>5 Rue Dolou</p>
                    </div>
                </div>
            </div>
            <div className="mx-5 flex flex-col lg:flex-row items-center justify-center lg:justify-between border-t border-gray-500 mt-5 pt-5">
                <div className="flex items-center">
                </div>
                <div className="flex items-center text-white space-x-6 lg:space-x-12">
                    <button
                        className={`text-base md:text-md ${activeSection === 'home' ? 'bg-transparent text-white py-2' : ''}`}
                        onClick={() => scrollToSection('home')}>
                        HOME
                    </button>
                    <button
                        className={`text-base md:text-md ${activeSection === 'produtos' ? 'bg-transparent text-white py-2' : ''}`}
                        onClick={() => scrollToSection('produtos')}>
                        PRODUTOS
                    </button>
                    <button
                        className={`text-base md:text-md ${activeSection === 'sobre' ? 'bg-transparent text-white py-2' : ''}`}
                        onClick={() => scrollToSection('sobre')}>
                        SOBRE
                    </button>
                    <button
                        className={`text-base md:text-md ${activeSection === 'contato' ? 'bg-transparent text-white py-2' : ''}`}
                        onClick={() => scrollToSection('contato')}>
                        CONTATO
                    </button>
                </div>
                <div className="flex items-center">
                </div>
            </div>
        </nav>
    );
}