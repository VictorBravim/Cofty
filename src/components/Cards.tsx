// Cards.tsx
import Image from "next/image";
import atom from '@/assets/atom.webp'
import satelite from '@/assets/satelite.webp'
import terra from '@/assets/terra.webp'

export default function Cards() {
    return (
        <div className="w-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 mt-s" style={{ marginTop: '900px' }}>
            <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:space-x-6">
                <div className="bg-blue-custom flex flex-col items-center text-white rounded-lg shadow-lg p-6 text-center w-full lg:w-1/3 mb-4 lg:mb-0">
                <h1 className="text-xl font-semibold mb-2">LEO</h1>
                    <h2 className="text-xl font-semibold mb-2">300-1500 KM</h2>
                    <p className="text-gray-600 mb-4">(Órbita terrestre baixa)</p>
                </div>
                <div className="bg-blue-custom flex flex-col items-center text-white rounded-lg shadow-lg p-6 text-center w-full lg:w-1/3 mb-4 lg:mb-0">
                <h1 className="text-xl font-semibold mb-2">Hi-SPEED</h1>
                    <h2 className="text-xl font-semibold mb-2">22,236 MIL</h2>
                    <p className="text-gray-600 mb-4">(Órbita geoestacionária)</p>
                </div>
                <div className="bg-blue-custom flex flex-col items-center text-white rounded-lg shadow-lg p-6 text-center w-full lg:w-1/3 mb-4 lg:mb-0">
                <h1 className="text-xl font-semibold mb-2">TERRA</h1>
                    <h2 className="text-xl font-semibold mb-2">365 DIAS</h2>
                    <p className="text-gray-600 mb-4">(Período orbital)</p>
                </div>
            </div>
        </div>
    );
}
