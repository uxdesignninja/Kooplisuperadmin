import { motion } from 'motion/react';
import { CheckCircle2, Shield } from 'lucide-react';

export function ComplianceCard() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="col-span-2 grid grid-cols-2 gap-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 border border-slate-200"
    >
      <div className="space-y-6">
        <div>
          <span className="inline-block px-4 py-1.5 bg-blue-600/10 text-[#1565C0] rounded-full text-xs font-semibold mb-4">
            Institutional Health
          </span>
          <h3 className="text-3xl font-semibold text-slate-900 leading-tight mb-4">
            Real-time Compliance &<br />Audit Engine
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Our dashboard provides autonomous monitoring of cooperative health. Using{' '}
            <span className="font-medium text-[#1565C0]">FinCo-op Proprietary scoring</span>, we
            identify liquidity gaps before they impact your members.
          </p>
        </div>

        <div className="space-y-4">
          {[
            'Automated IFRS-9 Reporting ready',
            'KYC verification response < 2.4s',
            'AML threat detection active',
          ].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-700">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 shadow-xl border border-slate-200 z-10"
        >
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Compliance Score
          </p>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-medium text-slate-900">98.2</span>
            <span className="text-sm font-medium text-emerald-500 mb-1">Optimal</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-20 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <div className="relative z-10">
            <Shield className="w-8 h-8 text-blue-400 mb-4" />
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Next Review Cycle
            </p>
            <p className="text-lg font-medium text-white">Tuesday, October 24th</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
