export const siteInfo = {
  name: "Dotcom IT Solutions",
  tagline: "Dotcom IT Solutions & Smart Systems",
  description:
    "Dotcom store is one of the largest online shopping networks in the world, where competition in prices and product quality and meet all tastes and desires and after-sales service # Our goal is to strive to make customers and visitors happy",
  logo: "/images/logo.webp",
  phone: "0503607788",
  email: "info@dotcomuae.com",
  address: "شارع الملك فيصل منطقة الرقة",
  whatsapp: "WHATSAPP",
};

export const menuItems = [
  { id: 1, labelAr: "الرئيسية", labelEn: "Home", path: "/" },
  { id: 2, labelAr: "أجهزة مكتبية", labelEn: "Desktop", path: "/category/desktop" },
  { id: 3, labelAr: "لابتوب", labelEn: "Laptop", path: "/category/laptop" },
  { id: 4, labelAr: "طابعات", labelEn: "Printers", path: "/category/printers" },
  { id: 5, labelAr: "شبكات", labelEn: "Network", path: "/category/network" },
  { id: 6, labelAr: "اكسسوارات", labelEn: "Accessories", path: "/category/accessories" },
  { id: 7, labelAr: "برمجياتنا", labelEn: "Our Softwares", path: "/category/softwares" },
  { id: 8, labelAr: "تواصل معنا", labelEn: "Contact Us", path: "/contact" },
];

export const heroSlides = [
  { id: 1, image: "/images/banner.png", alt: "Banner 1" },
  { id: 2, image: "/images/banner2.png", alt: "Banner 2" },
  { id: 3, image: "/images/banner3.png", alt: "Banner 3" },
];

export const bestOffers = [
  { id: 1, image: "/images/offer1.png", alt: "Offer 1", link: "/category/desktop" },
  { id: 2, image: "/images/offer2.png", alt: "Offer 2", link: "/category/laptop" },
  { id: 3, image: "/images/offer3.png", alt: "Offer 3", link: "/category/printers" },
  { id: 4, image: "/images/offer1.png", alt: "Offer 4", link: "/category/accessories" },
];

export const categories = [
  { id: 1, name: "Desktop", path: "/category/desktop" },
  { id: 2, name: "Laptop", path: "/category/laptop" },
  { id: 3, name: "Printers", path: "/category/printers" },
  { id: 4, name: "Network", path: "/category/network" },
  { id: 5, name: "Accessories", path: "/category/accessories" },
  { id: 6, name: "Our Softwares", path: "/category/softwares" },
];

export const customerServiceLinks = [
  { name: "My Account", path: "/account" },
  { name: "Login", path: "/login" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "FAQs", path: "/faqs" },
  { name: "Cookies Policy", path: "/cookies" },
  { name: "About", path: "/about" },
  { name: "Customer Care", path: "/care" },
];

export const socialLinks = [
  { name: "Facebook", icon: "FaFacebook", url: "#" },
  { name: "TikTok", icon: "FaTiktok", url: "#" },
  { name: "Twitter", icon: "FaTwitter", url: "#" },
  { name: "Pinterest", icon: "FaPinterest", url: "#" },
  { name: "Instagram", icon: "FaInstagram", url: "#" },
  { name: "WhatsApp", icon: "FaWhatsapp", url: "#" },
];

export const paymentMethods = [
  { name: "VISA", icon: "FaCcVisa" },
  { name: "Mastercard", icon: "FaCcMastercard" },
  { name: "PayPal", icon: "FaPaypal" },
  { name: "Amazon Pay", icon: "FaAmazonPay" },
  { name: "Google Pay", icon: "FaGooglePay" },
];

const productImages = [
  "/images/product1.png",
  "/images/product2.png",
  "/images/product3.jpg",
  "/images/product4.jpg",
  "/images/product5.jpg",
  "/images/product6.jpg",
  "/images/product7.jpg",
  "/images/product8.jpg",
  "/images/product9.jpg",
  "/images/product10.jpg",
  "/images/product11.jpg",
  "/images/product12.jpg",
];

const productNames = [
  "High-Performance Desktop PC",
  "Gaming Laptop 15\"",
  "Wireless Laser Printer",
  "Gigabit Network Switch",
  "Mechanical Keyboard RGB",
  "Wireless Mouse Ergonomic",
  "27\" 4K Monitor",
  "External SSD 1TB",
  "WiFi 6 Router",
  "Webcam 4K Ultra HD",
  "Bluetooth Headphones",
  "USB-C Hub Multiport",
];

const productDescriptions = [
  "Intel Core i7, 32GB RAM, 1TB SSD, RTX 4070",
  "AMD Ryzen 9, 16GB RAM, 512GB SSD, RTX 4060",
  "Color laser printer, duplex, WiFi, 30ppm",
  "24-port Gigabit Ethernet managed switch",
  "Full-size mechanical keyboard with Cherry MX switches",
  "Ergonomic wireless mouse with 6 buttons",
  "UHD 4K IPS panel, HDR400, 144Hz",
  "Portable SSD, USB 3.2, read 2000MB/s",
  "Dual-band WiFi 6 router, coverage up to 3000 sq ft",
  "4K webcam with auto-focus and built-in microphone",
  "Over-ear Bluetooth 5.3 headphones, ANC, 40h battery",
  "7-in-1 USB-C hub with HDMI, SD card, USB 3.0",
];

const productPrices = [2499, 1899, 899, 349, 129, 79, 599, 159, 199, 149, 249, 89];

export function generateProducts(page = 1, perPage = 12) {
  const start = (page - 1) * perPage;
  const items = [];
  for (let i = 0; i < perPage; i++) {
    const idx = (start + i) % productNames.length;
    items.push({
      id: start + i + 1,
      name: productNames[idx],
      description: productDescriptions[idx],
      price: productPrices[idx],
      // Deterministic values — no Math.random() to avoid hydration mismatch
      oldPrice: idx % 3 === 0 ? productPrices[idx] + (idx + 1) * 150 : null,
      image: productImages[idx],
      category: categories[idx % categories.length].name,
      categoryId: categories[idx % categories.length].id,
      rating: (3.5 + (idx % 5) * 0.3).toFixed(1),
      reviews: (idx + 1) * 8 + 5,
      inStock: idx % 5 !== 3,
      badge: idx % 4 === 0 ? "NEW" : idx % 5 === 0 ? "SALE" : null,
    });
  }
  return items;
}

export const allProducts = generateProducts(1, 48);

export const projects = [
  { id: 1, name: "E-Commerce Platform", image: "/images/project1.png", description: "Full-featured online store solution" },
  { id: 2, name: "ERP System", image: "/images/project2.png", description: "Enterprise resource planning software" },
  { id: 3, name: "Mobile App", image: "/images/project3.png", description: "Cross-platform mobile application" },
  { id: 4, name: "Cloud Dashboard", image: "/images/project4.png", description: "Real-time analytics dashboard" },
  { id: 5, name: "POS System", image: "/images/project5.jpg", description: "Point of sale with inventory management" },
  { id: 6, name: "CRM Solution", image: "/images/project6.jpg", description: "Customer relationship management" },
];

export const videos = [
  { id: 1, title: "Product Overview 2025", thumbnail: "/images/video1.jpg", url: "#" },
  { id: 2, title: "Unboxing New Arrivals", thumbnail: "/images/video2.jpg", url: "#" },
  { id: 3, title: "How to Choose a PC", thumbnail: "/images/video3.jpg", url: "#" },
  { id: 4, title: "Network Setup Guide", thumbnail: "/images/video4.jpg", url: "#" },
  { id: 5, title: "Gaming Laptop Review", thumbnail: "/images/video5.jpg", url: "#" },
  { id: 6, title: "Printer Installation", thumbnail: "/images/video6.jpg", url: "#" },
];

export const footerCopyright =
  "Development By Dotcom iT Solutions :2023 | Terms & Condition | Privacy Policy | Refund Policy";

export const filterCategories = [
  {
    id: 1,
    name: "Desktop",
    products: [
      { id: 1, name: "High-Performance Desktop PC" },
      { id: 13, name: "Mini PC Intel NUC" },
      { id: 25, name: "All-in-One Desktop" },
    ],
  },
  {
    id: 2,
    name: "Laptop",
    products: [
      { id: 2, name: "Gaming Laptop 15\"" },
      { id: 14, name: "Ultrabook 14\" Slim" },
      { id: 26, name: "Business Laptop 13\"" },
    ],
  },
  {
    id: 3,
    name: "Printers",
    products: [
      { id: 3, name: "Wireless Laser Printer" },
      { id: 15, name: "Inkjet Photo Printer" },
      { id: 27, name: "Multifunction Printer" },
    ],
  },
  {
    id: 4,
    name: "Network",
    products: [
      { id: 4, name: "Gigabit Network Switch" },
      { id: 16, name: "WiFi 6 Router" },
      { id: 28, name: "Powerline Adapter Kit" },
    ],
  },
  {
    id: 5,
    name: "Accessories",
    products: [
      { id: 5, name: "Mechanical Keyboard RGB" },
      { id: 6, name: "Wireless Mouse Ergonomic" },
      { id: 7, name: "27\" 4K Monitor" },
    ],
  },
  {
    id: 6,
    name: "Our Softwares",
    products: [
      { id: 29, name: "Antivirus Pro 2025" },
      { id: 30, name: "Office Suite Premium" },
      { id: 31, name: "Accounting Software" },
    ],
  },
];