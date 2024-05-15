// Produto.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import americano from '@/assets/Cafe1.png';
import latte from '@/assets/Cafe2.png'
import mocha from '@/assets/Cafe3.png'

const produto = [
    { id: 1, nome: 'Americano', preco: 6, imagem: americano },
    { id: 2, nome: 'Latte', preco: 12, imagem: latte },
    { id: 3, nome: 'Mocha', preco: 8, imagem: mocha },
];

const Produto: React.FC = () => {
    return (
        <div id='produtos' className="flex flex-col justify-center items-center py-6">
            <h2 className="text-brown-custom text-3xl font-bold mb-6">Produtos</h2>
            <div className="w-full px-2 lg:px-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {produto.map((produto) => (
                    <div key={produto.id} className="flex flex-col items-center bg-blue-custom shadow-lg overflow-hidden">
                        <div className="relative py-2">
                            <Image
                                src={produto.imagem}
                                alt={produto.nome}
                                objectFit="cover"
                                className='my-8'
                                width={250} 
                                height={32}
                            />
                        </div>
                        <div className="w-full flex flex-row justify-between items-center p-8 mt-8 px-20">
                            <div className='flex justify-center items-center gap-4'>
                                <h3 className="text-white text-2xl font-semibold">{produto.nome}</h3>
                                <p className="text-xl text-white">${produto.preco}</p>
                            </div>
                            <div>
                                <button className="bg-white hover:bg-black hover:text-white text-black py-2 px-4">
                                    BUY
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Produto;