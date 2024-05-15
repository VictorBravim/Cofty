// About.tsx
import Image from "next/image";
import about from '@/assets/About.png'

export default function About() {
    return (
        <div className="container mx-auto lg:mt-80 mb-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-m">
            <div className="w-full lg:w-1/2 pl-2 lg:pl-8">
                <h2 className="text-2xl text-white font-bold mb-4">Only Quality Coffee Beans</h2>
                <p className="text-gray-600 mb-4 pr-0 lg:pr-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum sem sit amet fringilla tempus. Morbi ac urna ut ligula convallis malesuada. Sed euismod aliquet orci, eu auctor enim scelerisque eget. Sed nec mauris magna.
                </p>
                <button className="bg-blue-custom-2 text-white font-bold py-2 px-4 rounded">
                    View All
                </button>
            </div>
            <div className="w-full lg:w-1/2 pl-0 lg:pl-8 flex justify-center">
                <Image src={about} alt="Texto" width={500} height={600} />
            </div>
        </div>
    );
}