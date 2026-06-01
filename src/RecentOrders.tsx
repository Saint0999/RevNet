import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table"; 

const orders = [
  { id: "ORD-8502", customer: "Liam Gallagher", status: "Confirmed", date: "Today, 10:42 AM", amount: "$120.00" },
  { id: "ORD-8501", customer: "Emma Watson", status: "Confirmed", date: "Today, 09:15 AM", amount: "$890.00" },
  { id: "ORD-8500", customer: "James Chen", status: "Pending", date: "Today, 08:30 AM", amount: "$340.50" },
  { id: "ORD-8499", customer: "Sophia Patel", status: "Confirmed", date: "Today, 07:12 AM", amount: "$2,100.00" },
  { id: "ORD-8498", customer: "Noah Jenkins", status: "Cancelled", date: "Yesterday, 11:45 PM", amount: "$45.00" },
  { id: "ORD-8497", customer: "Isabella Martinez", status: "Confirmed", date: "Yesterday, 09:20 PM", amount: "$55.00" },
  { id: "ORD-8496", customer: "William Thompson", status: "Confirmed", date: "Yesterday, 06:15 PM", amount: "$185.00" },
  { id: "ORD-8495", customer: "Marcus Johnson", status: "Confirmed", date: "Yesterday, 04:10 PM", amount: "$95.00" },
  { id: "ORD-8494", customer: "Olivia Davis", status: "Refunded", date: "Yesterday, 01:30 PM", amount: "$1,250.00" },
  { id: "ORD-8493", customer: "Lucas White", status: "Confirmed", date: "Oct 28, 2026", amount: "$420.00" },
  { id: "ORD-8492", customer: "Mia Robinson", status: "Confirmed", date: "Oct 28, 2026", amount: "$75.00" },
  { id: "ORD-8491", customer: "Ethan Clark", status: "Pending", date: "Oct 28, 2026", amount: "$890.00" },
  { id: "ORD-8490", customer: "Amelia Lewis", status: "Confirmed", date: "Oct 28, 2026", amount: "$110.00" },
  { id: "ORD-8489", customer: "Alexander Lee", status: "Cancelled", date: "Oct 27, 2026", amount: "$35.00" },
  { id: "ORD-8488", customer: "Harper Walker", status: "Refunded", date: "Oct 27, 2026", amount: "$600.00" },
  { id: "ORD-8487", customer: "Benjamin Hall", status: "Confirmed", date: "Oct 27, 2026", amount: "$145.00" },
  { id: "ORD-8486", customer: "Evelyn Allen", status: "Confirmed", date: "Oct 27, 2026", amount: "$220.00" },
  { id: "ORD-8485", customer: "Jacob Young", status: "Confirmed", date: "Oct 26, 2026", amount: "$95.00" },
  { id: "ORD-8484", customer: "Charlotte King", status: "Pending", date: "Oct 26, 2026", amount: "$1,450.00" },
  { id: "ORD-8483", customer: "Michael Wright", status: "Confirmed", date: "Oct 26, 2026", amount: "$85.00" },
  { id: "ORD-8482", customer: "Abigail Scott", status: "Confirmed", date: "Oct 26, 2026", amount: "$310.00" },
  { id: "ORD-8481", customer: "Daniel Green", status: "Cancelled", date: "Oct 25, 2026", amount: "$15.00" },
  { id: "ORD-8480", customer: "Emily Baker", status: "Confirmed", date: "Oct 25, 2026", amount: "$440.00" },
  { id: "ORD-8479", customer: "Matthew Adams", status: "Confirmed", date: "Oct 25, 2026", amount: "$75.00" },
  { id: "ORD-8478", customer: "Avery Nelson", status: "Refunded", date: "Oct 24, 2026", amount: "$89.00" },
  { id: "ORD-8477", customer: "Joseph Carter", status: "Confirmed", date: "Oct 24, 2026", amount: "$520.00" },
  { id: "ORD-8476", customer: "Ella Mitchell", status: "Confirmed", date: "Oct 24, 2026", amount: "$130.00" },
  { id: "ORD-8475", customer: "Samuel Perez", status: "Pending", date: "Oct 24, 2026", amount: "$2,800.00" },
  { id: "ORD-8474", customer: "Grace Roberts", status: "Confirmed", date: "Oct 23, 2026", amount: "$65.00" },
  { id: "ORD-8473", customer: "David Turner", status: "Confirmed", date: "Oct 23, 2026", amount: "$195.00" },
  { id: "ORD-8472", customer: "Jackson Rivera", status: "Confirmed", date: "Oct 23, 2026", amount: "$340.00" },
  { id: "ORD-8471", customer: "Chloe Gomez", status: "Pending", date: "Oct 23, 2026", amount: "$1,150.00" },
  { id: "ORD-8470", customer: "Logan Torres", status: "Confirmed", date: "Oct 22, 2026", amount: "$25.00" },
  { id: "ORD-8469", customer: "Zoe Flores", status: "Confirmed", date: "Oct 22, 2026", amount: "$180.00" },
  { id: "ORD-8468", customer: "Aiden Washington", status: "Cancelled", date: "Oct 22, 2026", amount: "$50.00" },
  { id: "ORD-8467", customer: "Lily Butler", status: "Confirmed", date: "Oct 22, 2026", amount: "$420.00" },
  { id: "ORD-8466", customer: "Luke Simmons", status: "Refunded", date: "Oct 22, 2026", amount: "$3,200.00" },
  { id: "ORD-8465", customer: "Hannah Foster", status: "Confirmed", date: "Oct 21, 2026", amount: "$95.00" },
  { id: "ORD-8464", customer: "Gabriel Bryant", status: "Confirmed", date: "Oct 21, 2026", amount: "$110.00" },
  { id: "ORD-8463", customer: "Stella Alexander", status: "Pending", date: "Oct 21, 2026", amount: "$540.00" },
  { id: "ORD-8462", customer: "Julian Russell", status: "Confirmed", date: "Oct 21, 2026", amount: "$65.00" },
  { id: "ORD-8461", customer: "Victoria Griffin", status: "Confirmed", date: "Oct 20, 2026", amount: "$130.00" },
  { id: "ORD-8460", customer: "Levi Hayes", status: "Cancelled", date: "Oct 20, 2026", amount: "$15.00" },
  { id: "ORD-8459", customer: "Penelope Myers", status: "Confirmed", date: "Oct 20, 2026", amount: "$290.00" },
  { id: "ORD-8458", customer: "Isaac Ford", status: "Confirmed", date: "Oct 20, 2026", amount: "$75.00" },
  { id: "ORD-8457", customer: "Aurora Hamilton", status: "Refunded", date: "Oct 19, 2026", amount: "$880.00" },
  { id: "ORD-8456", customer: "Wyatt Graham", status: "Pending", date: "Oct 19, 2026", amount: "$2,100.00" },
  { id: "ORD-8455", customer: "Nora Sullivan", status: "Confirmed", date: "Oct 19, 2026", amount: "$45.00" },
  { id: "ORD-8454", customer: "Owen Wallace", status: "Confirmed", date: "Oct 19, 2026", amount: "$195.00" },
  { id: "ORD-8453", customer: "Eleanor Woods", status: "Confirmed", date: "Oct 18, 2026", amount: "$320.00" }
];

export default function RecentOrders() {
  
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Confirmed", "Pending", "Cancelled", "Refunded"];

  const filteredOrders = activeFilter === "All" 
    ? orders 
    : orders.filter(order => order.status === activeFilter);

  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* Header & Filter Bar */}
      <div className="mb-6 flex flex-col gap-5">
        
        {/* Top Row */}
        <div>
          <h1 className="text-white text-3xl font-semibold tracking-tight leading-none mb-2">
            Recent Orders
          </h1>
        </div>
        
        {/* Bottom Row */}
        <div className="flex flex-row items-center justify-between w-full">
          
          {/* LEFT CHILD */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex-shrink-0 ${
                  activeFilter === filter
                    ? "bg-gray-200 text-gray-900 shadow-sm"
                    : "bg-[#13171c] text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* RIGHT CHILD */}
          <p className="text-gray-400 text-sm select-none font-medium bg-[#13171c] px-3 py-1 rounded-full border border-gray-800 m-0 flex-shrink-0 ml-4">
            {filteredOrders.length} Entries
          </p>

        </div>
        
      </div>

      {/* Table Section */}
      <div className="bg-[#13171c] border border-gray-800 rounded-xl overflow-hidden">
        
        <div className="[&>div]:max-h-[500px]">
          <Table>
            
            <TableHeader className="sticky top-0 z-20 bg-[#13171c]">
              <TableRow className="border-b border-gray-800 hover:bg-transparent">
                <TableHead className="text-gray-400 font-medium h-10 px-6">Order ID</TableHead>
                <TableHead className="text-gray-400 font-medium h-10">Customer</TableHead>
                <TableHead className="text-gray-400 font-medium h-10">Status</TableHead>
                <TableHead className="text-gray-400 font-medium h-10">Date</TableHead>
                <TableHead className="text-gray-400 font-medium h-10 text-right px-6">Amount</TableHead>
              </TableRow>
            </TableHeader>
            
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id} className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors">
                  <TableCell className="font-medium text-gray-200 px-6 py-4">{order.id}</TableCell>
                  <TableCell className="text-gray-300 py-4">{order.customer}</TableCell>
                  <TableCell className="py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      order.status === 'Confirmed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                      order.status === 'Cancelled' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                      order.status === 'Refunded' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                      'bg-gray-500/10 text-gray-400 border-gray-500/20'
                    }`}>
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-400 py-4">{order.date}</TableCell>
                  <TableCell className="text-right font-medium text-gray-200 px-6 py-4">{order.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

    </div>
  );
}