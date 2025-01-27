import Image from "next/image"
import Contact from "../contacts/Contact"

export default function Portfolio() {
    return (
        <div className="flex w-4/5 sm:w-2/3 items-start justify-center flex-col mx-auto gap-6 sm:gap-0">
            <div className="w-full flex items-center justify-between sm:flex-row flex-col sm:gap-0 gap-3 ">
                <h1 className="flex items-center justify-center text-4xl sm:text-5xl font-bold ">
                    Shrikant Sherkar
                </h1>
                <div className="bg-blue-500 rounded-md  flex items-center justify-center">
                    <Image src={'/shrikant.webp'} alt="image" width={100} height={100}  />
                </div>
            </div>
        </div>
    )
}