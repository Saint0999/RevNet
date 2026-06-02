import Sidebar from './Sidebar.tsx'
import Cards from './Cards.tsx'
import Cards2 from './Cards2.tsx'
import RevenueChart from './RevenueChart.tsx'
import ActivityTicker from './ActivityTicker.tsx'
import RecentOrders from './RecentOrders.tsx'
import {useState} from 'react'

const dashboardData: Record<string, any> = {
  '7 Days': {
    revenue: 13750,
    revenuePercentage: 3.2,
    profit: 4880,
    profitPercentage: 6.5,
    orders: 428,
    ordersPercentage: 3.2,
    cancelled: 32,
    cancelledPercentage: -2.4,
  },
  '30 Days': {
    revenue: 52400,
    revenuePercentage: 12.5,
    profit: 18900,
    profitPercentage: 15.2,
    orders: 1650,
    ordersPercentage: 8.4,
    cancelled: 145,
    cancelledPercentage: -1.2,
  },
  '90 Days': {
    revenue: 145000,
    revenuePercentage: -4.2,
    profit: 42000,
    profitPercentage: -6.1,
    orders: 4800,
    ordersPercentage: -2.5,
    cancelled: 520,
    cancelledPercentage: 4.8,
  },
  '12 Months': {
    revenue: 620000,
    revenuePercentage: 24.8,
    profit: 215000,
    profitPercentage: 28.4,
    orders: 22000,
    ordersPercentage: 18.2,
    cancelled: 1950,
    cancelledPercentage: -8.5,
  }
};

const chartData: Record<string, any[]> = {
  '7 Days': [
    { name: 'Mon', revenue: 1450 }, 
    { name: 'Tue', revenue: 1200 }, 
    { name: 'Wed', revenue: 1850 }, 
    { name: 'Thu', revenue: 1600 }, 
    { name: 'Fri', revenue: 2200 }, 
    { name: 'Sat', revenue: 2900 }, 
    { name: 'Sun', revenue: 2650 }  
  ],
  '30 Days': [
    { name: 'Week 1', revenue: 11200 }, 
    { name: 'Week 2', revenue: 14500 },
    { name: 'Week 3', revenue: 10800 }, 
    { name: 'Week 4', revenue: 15900 }
  ],
  '90 Days': [
    { name: 'Wk 1-2', revenue: 32000 }, 
    { name: 'Wk 3-4', revenue: 28500 },
    { name: 'Wk 5-6', revenue: 29000 },
    { name: 'Wk 7-8', revenue: 21500 }, 
    { name: 'Wk 9-10', revenue: 18000 }, 
    { name: 'Wk 11-12', revenue: 16000 }
  ],
  '12 Months': [
    { name: 'Jan', revenue: 35000 }, 
    { name: 'Feb', revenue: 38000 },
    { name: 'Mar', revenue: 43000 }, 
    { name: 'Apr', revenue: 34000 },
    { name: 'May', revenue: 52000 },
    { name: 'Jun', revenue: 49000 }, 
    { name: 'Jul', revenue: 46000 }, 
    { name: 'Aug', revenue: 48000 }, 
    { name: 'Sep', revenue: 57000 }, 
    { name: 'Oct', revenue: 62000 }, 
    { name: 'Nov', revenue: 84000 }, 
    { name: 'Dec', revenue: 72000 }  
  ]
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('7 Days');

  const timeframes = ['7 Days', '30 Days', '90 Days', '12 Months'];
  const currentData = dashboardData[activeButton];

  const currentChartData = chartData[activeButton];

  return (
    <div className="flex h-screen bg-[#0e1215] overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
      
      <main className="flex-1 overflow-y-auto">
        
        <div className="max-w-6xl mx-auto pt-20 px-6 pb-8 md:p-10">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
            
            <div>
              <h1 className="text-white text-3xl font-semibold tracking-tight mb-1">
                Dashboard
              </h1>
              <p className="text-gray-400 text-sm font-medium">
                Overview
              </p>
            </div>

            <div className="flex items-center gap-4">
              
              <div className="flex items-center border border-gray-800 rounded-md overflow-hidden bg-[#13171c]">
                {timeframes.map((timeframe, index) => (
                  <button
                    key={timeframe}
                    onClick={() => setActiveButton(timeframe)}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      activeButton === timeframe
                        ? 'text-white bg-gray-800'
                        : 'text-gray-400 hover:bg-gray-800/40'
                    } ${
                      index !== 0 ? 'border-l border-gray-800' : ''
                    }`}
                  >
                    {timeframe}
                  </button>
                ))}
              </div>
              
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 select-none">
            
            <div className="flex flex-col gap-4 h-full justify-between">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Cards title="Revenue" revenue={currentData.revenue} percentage={currentData.revenuePercentage}/>
                <Cards title="Net Profit" revenue={currentData.profit} percentage={currentData.profitPercentage}/>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Cards2 title="Orders" orders={currentData.orders} percentage={currentData.ordersPercentage}/>
                <Cards2 title="Cancelled" orders={currentData.cancelled} percentage={currentData.cancelledPercentage}/>
              </div>

              <div className="mt-auto">
                <ActivityTicker />
              </div>

            </div>

            <div className="h-full">
              <RevenueChart data={currentChartData} />
            </div>
          </div>

          <div className="min-h-[350px] xl:h-full mt-8">
            <RecentOrders/>
          </div>
          

        </div>
      </main>
    </div>
  )
}

export default App
