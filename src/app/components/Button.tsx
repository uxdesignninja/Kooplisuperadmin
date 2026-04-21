import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'danger-subtle';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconRight?: LucideIcon;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-gradient-to-br from-[#1565C0] to-[#2D2D9E] hover:from-[#1976D2] hover:to-[#3939B0] text-white shadow-lg shadow-[#1565C0]/30 hover:shadow-xl hover:shadow-[#1565C0]/40 focus:ring-[#1565C0]/50',
  secondary: 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 focus:ring-slate-300/50 shadow-sm',
  tertiary: 'bg-blue-50 hover:bg-blue-100 text-[#1565C0] border border-blue-200 hover:border-blue-300 focus:ring-[#1565C0]/30',
  ghost: 'bg-transparent hover:bg-slate-100 text-slate-600 focus:ring-slate-300/50',
  danger: 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 focus:ring-red-500/50',
  'danger-subtle': 'bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 focus:ring-red-300/50',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
};

export function Button({
  children,
  variant = 'secondary',
  size = 'md',
  icon: Icon,
  iconRight: IconRight,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center gap-2 rounded-xl font-medium
        transition-all duration-200
        focus:outline-none focus:ring-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
      {IconRight && <IconRight className="w-4 h-4" />}
    </button>
  );
}
