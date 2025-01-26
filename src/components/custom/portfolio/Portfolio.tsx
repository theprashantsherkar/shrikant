import Image from "next/image"

export default function Portfolio() {
    return (
        <div className="flex w-full items-center justify-center flex-col">
            <div className="w-1/2 flex items-center justify-between">
                <h1 className="flex items-center justify-center text-4xl font-bold ">
                    Shrikant Sherkar
                </h1>
                <div className="bg-blue-500 rounded-md flex items-center justify-center">
                    <Image src={'/shrikant.webp'} alt="image" width={100} height={100}  />
                </div>
            </div>
            <div className="">
                <h2>Cloud Engineer, Data Analyst </h2>
            </div>
        </div>
    )
}