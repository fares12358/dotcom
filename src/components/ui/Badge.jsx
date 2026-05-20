export default function Badge({ text, variant = "default" }) {
  const variants = {
    default: "bg-blue-600 text-white",
    sale: "bg-red-500 text-white",
    new: "bg-green-500 text-white",
    outline: "bg-transparent border border-gray-300 text-gray-700",
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full ${variants[variant] || variants.default}`}
    >
      {text}
    </span>
  );
}