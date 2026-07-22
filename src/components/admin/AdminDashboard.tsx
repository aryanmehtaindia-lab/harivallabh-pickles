"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useOrders } from "@/context/OrderContext";
import { products } from "@/data/products";
import AdminOrders from "./AdminOrders";
import AdminProducts from "./AdminProducts";

type Tab = "dashboard" | "orders" | "products";

export default function AdminDashboard() {
  const { adminLogout } = useAuth();
  const { orders } = useOrders();
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");

  // KPI calculations
  const totalRevenue = orders.filter((o) => o.status !== "Cancelled").reduce((sum, o) => sum + o.total, 0);
  const totalOrders = orders.length;
  const newOrders = orders.filter((o) => o.status === "New").length;
  const processingOrders = orders.filter((o) => o.status === "Processing" || o.status === "Confirmed").length;
  const deliveredOrders = orders.filter((o) => o.status === "Delivered").length;
  const totalProducts = products.length;

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "orders", label: "Orders", icon: "📦" },
    { id: "products", label: "Products", icon: "🫙" },
  ];

  return (
    <div className="min-h-[80vh] max-w-7xl mx-auto px-4 py-6">
      {/* Admin Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-maroon">Admin Dashboard</h2>
          <p className="text-xs text-foreground/50">Harivallabh Management</p>
        </div>
        <button
          onClick={adminLogout}
          className="text-sm text-red-500 hover:text-red-700 font-medium px-4 py-2 rounded-lg hover:bg-red-50 transition-all"
        >
          🚪 Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 bg-cream rounded-xl p-1 w-fit border border-golden/20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === tab.id
                ? "gradient-maroon text-white shadow-md"
                : "text-foreground/60 hover:text-maroon hover:bg-warm-white"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
            {tab.id === "orders" && newOrders > 0 && (
              <span className="bg-golden text-dark-maroon text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {newOrders}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "dashboard" && (
        <div className="animate-fade-in-up">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="glass rounded-xl p-5 border-glow">
              <p className="text-xs text-foreground/50 font-medium">Total Revenue</p>
              <p className="text-2xl font-bold text-maroon mt-1">₹{totalRevenue.toLocaleString()}</p>
              <p className="text-[10px] text-olive-green mt-1">↑ Active orders</p>
            </div>
            <div className="glass rounded-xl p-5 border-glow">
              <p className="text-xs text-foreground/50 font-medium">Total Orders</p>
              <p className="text-2xl font-bold text-maroon mt-1">{totalOrders}</p>
              <p className="text-[10px] text-golden mt-1">{newOrders} new</p>
            </div>
            <div className="glass rounded-xl p-5 border-glow">
              <p className="text-xs text-foreground/50 font-medium">Processing</p>
              <p className="text-2xl font-bold text-maroon mt-1">{processingOrders}</p>
              <p className="text-[10px] text-foreground/40 mt-1">In pipeline</p>
            </div>
            <div className="glass rounded-xl p-5 border-glow">
              <p className="text-xs text-foreground/50 font-medium">Delivered</p>
              <p className="text-2xl font-bold text-olive-green mt-1">{deliveredOrders}</p>
              <p className="text-[10px] text-foreground/40 mt-1">Completed</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Orders */}
            <div className="glass rounded-xl p-5 border-glow">
              <h4 className="font-bold text-maroon text-sm mb-4 flex items-center gap-2">
                <span className="text-golden">📋</span> Recent Orders
              </h4>
              <div className="space-y-3">
                {orders.slice(0, 4).map((order) => (
                  <div key={order.id} className="flex items-center justify-between py-2 border-b border-golden/10 last:border-0">
                    <div>
                      <p className="text-xs font-bold text-maroon">{order.id}</p>
                      <p className="text-[10px] text-foreground/50">{order.customer.name} • {order.customer.city}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-golden">₹{order.total}</p>
                      <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium ${
                        order.status === "New" ? "bg-blue-50 text-blue-600" :
                        order.status === "Confirmed" ? "bg-purple-50 text-purple-600" :
                        order.status === "Processing" ? "bg-yellow-50 text-yellow-700" :
                        order.status === "Shipped" ? "bg-orange-50 text-orange-600" :
                        order.status === "Delivered" ? "bg-green-50 text-green-600" :
                        "bg-red-50 text-red-600"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => setActiveTab("orders")} className="text-golden text-xs font-medium mt-3 hover:underline">
                View all orders →
              </button>
            </div>

            {/* Product Stats */}
            <div className="glass rounded-xl p-5 border-glow">
              <h4 className="font-bold text-maroon text-sm mb-4 flex items-center gap-2">
                <span className="text-golden">📦</span> Inventory Overview
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Total Products</span>
                  <span className="font-bold text-maroon">{totalProducts}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Categories</span>
                  <span className="font-bold text-maroon">4</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Low Stock Items</span>
                  <span className="font-bold text-red-500">
                    {products.filter((p) => p.variants.some((v) => v.stock < 15)).length}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Best Seller</span>
                  <span className="font-bold text-golden">🥭 Mango Pickle</span>
                </div>
              </div>
              <button onClick={() => setActiveTab("products")} className="text-golden text-xs font-medium mt-3 hover:underline">
                Manage products →
              </button>
            </div>
          </div>

          {/* Order Status Distribution */}
          <div className="glass rounded-xl p-5 border-glow mt-6">
            <h4 className="font-bold text-maroon text-sm mb-4">Order Pipeline</h4>
            <div className="flex gap-2 flex-wrap">
              {[
                { status: "New", count: newOrders, color: "bg-blue-500" },
                { status: "Confirmed", count: orders.filter((o) => o.status === "Confirmed").length, color: "bg-purple-500" },
                { status: "Processing", count: orders.filter((o) => o.status === "Processing").length, color: "bg-yellow-500" },
                { status: "Shipped", count: orders.filter((o) => o.status === "Shipped").length, color: "bg-orange-500" },
                { status: "Delivered", count: deliveredOrders, color: "bg-green-500" },
              ].map((s) => (
                <div key={s.status} className="flex items-center gap-2 px-3 py-2 bg-cream rounded-lg border border-golden/10">
                  <div className={`w-2.5 h-2.5 rounded-full ${s.color}`}></div>
                  <span className="text-xs font-medium text-foreground/70">{s.status}</span>
                  <span className="text-xs font-bold text-maroon">{s.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "orders" && <AdminOrders />}
      {activeTab === "products" && <AdminProducts />}
    </div>
  );
}
