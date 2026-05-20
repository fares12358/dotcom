"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/utils/data";
import { getMenuLabel } from "@/utils/helpers";

export default function MainNavigation({ mobile = false, onClose }) {
  const pathname = usePathname();

  if (mobile) {
    return (
      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.id}
              href={item.path}
              onClick={onClose}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              {item.labelEn}
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="max-w-7xl mx-auto px-4">
      <ul className="flex items-center justify-center gap-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <li key={item.id}>
              <Link
                href={item.path}
                className={`inline-flex items-center px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                  isActive
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-300"
                }`}
              >
                {item.labelEn}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}