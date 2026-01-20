export default function LoadingSpinner({ size = "medium" }) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8", 
    large: "w-12 h-12"
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-gray-800 rounded-full animate-spin`}></div>
    </div>
  );
}