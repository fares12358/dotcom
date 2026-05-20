"use client";

import { footerCopyright, paymentMethods } from "@/utils/data";
import { FaCcVisa, FaCcMastercard, FaPaypal, FaAmazonPay, FaGooglePay } from "react-icons/fa";

const iconMap = {
  FaCcVisa: FaCcVisa,
  FaCcMastercard: FaCcMastercard,
  FaPaypal: FaPaypal,
  FaAmazonPay: FaAmazonPay,
  FaGooglePay: FaGooglePay,
};

export default function FooterBottom() {
  return (
    <div className="bg-gray-950 text-gray-400 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-center md:text-left leading-relaxed">
            {footerCopyright}
          </p>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            {paymentMethods.map((method) => {
              const IconComponent = iconMap[method.icon];
              return IconComponent ? (
                <div
                  key={method.name}
                  className="w-10 h-7 rounded bg-white/10 flex items-center justify-center"
                  title={method.name}
                >
                  <IconComponent className="w-5 h-5 text-gray-300" />
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}