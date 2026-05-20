// Format price with currency
export function formatPrice(price) {
  return `${price.toLocaleString("en-US")} EGP`;
}

// Generate a random gradient placeholder color
const placeholderColors = [
  "from-blue-400 to-blue-600",
  "from-green-400 to-green-600",
  "from-purple-400 to-purple-600",
  "from-orange-400 to-orange-600",
  "from-pink-400 to-pink-600",
  "from-teal-400 to-teal-600",
  "from-red-400 to-red-600",
  "from-indigo-400 to-indigo-600",
  "from-yellow-400 to-yellow-600",
  "from-gray-400 to-gray-600",
  "from-cyan-400 to-cyan-600",
  "from-rose-400 to-rose-600",
];

export function getPlaceholderColor(index) {
  return placeholderColors[index % placeholderColors.length];
}

// Truncate text
export function truncateText(text, maxLength = 60) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

// Get menu label based on language
export function getMenuLabel(item, lang = "en") {
  return lang === "ar" ? item.labelAr : item.labelEn;
}

// Calculate discount percentage
export function getDiscount(oldPrice, newPrice) {
  if (!oldPrice) return null;
  return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
}