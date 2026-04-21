import { motion } from 'motion/react';
import { AlertCircle, ArrowUpRight, FileCheck, AlertTriangle } from 'lucide-react';

const transactions = [
  {
    id: 1,
    type: 'Equity Disbursement',
    merchant: 'Merchant #8821',
    status: 'High Impact',
    amount: '₱6,012,750',
    badge: 'Needs Auth',
    icon: AlertCircle,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    badgeColor: 'text-red-600',
  },
  {
    id: 2,
    type: 'Member Loan Payout',
    merchant: 'M. Dela Cruz',
    status: 'Verified',
    amount: '₱580,000',
    badge: 'Pending',
    icon: ArrowUpRight,
    iconBg: 'bg-[#1565C0]/10',
    iconColor: 'text-[#1565C0]',
    badgeColor: 'text-slate-600',
  },
  {
    id: 3,
    type: 'Batch Settlement',
    merchant: 'Daily Reconciliation',
    status: '',
    amount: '₱2,183,150',
    badge: 'Processing',
    icon: FileCheck,
    iconBg: 'bg-[#1565C0]/10',
    iconColor: 'text-[#1565C0]',
    badgeColor: 'text-slate-600',
  },
  {
    id: 4,
    type: 'Risk Flag: Withdrawal',
    merchant: 'Account #0022',
    status: 'Unusual Pattern',
    amount: '₱410,500',
    badge: 'Review',
    icon: AlertTriangle,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    badgeColor: 'text-red-600',
  },
];

export function TransactionQueue() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Real-time processing
        </p>
        <h3 className="text-2xl font-semibold text-slate-900">Critical Queue</h3>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <motion.div
            key={transaction.id}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
            whileHover={{ x: -4, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-4 shadow-md shadow-slate-200/50 border border-slate-100 hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-full ${transaction.iconBg} flex items-center justify-center flex-shrink-0`}>
                <transaction.icon className={`w-4 h-4 ${transaction.iconColor}`} />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-slate-900">{transaction.type}</h4>
                <p className="text-xs text-slate-500">
                  {transaction.merchant}
                  {transaction.status && ` • ${transaction.status}`}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm font-normal text-slate-900">{transaction.amount}</p>
                <p className={`text-[10px] font-semibold uppercase tracking-wider ${transaction.badgeColor}`}>
                  {transaction.badge}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="w-full py-4 text-xs font-semibold text-[#1565C0] uppercase tracking-wider hover:bg-slate-50 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        >
          View Full Queue (24 more)
        </motion.button>
      </div>
    </motion.div>
  );
}
