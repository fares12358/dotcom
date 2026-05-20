export default function SectionHeader({ title, subtitle, align = "center" }) {
  const alignClasses = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <div className={`mb-8 ${alignClasses[align] || alignClasses.center}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-3 mx-auto w-16 h-1 bg-blue-600 rounded-full" />
    </div>
  );
}