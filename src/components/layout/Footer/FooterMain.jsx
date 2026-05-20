"use client";

import Image from "next/image";
import Link from "next/link";
import { siteInfo, categories, customerServiceLinks } from "@/utils/data";
import { FiArrowLeft, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function FooterMain() {
  return (
    <div className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="w-36 h-12 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
              <Image
                src={siteInfo.logo}
                alt="HYBERWAY"
                width={144}
                height={48}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML = '<span class="text-white font-bold text-sm">HYBERWAY</span>';
                }}
              />
            </div>
            <p className="text-sm font-medium text-blue-400 mb-3">
              {siteInfo.tagline}
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              {siteInfo.description}
            </p>
          </div>

          {/* Column 2: CATEGORIES */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-gray-700">
              CATEGORIES
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={cat.path}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <FiArrowLeft className="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CUSTOMER SERVICE */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-gray-700">
              CUSTOMER SERVICE
            </h3>
            <ul className="space-y-2.5">
              {customerServiceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <FiArrowLeft className="w-3 h-3 text-gray-600 group-hover:text-blue-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CONTACT US */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-gray-700">
              CONTACT US
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  🏠 {siteInfo.address}
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <FiPhone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  📞 {siteInfo.phone}
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <FiMail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  ✉️ {siteInfo.email}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}