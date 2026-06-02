interface CardProps {
  title: string;
  revenue: number;
  percentage: number;
}

function Cards(props: CardProps) {
  const isPositive = props.percentage >= 0;

  return (
    <div className="bg-[#13171c] border border-gray-800 rounded-xl p-6 flex-col justify-between h-auto w-full md:h-full px-6 py-5 shadow-lg font-sans">
      
      <h3 className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-4">
        {props.title}
      </h3>

      <p className="text-white text-4xl font-semibold mb-4">
        ${props.revenue.toLocaleString('en-US')}
      </p>

      <div className="flex justify-between items-end">
        <span 
          className={`text-sm font-medium ${
            isPositive ? 'text-emerald-400' : 'text-red-500'
          }`}
        >
          {isPositive ? '+ ' : '- '}{Math.abs(props.percentage)}%
        </span>
      </div>
    </div>
  );
}

export default Cards;