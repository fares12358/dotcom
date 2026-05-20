"use client";

import { siteInfo, socialLinks } from "@/utils/data";
import {
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaTiktok, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

const iconMap = {
  FaFacebook: FaFacebook,
  FaTiktok: FaTiktok,
  FaTwitter: FaTwitter,
  FaPinterest: FaPinterest,
  FaInstagram: FaInstagram,
  FaWhatsapp: FaWhatsapp,
};

export default function FooterTop() {
  return (
    <div className="bg-blue-600 text-white py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-3 md:gap-6">
          {/* Phone */}
          <a
            href={`tel:${siteInfo.phone}`}
            className="flex items-center gap-2 text-sm hover:text-blue-200 transition-colors"
          >
            <FiPhone className="w-4 h-4" />
            <span>{siteInfo.phone}</span>
          </a>

          {/* WhatsApp */}
          <a
            href="#"
            className="flex items-center gap-2 text-sm hover:text-blue-200 transition-colors"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>{siteInfo.whatsapp}</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${siteInfo.email}`}
            className="flex items-center gap-2 text-sm hover:text-blue-200 transition-colors"
          >
            <FiMail className="w-4 h-4" />
            <span>{siteInfo.email}</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.icon];
              return IconComponent ? (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                  title={social.name}
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}