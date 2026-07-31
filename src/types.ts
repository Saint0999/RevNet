/** The time windows the dashboard can be filtered by. */
export type Timeframe = "7 Days" | "30 Days" | "90 Days" | "12 Months";

/** Headline figures shown in the stat cards for a single timeframe. */
export interface TimeframeStats {
  revenue: number;
  revenuePercentage: number;
  profit: number;
  profitPercentage: number;
  orders: number;
  ordersPercentage: number;
  cancelled: number;
  cancelledPercentage: number;
}

/** One plotted point on the revenue area chart. */
export interface RevenueDatum {
  /** Bucket label for the x-axis, e.g. "Mon" or "Week 1". */
  name: string;
  revenue: number;
}

export type OrderStatus = "Confirmed" | "Pending" | "Cancelled" | "Refunded";

export interface Order {
  id: string;
  customer: string;
  status: OrderStatus;
  date: string;
  amount: string;
}
