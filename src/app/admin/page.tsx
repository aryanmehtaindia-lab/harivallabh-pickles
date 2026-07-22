"use client";

import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import AdminDashboard from "@/components/admin/AdminDashboard";

export default function AdminPage() {
  const { isAdminLoggedIn, adminLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (isAdminLoggedIn) {
    return <AdminDashboard />;
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    setTimeout(() => {
      const success = adminLogin(username, password);
      if (!success) {
        setError("Invalid username or password");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="glass rounded-3xl p-8 border-glow animate-scale-in">
          {/* Logo */}
          <div className="text-center mb-8">
            <Image src="/logo.png" alt="Harivallabh" width={80} height={80} className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-maroon">Admin Portal</h2>
            <p className="text-xs text-foreground/50 mt-1">Harivallabh Management System</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs text-foreground/50 font-medium block mb-1.5">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-golden/20 bg-cream/50 focus:outline-none focus:border-golden focus:bg-warm-white transition-all text-sm"
                placeholder="Enter username"
                autoComplete="username"
              />
            </div>
            <div>
              <label className="text-xs text-foreground/50 font-medium block mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-golden/20 bg-cream/50 focus:outline-none focus:border-golden focus:bg-warm-white transition-all text-sm"
                placeholder="Enter password"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs font-medium bg-red-50 px-3 py-2 rounded-lg">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full gradient-maroon text-white py-3.5 rounded-xl font-bold btn-hover shadow-lg shadow-maroon/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                {loading ? "Authenticating..." : "🔐 Login to Dashboard"}
              </span>
            </button>
          </form>

          {/* Hint */}
          <div className="mt-6 p-3 bg-golden/5 rounded-lg border border-golden/10">
            <p className="text-[10px] text-foreground/40 text-center">
              Demo credentials: <span className="font-mono text-maroon/60">admin</span> / <span className="font-mono text-maroon/60">harivallabh123</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
