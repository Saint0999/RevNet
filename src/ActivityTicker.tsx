import upTriangle from './assets/uptriangle.png';
import downTriangle from './assets/downtriangle.png';

function ActivityTicker() {
  const orders = [
    { text: "ORD-8492 Confirmed", trend: "up" },
    { text: "ORD-8491 Refunded", trend: "down" },
    { text: "ORD-8493 Confirmed", trend: "up" },
    { text: "ORD-8399 Confirmed", trend: "up" },
    { text: "ORD-8494 Cancelled", trend: "down" },
    { text: "ORD-8410 Confirmed", trend: "up" },
    { text: "ORD-8501 Confirmed", trend: "up" },
    { text: "ORD-8502 Confirmed", trend: "up" },
    { text: "ORD-8498 Cancelled", trend: "down" },
    { text: "ORD-8505 Confirmed", trend: "up" },
    { text: "ORD-8509 Confirmed", trend: "up" },
    { text: "ORD-8488 Refunded", trend: "down" },
  ];

  const tickerItems = [...orders, ...orders];

  return (
    <div className="bg-[#13171c] border border-gray-800 rounded-xl p-4 flex items-center overflow-hidden w-full relative select-none">
      
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 50s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="animate-marquee gap-8 pl-8">
        {tickerItems.map((item, index) => (
          <span 
            key={index} 
            className="text-sm font-medium text-gray-400 whitespace-nowrap flex items-center gap-2"
          >
            <img 
              src={item.trend === 'up' ? upTriangle : downTriangle} 
              alt={item.trend} 
              className="w-3 h-3 object-contain" 
            />
            {item.text}
          </span>
        ))}
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#13171c] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#13171c] to-transparent z-10 pointer-events-none"></div>

    </div>
  );
}

export default ActivityTicker;