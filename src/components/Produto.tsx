// Produto.tsx
'use client'
import React from 'react';
import Image from 'next/image';
import cafe from '@/assets/Cafe1.png';
import cake from '@/assets/Cafe2.png'
import cupcake from '@/assets/Cafe3.png'

const produto = [
    { id: 1, nome: 'Coffee', preco: 6, imagem: cafe },
    { id: 2, nome: 'Cake', preco: 12, imagem: cake },
    { id: 3, nome: 'Cupcake', preco: 8, imagem: cupcake },
];

const Produto: React.FC = () => {
    return (
        <div id='produto' className="mx-8 lg:mx-12 py-6">
            <h2 className="text-white text-2xl font-bold mb-6">Produtos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {produto.map((produto) => (
                    <div key={produto.id} className="flex flex-col items-center bg-brown-custom shadow-lg overflow-hidden">
                        <div className="relative w-full h-full py-48">
                            <Image
                                src={produto.imagem}
                                alt={produto.nome}
                                layout="fill"
                                objectFit="cover"
                                className='my-8'
                            />
                        </div>
                        <div className="w-full flex flex-row justify-between p-8 mt-8 px-20">
                            <div>
                                <h3 className="text-white text-lg font-semibold mb-2">{produto.nome}</h3>
                                <p className="text-white">${produto.preco}</p>
                            </div>
                            <div>
                                <button className="mt-4 bg-white hover:bg-black hover:text-white text-black py-2 px-4">
                                    add
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