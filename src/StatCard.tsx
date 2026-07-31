interface StatCardProps {
  title: string;
  value: number;
  percentage: number;
  /** Currency values get a "$" prefix; plain counts do not. */
  format?: "currency" | "number";
}

function StatCard({ title, value, percentage, format = "number" }: StatCardProps) {
  const isPositive = percentage >= 0;
  const formattedValue = value.toLocaleString("en-US");

  return (
    <div className="bg-[#13171c] border border-gray-800 rounded-xl flex flex-col justify-between h-full w-full px-6 py-5 shadow-lg font-sans">

      <h3 className="text-gray-400 text-xs font-semibold tracking-widest uppercase mb-4">
        {title}
      </h3>

      <p className="text-white text-4xl font-semibold mb-4">
        {format === "currency" ? `$${formattedValue}` : formattedValue}
      </p>

      <div className="flex justify-between items-end">
        <span
          className={`text-sm font-medium ${
            isPositive ? 'text-emerald-400' : 'text-red-500'
          }`}
        >
          {isPositive ? '+ ' : '- '}{Math.abs(percentage)}%
        </span>
      </div>
    </div>
  );
}

export default StatCard;
