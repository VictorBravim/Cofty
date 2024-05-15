// About.tsx
import Image from "next/image";
import about from '@/assets/About.png'
import { GiCoffeeBeans, GiCoffeePot } from "react-icons/gi";
import { SiCoffeescript } from "react-icons/si";

export default function About() {
    return (
        <div className="container mx-auto lg:mt-80 mb-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between py-12">
            <div className="w-full lg:w-1/2 pl-2 lg:pl-8">
                <p className="text-lg text-brown-custom mb-2 p-1">SOME BENEFITS</p>
                <h2 className="text-6xl text-white font-bold mb-6">Only Quality Coffee Beans</h2>
                <div className="flex flex-row mb-5">
                    <div className="bg-blue-custom p-3 rounded-full text-5xl text-brown-custom mr-5"><GiCoffeeBeans /></div>
                    <div className="flex flex-col">
                        <h2 className="text-xl text-white font-bold">Great Coffee Beans</h2>
                        <p className="text-md text-gray-500 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum sem sit amet fringilla tempus.</p>
                    </div>
                </div>
                <div className="flex flex-row mb-5">
                    <div className="bg-blue-custom p-3 rounded-full text-5xl text-brown-custom mr-5"><SiCoffeescript /></div>
                    <div className="flex flex-col">
                        <h2 className="text-xl text-white font-bold">Best Coffee Flavers</h2>
                        <p className="text-md text-gray-500 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum sem sit amet fringilla tempus.</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="bg-blue-custom p-3 rounded-full text-5xl text-brown-custom mr-5"><GiCoffeePot /></div>
                    <div className="flex flex-col">
                        <h2 className="text-xl text-white font-bold">Incredible Coffee Menu</h2>
                        <p className="text-md text-gray-500 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum sem sit amet fringilla tempus.</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 pl-0 lg:pl-8 flex justify-center">
                <Image src={about} alt="Texto" width={500} height={600} />
            </div>
        </div>
    );
}