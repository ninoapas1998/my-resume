type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'solidToOutline';
};

export default function Button({ children, onClick, className = '', variant = 'primary' }: ButtonProps) {
  const variantClasses =
    variant === 'outline'
      ? 'border-4 border-[#008DDE] bg-transparent text-[#008DDE] hover:bg-[#008DDE] hover:text-white'
      : variant === 'solidToOutline'
        ? 'bg-[#008DDE] text-white border-4 border-[#008DDE] hover:bg-transparent hover:text-[#008DDE]'
        : 'bg-[#008DDE] text-white hover:bg-[#0077C2]';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${variantClasses} w-full px-5 py-4 text-lg font-semibold transition-all duration-300 cursor-pointer sm:w-auto sm:px-6 sm:py-6 sm:text-2xl ${className}`}
      style={{ borderRadius: 0 }}
    >
      {children}
    </button>
  );
}
