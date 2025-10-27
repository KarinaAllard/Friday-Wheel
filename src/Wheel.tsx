import { motion } from "framer-motion";
import { useState } from "react";

type WheelProps = {
    entries: string[];
};

export const Wheel = ({ entries }: WheelProps) => {
    const [rotation, setRotation] = useState(0);
    const [spinning, setSpinning] = useState(false);
    const sliceAngle = 360 / entries.length;

    const colors = [
        "var(--pastel-green)",
        "var(--pastel-blue)",
        "var(--pastel-pink)",
        "var(--pastel-red)",
        "var(--pastel-yellow)",
    ];

    const spinDuration = 4;
    const size = 320;
    const radius = size / 2;
    const center = radius;

    const spinWheel = () => {
        if (spinning) return;
        setSpinning(true);

        const spins = Math.floor(Math.random() * 360) + 720;
        setRotation(prev => prev + spins);
    };

    return (
        <div className="flex flex-col items-center relative gap-4">
            <motion.div 
                className="w-80 h-80 relative rounded-full overflow-hidden"
                animate={{ rotate: rotation }}
                transition={{ duration: spinDuration, ease: [0.33, 1, 0.68, 1] }}
                onAnimationComplete={() => {
                    setSpinning(false);
                }}
            >
            {entries.map((entry, i) => {
                const startAngle = i * sliceAngle;
                const endAngle = startAngle + sliceAngle;
                const largeArc = sliceAngle > 180 ? 1 : 0;
                const x1 = center + radius * Math.cos((startAngle * Math.PI) / 180);
                const y1 = center + radius * Math.sin((startAngle * Math.PI) / 180);
                const x2 = center + radius * Math.cos((endAngle * Math.PI) / 180);
                const y2 = center + radius * Math.sin((endAngle * Math.PI) / 180);
                const path = `M${center},${center} L${x1},${y1} A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z`;
                const color = colors[i % colors.length];

                return <svg key={i} className="absolute inset-0 w-full h-full"><path d={path} fill={color} /></svg>
            })}

            </motion.div>
            <div className="absolute top-0 left-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-16 border-b-white transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <button 
                className="px-4 py-2 bg-(--pastel-green) to-(--pastel-green) border-t border-t-white text-black text-2xl rounded-2xl hover:bg-linear-to-l hover:from-(--pastel-yellow) hover:via-(--pastel-green) hover:scale-105 hover:to-(--pastel-pink) cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={spinWheel}
                disabled={spinning}
            >
                Spin the Wheel!
            </button>
        </div>
    )
}