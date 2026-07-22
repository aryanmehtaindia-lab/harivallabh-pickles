"use client";

import { useState } from "react";
import { useOrders, OrderStatus } from "@/context/OrderContext";

const statusFlow: OrderStatus[] = ["New", "Confirmed", "Processing", "Shipped", "Delivered"];

const statusColors: Record<OrderStatus, string> = {
  New: "bg-blue-50 text-blue-600 border-blue-200",
  Confirmed: "bg-purple-50 text-purple-600 border-purple-200",
  Processing: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Shipped: "bg-orange-50 text-orange-600 border-orange-200",
  Delivered: "bg-green-50 text-green-600 border-green-200",
  Cancelled: "bg-red-50 text-red-600 border-red-200",
};

export default function AdminOrders() {
  const { orders, updateOrderStatus } = useOrders();
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const filtered = filterStatus === "all"
    ? orders
    : orders.filter((o) => o.status === filterStatus);

  const getNextStatus = (current: OrderStatus): OrderStatus | null => {
    const idx = statusFlow.indexOf(current);
    if (idx >= 0 && idx < statusFlow.length - 1) return statusFlow[idx + 1];
    return null;
  };

  return (
    <div className="animate-fade-in-up">
      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {["all", "New", "Confirmed", "Processing", "Shipped", "Delivered", "Cancelled"].map((status) => {
          const count = status === "all" ? orders.length : orders.filter((o) => o.status === status).length;
          return (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                filterStatus === status
                  ? "gradient-maroon text-white shadow-md"
                  : "bg-cream border border-golden/20 text-foreground/60 hover:border-golden"
              }`}
            >
              {status === "all" ? "All" : status} ({count})
            </button>
          );
        })}
      </div>

      {/* Orders List */}
      <div className="space-y-3">
        {filtered.map((order) => (
          <div key={order.id} className="glass rounded-xl border-glow overflow-hidden">
            {/* Order Header */}
            <div
              className="p-4 flex items-center justify-between cursor-pointer hover:bg-cream/50 transition-colors"
              onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
            >
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-bold text-maroon text-sm">{order.id}</p>
                  <p className="text-[10px] text-foreground/50">
                    {new Date(order.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-medium text-foreground/70">{order.customer.name}</p>
                  <p className="text-[10px] text-foreground/40">{order.customer.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-golden">₹{order.total}</span>
                <span className={`text-[10px] px-2.5 py-1 rounded-full font-semibold border ${statusColors[order.status]}`}>
                  {order.status}
                </span>
                <span className="text-foreground/30 text-xs">{selectedOrder === order.id ? "▲" : "▼"}</span>
              </div>
            </div>

            {/* Order Details (Expanded) */}
            {selectedOrder === order.id && (
              <div className="border-t border-golden/10 p-4 bg-cream/30 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Customer Info */}
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-foreground/40 font-semibold mb-2">Customer</p>
                    <p className="text-sm font-medium text-maroon">{order.customer.name}</p>
                    <p className="text-xs text-foreground/60">📱 {order.customer.mobile}</p>
                    <p className="text-xs text-foreground/60">📧 {order.customer.email}</p>
                    <p className="text-xs text-foreground/60 mt-1">
                      📍 {order.customer.address}, {order.customer.city}, {order.customer.state} - {order.customer.pincode}
                    </p>
                  </div>

                  {/* Items */}
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-foreground/40 font-semibold mb-2">Items</p>
                    <div className="space-y-1.5">
                      {order.items.map((item, i) => (
                        <div key={i} className="flex justify-between text-xs">
                          <span className="text-foreground/70">{item.emoji} {item.nameEn} ({item.size}) ×{item.quantity}</span>
                          <span className="font-medium">₹{item.price * item.quantity}</span>
                        </div>
                      ))}
                      <div className="border-t border-golden/10 pt-1 flex justify-between text-xs font-bold text-maroon">
                        <span>Total</span>
                        <span>₹{order.total}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment & Actions */}
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-foreground/40 font-semibold mb-2">Payment & Actions</p>
                    <p className="text-xs text-foreground/60 mb-1">
                      Method: <span className="font-medium text-foreground">{order.paymentMethod.toUpperCase()}</span>
                    </p>
                    <p className="text-xs text-foreground/60 mb-3">
                      Status: <span className={`font-medium ${order.paymentStatus === "Paid" ? "text-green-600" : order.paymentStatus === "Refunded" ? "text-red-500" : "text-yellow-600"}`}>
                        {order.paymentStatus}
                      </span>
                    </p>

                    {/* Status Actions */}
                    {order.status !== "Delivered" && order.status !== "Cancelled" && (
                      <div className="space-y-2">
                        {getNextStatus(order.status) && (
                          <button
                            onClick={() => updateOrderStatus(order.id, getNextStatus(order.status)!)}
                            className="w-full gradient-maroon text-white py-2 rounded-lg text-xs font-medium btn-hover"
                          >
                            <span className="relative z-10">
                              Move to → {getNextStatus(order.status)}
                            </span>
                          </button>
                        )}
                        <button
                          onClick={() => updateOrderStatus(order.id, "Cancelled")}
                          className="w-full border border-red-200 text-red-500 py-2 rounded-lg text-xs font-medium hover:bg-red-50 transition-colors"
                        >
                          Cancel Order
                        </button>
                      </div>
                    )}
                    {order.status === "Delivered" && (
                      <p className="text-xs text-green-600 font-medium">✓ Order completed</p>
                    )}
                    {order.status === "Cancelled" && (
                      <p className="text-xs text-red-500 font-medium">✕ Order cancelled</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-12 glass rounded-xl">
            <span className="text-4xl">📭</span>
            <p className="text-maroon font-medium mt-2">No orders with this status</p>
          </div>
        )}
      </div>
    </div>
  );
}
