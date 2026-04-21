import { motion } from 'motion/react';
import { LucideIcon, TrendingUp, TrendingDown, Minus, Clock } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  badge?: string;
  badgeColor?: string;
  delay: number;
  subtitle?: string;
  trend?: number[];
  lastUpdated?: string;
  iconColor?: 'blue' | 'emerald' | 'amber' | 'purple' | 'slate';
}

export function StatCard({
  icon: Icon,
  label,
  value,
  change,
  changeType = 'neutral',
  badge,
  badgeColor = 'bg-slate-200 text-slate-700',
  delay,
  subtitle,
  trend,
  lastUpdated,
  iconColor = 'blue',
}: StatCardProps) {
  const changeColors = {
    positive: 'text-emerald-600',
    negative: 'text-red-600',
    neutral: 'text-slate-600',
  };

  const iconColorClasses = {
    blue: {
      bg: 'bg-gradient-to-br from-[#1565C0] to-[#2D2D9E]',
      shadow: 'shadow-[#1565C0]/25 group-hover:shadow-[#1565C0]/40',
      hover: 'group-hover:from-[#1565C0]/10 group-hover:to-[#2D2D9E]/10',
      border: 'hover:border-[#1565C0]/30',
      hoverShadow: 'hover:shadow-[#1565C0]/10',
    },
    emerald: {
      bg: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      shadow: 'shadow-emerald-500/25 group-hover:shadow-emerald-500/40',
      hover: 'group-hover:from-emerald-50/50 group-hover:to-emerald-100/30',
      border: 'hover:border-emerald-200',
      hoverShadow: 'hover:shadow-emerald-500/10',
    },
    amber: {
      bg: 'bg-gradient-to-br from-amber-500 to-amber-600',
      shadow: 'shadow-amber-500/25 group-hover:shadow-amber-500/40',
      hover: 'group-hover:from-amber-50/50 group-hover:to-amber-100/30',
      border: 'hover:border-amber-200',
      hoverShadow: 'hover:shadow-amber-500/10',
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-500 to-purple-600',
      shadow: 'shadow-purple-500/25 group-hover:shadow-purple-500/40',
      hover: 'group-hover:from-purple-50/50 group-hover:to-purple-100/30',
      border: 'hover:border-purple-200',
      hoverShadow: 'hover:shadow-purple-500/10',
    },
    slate: {
      bg: 'bg-gradient-to-br from-slate-500 to-slate-600',
      shadow: 'shadow-slate-500/25 group-hover:shadow-slate-500/40',
      hover: 'group-hover:from-slate-50/50 group-hover:to-slate-100/30',
      border: 'hover:border-slate-200',
      hoverShadow: 'hover:shadow-slate-500/10',
    },
  };

  const colorClasses = iconColorClasses[iconColor];
  const TrendIcon = changeType === 'positive' ? TrendingUp : changeType === 'negative' ? TrendingDown : Minus;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group bg-white rounded-2xl p-6 shadow-sm shadow-slate-200/50 border border-slate-200/60 hover:shadow-lg ${colorClasses.hoverShadow} ${colorClasses.border} transition-all duration-300 cursor-pointer relative overflow-hidden`}
    >
      {/* Subtle gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent ${colorClasses.hover} transition-all duration-500 pointer-events-none`} />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-xl ${colorClasses.bg} flex items-center justify-center shadow-lg ${colorClasses.shadow} transition-shadow duration-300`}>
              <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-0.5">
                {label}
              </p>
              {subtitle && (
                <p className="text-xs text-slate-500 font-normal">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {badge && (
            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wide ${badgeColor} shadow-sm`}>
              {badge}
            </span>
          )}
        </div>

        {/* Value */}
        <div className="mb-4">
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.2, duration: 0.4 }}
            className="text-3xl font-medium text-slate-900 mb-2 tracking-tight"
          >
            {value}
          </motion.p>

          {/* Change indicator */}
          {change && (
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: delay + 0.3, duration: 0.4 }}
              className="flex items-center gap-1.5"
            >
              <TrendIcon className={`w-3.5 h-3.5 ${changeColors[changeType]}`} strokeWidth={2.5} />
              <span className={`text-sm font-medium ${changeColors[changeType]}`}>
                {change}
              </span>
              <span className="text-xs text-slate-400 font-normal ml-1">vs last month</span>
            </motion.div>
          )}
        </div>

        {/* Mini trend sparkline */}
        {trend && (
          <div className="flex items-end gap-1 h-8 mb-3">
            {trend.map((value, index) => (
              <motion.div
                key={index}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: delay + 0.4 + index * 0.05, duration: 0.3 }}
                className={`flex-1 rounded-t transition-colors duration-300`}
                style={{
                  height: `${value}%`,
                  transformOrigin: 'bottom',
                  backgroundColor: index === trend.length - 1 ? colorClasses.bg.match(/from-(\S+)/)?.[1].replace('from-', '') || '#3b82f6' : undefined,
                }}
              />
            ))}
          </div>
        )}

        {/* Last updated */}
        {lastUpdated && (
          <div className="flex items-center gap-1.5 pt-3 border-t border-slate-100">
            <Clock className="w-3 h-3 text-slate-400" />
            <span className="text-[10px] text-slate-400 font-medium">
              Updated {lastUpdated}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
