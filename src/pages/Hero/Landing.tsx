import Portfolio from "@/components/custom/portfolio/Portfolio";
import { Squares } from "@/components/ui/squares-background";

export default function Landing() {
    return (
        <div className="space-y-8">
            <div className="relative h-screen   overflow-hidden bg-[#060606]">
                <Squares
                    direction="diagonal"
                    speed={0.5}
                    squareSize={40}
                    borderColor="#333"
                    hoverFillColor="#222"
                    className="absolute"
                />
                <div className="relative text-white top-1/4 px-6">
                    <Portfolio/> </div>
            </div>
        </div>
    )
}