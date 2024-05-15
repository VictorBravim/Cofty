// Cards.tsx
import Image from "next/image";
import cafe1 from '@/assets/Cafe1.png'
import cafe2 from '@/assets/Cafe2.png'
import cafe3 from '@/assets/Cafe3.png'

export default function Cards() {
    return (
        <div className="w-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 mt-s" style={{ marginTop: '980px' }}>
            <div className="hidden lg:block">
                <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:space-x-12">
                    <div className="bg-blue-custom flex flex-col items-center text-white shadow-lg p-2 px-12 text-center w-full lg:w-1/4 mb-4 lg:mb-0">
                        <Image src={cafe1} alt="Texto" width={150} height={32} />
                        <h1 className="text-xl font-semibold mb-2">Great Americano</h1>
                        <h2 className="text-gray-500  text-md font-semibold mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <p className="bg-white text-black p-2 mb-4">DISCOVER MORE</p>
                    </div>
                    <div className="bg-blue-custom flex flex-col items-center text-white shadow-lg p-2 px-12 text-center w-full lg:w-1/4 mb-4 lg:mb-0">
                        <Image src={cafe2} alt="Texto" width={150} height={32} />
                        <h1 className="text-xl font-semibold mb-2">Delicious Latte</h1>
                        <h2 className="text-gray-500  text-md  font-semibold mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <p className="bg-white text-black p-2 mb-4">DISCOVER MORE</p>
                    </div>
                    <div className="bg-blue-custom flex flex-col items-center text-white shadow-lg p-2 px-12 text-center w-full lg:w-1/4 mb-4 lg:mb-0">
                        <Image src={cafe3} alt="Texto" width={150} height={32} />
                        <h1 className="text-xl font-semibold mb-2">Best Mocha</h1>
                        <h2 className="text-gray-500 text-md  font-semibold mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <p className="bg-white text-black p-2 mb-4">DISCOVER MORE</p>
                    </div>
                </div>
            </div>
        </div>
    );
}