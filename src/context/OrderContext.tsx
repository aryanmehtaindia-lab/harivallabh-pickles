"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type OrderStatus = "New" | "Confirmed" | "Processing" | "Shipped" | "Delivered" | "Cancelled";

export interface OrderItem {
  productId: string;
  nameEn: string;
  nameGu: string;
  size: string;
  price: number;
  quantity: number;
  emoji: string;
}

export interface Order {
  id: string;
  date: string;
  customer: {
    name: string;
    mobile: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  items: OrderItem[];
  subtotal: number;
  delivery: number;
  total: number;
  paymentMethod: string;
  paymentStatus: "Paid" | "Pending" | "Refunded";
  status: OrderStatus;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, "id" | "date" | "status" | "paymentStatus">) => string;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Pre-populated mock orders
const mockOrders: Order[] = [
  {
    id: "HVP-001234",
    date: "2025-01-15T10:30:00",
    customer: { name: "Rajesh Patel", mobile: "9876543210", email: "rajesh@gmail.com", address: "12, Swaminarayan Society", city: "Ahmedabad", state: "Gujarat", pincode: "380001" },
    items: [
      { productId: "mango-pickle", nameEn: "Mango Pickle", nameGu: "કેરી કા અચાર", size: "500g", price: 249, quantity: 2, emoji: "🥭" },
      { productId: "chundo", nameEn: "Sweet Mango Chundo", nameGu: "છુંદો", size: "500g", price: 229, quantity: 1, emoji: "🍯" },
    ],
    subtotal: 727, delivery: 0, total: 727,
    paymentMethod: "upi", paymentStatus: "Paid", status: "New",
  },
  {
    id: "HVP-001235",
    date: "2025-01-15T11:45:00",
    customer: { name: "Meena Shah", mobile: "9898765432", email: "meena@yahoo.com", address: "45, Gurukul Road", city: "Vadodara", state: "Gujarat", pincode: "390001" },
    items: [
      { productId: "masala-wafers", nameEn: "Masala Potato Wafers", nameGu: "મસાલા વેફર્સ", size: "400g", price: 269, quantity: 3, emoji: "🥔" },
    ],
    subtotal: 807, delivery: 0, total: 807,
    paymentMethod: "card", paymentStatus: "Paid", status: "Confirmed",
  },
  {
    id: "HVP-001236",
    date: "2025-01-14T09:20:00",
    customer: { name: "Amit Joshi", mobile: "9812345678", email: "amit.j@gmail.com", address: "88, Navrangpura", city: "Ahmedabad", state: "Gujarat", pincode: "380009" },
    items: [
      { productId: "green-chilli-pickle", nameEn: "Green Chilli Pickle", nameGu: "મરચાં કા અચાર", size: "500g", price: 299, quantity: 1, emoji: "🌶️" },
      { productId: "lemon-pickle", nameEn: "Lemon Pickle", nameGu: "લીંબુ કા અચાર", size: "1kg", price: 359, quantity: 1, emoji: "🍋" },
      { productId: "masala-papad", nameEn: "Masala Papad", nameGu: "મસાલા પાપડ", size: "500g (25pcs)", price: 219, quantity: 2, emoji: "🫓" },
    ],
    subtotal: 1096, delivery: 0, total: 1096,
    paymentMethod: "netbanking", paymentStatus: "Paid", status: "Processing",
  },
  {
    id: "HVP-001237",
    date: "2025-01-13T14:10:00",
    customer: { name: "Priya Desai", mobile: "9999888777", email: "priya.d@outlook.com", address: "201, Satellite Towers", city: "Surat", state: "Gujarat", pincode: "395001" },
    items: [
      { productId: "mixed-pickle", nameEn: "Mixed Pickle Special", nameGu: "મિક્સ અચાર", size: "1kg", price: 549, quantity: 1, emoji: "🫙" },
      { productId: "special-mukhwas", nameEn: "Special Mukhwas Mix", nameGu: "સ્પેશિયલ મુખવાસ", size: "250g", price: 199, quantity: 2, emoji: "🌿" },
    ],
    subtotal: 947, delivery: 0, total: 947,
    paymentMethod: "upi", paymentStatus: "Paid", status: "Shipped",
  },
  {
    id: "HVP-001238",
    date: "2025-01-12T16:30:00",
    customer: { name: "Kiran Modi", mobile: "9876512345", email: "kiran@gmail.com", address: "7, Paldi Cross Roads", city: "Ahmedabad", state: "Gujarat", pincode: "380006" },
    items: [
      { productId: "mango-pickle", nameEn: "Mango Pickle", nameGu: "કેરી કા અચાર", size: "1kg", price: 449, quantity: 1, emoji: "🥭" },
    ],
    subtotal: 449, delivery: 50, total: 499,
    paymentMethod: "cod", paymentStatus: "Pending", status: "Delivered",
  },
];

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  const addOrder = (orderData: Omit<Order, "id" | "date" | "status" | "paymentStatus">) => {
    const id = `HVP-${Date.now().toString().slice(-6)}`;
    const newOrder: Order = {
      ...orderData,
      id,
      date: new Date().toISOString(),
      status: "New",
      paymentStatus: orderData.paymentMethod === "cod" ? "Pending" : "Paid",
    };
    setOrders((prev) => [newOrder, ...prev]);
    return id;
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => {
        if (o.id === orderId) {
          const paymentStatus = status === "Cancelled" && o.paymentStatus === "Paid" ? "Refunded" as const : o.paymentStatus;
          return { ...o, status, paymentStatus };
        }
        return o;
      })
    );
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, updateOrderStatus }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrders must be used within OrderProvider");
  return context;
}
