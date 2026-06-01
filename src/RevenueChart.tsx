import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RevenueChartProps {
  data: any[];
}

function RevenueChart({ data }: RevenueChartProps) {
  
  const isPositive = data.length > 1 ? data[data.length - 1].revenue >= data[0].revenue : true;
  
  const chartColor = isPositive ? "#34d399" : "#ef4444"; 

  return (
    <div className="bg-[#13171c] border border-gray-800 rounded-xl p-6 w-full h-full min-h-[300px] flex flex-col font-sans">
      
      <div className="mb-6">
        <h3 className="text-gray-400 text-xs font-semibold tracking-widest uppercase">
          Revenue Overview
        </h3>
      </div>

      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColor} stopOpacity={0.4}/>
                <stop offset="95%" stopColor={chartColor} stopOpacity={0}/>
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#262d36" vertical={false} />
            
            <XAxis 
              dataKey="name" 
              stroke="#6b7280" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              dy={10} 
            />
            
            <YAxis 
              stroke="#6b7280" 
              fontSize={12} 
              tickLine={false} 
              axisLine={false} 
              tickFormatter={(value) => `$${value >= 1000 ? value / 1000 + 'k' : value}`} 
            />
            
            <Tooltip
              contentStyle={{ 
                backgroundColor: '#181d24', 
                borderColor: '#262d36', 
                borderRadius: '8px',
                color: '#f3f4f6'
              }}
              itemStyle={{ color: chartColor }}
              formatter={(value: any) => [`$${value.toLocaleString('en-US')}`, 'Revenue']}
            />
            
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke={chartColor} 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;