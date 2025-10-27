type WheelProps = {
    entries: string[];
};

export const Wheel = ({ entries }: WheelProps) => {
      const sliceAngle = 360 / entries.length;

      const colors = [
        "var(--pastel-green)",
        "var(--pastel-blue)",
        "var(--pastel-pink)",
        "var(--pastel-red)",
        "var(--pastel-yellow)",
      ];

    return (
        <div>
        {entries.map((entry, i) => {
            const startAngle = i * sliceAngle;
            const endAngle = startAngle + sliceAngle;
            const radius = 150;
            const center = radius;
            const largeArc = sliceAngle > 180 ? 1 : 0;
            const x1 = center + radius * Math.cos((startAngle * Math.PI) / 180);
            const y1 = center + radius * Math.sin((startAngle * Math.PI) / 180);
            const x2 = center + radius * Math.cos((endAngle * Math.PI) / 180);
            const y2 = center + radius * Math.sin((endAngle * Math.PI) / 180);
            const path = `M${center},${center} L${x1},${y1} A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z`;
            const color = colors[i % colors.length];

            return <svg key={i} className="absolute top-50 inset-0 w-full h-full"><path d={path} fill={color} /></svg>
        })}
        </div>
    )
}