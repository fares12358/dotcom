"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu, FiX, FiGlobe } from "react-icons/fi";
import { siteInfo } from "@/utils/data";
import MainNavigation from "./MainNavigation";

export default function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-600 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="w-38 h-15 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src={siteInfo.logo}
                alt="HYBERWAY"
                width={128}
                height={60}
                className="w-full h-full object-fill"
                priority
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = '<span class="text-white font-bold text-sm">HYBERWAY</span>';
                }}
              />
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-10 pl-10 pr-4 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-blue-400 focus:bg-white transition-all"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-medium text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              <FiGlobe className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === "en" ? "EN" : "AR"}</span>
              {lang === "en" ? (
                <span className="text-base">🇬🇧</span>
              ) : (
                <span className="text-base">🇸🇦</span>
              )}
            </button>

            {/* Login */}
            <Link
              href="/login"
              className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FiUser className="w-4 h-4" />
              <span>Login</span>
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-red-500 transition-colors"
            >
              <FiHeart className="w-5 h-5" />
              <span className="hidden sm:inline">Wishlist</span>
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FiShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="md:hidden pb-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-10 pl-10 pr-4 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-blue-400 focus:bg-white"
                autoFocus
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        )}
      </div>

      {/* Main Navigation */}
      <div className="hidden lg:block border-t border-gray-100">
        <MainNavigation />
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3">
            {/* Mobile Search */}
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-10 pl-10 pr-4 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-blue-400"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            {/* Mobile Nav Links */}
            <MainNavigation mobile onClose={() => setMobileMenuOpen(false)} />
            {/* Mobile Login */}
            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-3 text-sm text-gray-600 hover:text-blue-600 border-t border-gray-100 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiUser className="w-4 h-4" />
              Login / Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}