import { motion } from 'motion/react';
import { ArrowLeft, Download, Edit2, Calendar, Filter, ChevronDown, ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import { useParams, useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Dropdown } from '../components/Dropdown';

// Mock member data
const getMemberName = (id: string) => {
  const names: Record<string, string> = {
    '1': 'Maria Santos Reyes',
    '2': 'Juan Dela Cruz',
    '3': 'Roberto Garcia Mendoza',
    '4': 'Ana Marie Gonzales',
  };
  return names[id] || 'Unknown Member';
};

// Mock transaction data
const transactions = [
  {
    id: 'TXN-BB291-LK',
    date: 'OCT 24, 2023',
    time: '14:23 GMT',
    description: 'Direct Deposit: Vanguard Institutional',
    category: 'DEPOSIT',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    status: 'SETTLED',
    statusColor: 'bg-emerald-50 text-emerald-700',
    amount: '+$145,000.00',
    amountColor: 'text-emerald-600',
  },
  {
    id: 'TXN-44291-NM',
    date: 'OCT 21, 2023',
    time: '09:15 GMT',
    description: 'Member Transfer: External Wallet #0x22...',
    category: 'TRANSFER',
    categoryColor: 'bg-blue-100 text-[#0284C7]',
    status: 'SETTLED',
    statusColor: 'bg-emerald-50 text-emerald-700',
    amount: '-$25,000.00',
    amountColor: 'text-slate-900',
  },
  {
    id: 'TXN-18293-PP',
    date: 'OCT 18, 2023',
    time: '16:45 GMT',
    description: 'Quarterly Yield Distribution',
    category: 'YIELD',
    categoryColor: 'bg-purple-100 text-purple-700',
    status: 'PENDING COMPLIANCE',
    statusColor: 'bg-amber-50 text-amber-700',
    amount: '+$12,402.11',
    amountColor: 'text-emerald-600',
  },
  {
    id: 'TXN-55610-OO',
    date: 'OCT 15, 2023',
    time: '11:30 GMT',
    description: 'Advisory Fee Adjustment',
    category: 'FEE',
    categoryColor: 'bg-red-100 text-red-700',
    status: 'SETTLED',
    statusColor: 'bg-emerald-50 text-emerald-700',
    amount: '-$1,250.00',
    amountColor: 'text-red-600',
  },
  {
    id: 'TXN-99823-ZZ',
    date: 'OCT 12, 2023',
    time: '08:00 GMT',
    description: 'Institutional Bond Maturity',
    category: 'DEPOSIT',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    status: 'SETTLED',
    statusColor: 'bg-emerald-50 text-emerald-700',
    amount: '+$500,000.00',
    amountColor: 'text-emerald-600',
  },
];

export function MemberTransactions() {
  const { memberId } = useParams();
  const navigate = useNavigate();
  const memberName = getMemberName(memberId || '1');

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1400px]">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-2 mb-4 text-xs font-medium text-slate-500 uppercase tracking-wider"
      >
        <button
          onClick={() => navigate('/members')}
          className="hover:text-slate-700 transition-colors"
        >
          Members
        </button>
        <span>•</span>
        <button
          onClick={() => navigate(`/members/${memberId}`)}
          className="hover:text-slate-700 transition-colors"
        >
          {memberName}
        </button>
        <span>•</span>
        <span className="text-slate-700">Ledger History</span>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="mb-6 sm:mb-8"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2 leading-tight">
              Member Ledger: {memberName.split(' ')[0]}-{memberName.split(' ').slice(-1)[0]}
            </h1>
            <p className="text-sm text-slate-600 max-w-3xl">
              A detailed forensic audit of all transactional activity for Portfolio ID: #LX-9902. This view includes reconciled deposits, intra-institutional transfers, and pending compliance clearances.
            </p>
          </div>
          <div className="flex gap-3 w-full lg:w-auto">
            <Button variant="secondary" className="flex-1 lg:flex-initial justify-center">
              Export ISO-20022
            </Button>
            <Button variant="primary" icon={Edit2} className="flex-1 lg:flex-initial justify-center">
              Adjust Ledger
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-2xl p-6 border-l-4 border-[#1565C0]"
          >
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">
              Current Liquidity
            </p>
            <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 mb-1">
              $1,482,900.00
            </h2>
            <p className="text-xs text-emerald-600 font-medium">
              +4.2%, THIS QTR
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="bg-white rounded-2xl p-6 border border-slate-200"
          >
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">
              Total Inbound (YTD)
            </p>
            <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 mb-1">
              $4,120,550.00
            </h2>
            <p className="text-xs text-slate-600 font-medium">
              Across 14 deposits
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white rounded-2xl p-6 border border-slate-200"
          >
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">
              Active Transfers
            </p>
            <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 mb-1">
              03
            </h2>
            <p className="text-xs text-slate-600 font-medium">
              $45,000.00 in clearing
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Filters and Status */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-4"
      >
        <div className="flex flex-wrap gap-3">
          <Dropdown
            align="left"
            trigger={
              <Button variant="tertiary" size="sm" icon={Calendar} iconRight={ChevronDown}>
                Last 30 Days
              </Button>
            }
            sections={[
              {
                title: "Date Range",
                items: [
                  {
                    title: "Last 7 Days",
                    onClick: () => console.log('Last 7 days')
                  },
                  {
                    title: "Last 30 Days",
                    onClick: () => console.log('Last 30 days')
                  },
                  {
                    title: "Last 90 Days",
                    onClick: () => console.log('Last 90 days')
                  },
                  {
                    title: "Year to Date",
                    onClick: () => console.log('Year to date')
                  },
                  {
                    title: "All Time",
                    onClick: () => console.log('All time')
                  }
                ]
              }
            ]}
          />
          <Dropdown
            align="left"
            trigger={
              <Button variant="tertiary" size="sm" icon={Filter} iconRight={ChevronDown}>
                Filter: All Types
              </Button>
            }
            sections={[
              {
                title: "Transaction Type",
                items: [
                  {
                    title: "All Types",
                    onClick: () => console.log('All types')
                  },
                  {
                    title: "Deposits",
                    onClick: () => console.log('Deposits')
                  },
                  {
                    title: "Transfers",
                    onClick: () => console.log('Transfers')
                  },
                  {
                    title: "Yields",
                    onClick: () => console.log('Yields')
                  },
                  {
                    title: "Fees",
                    onClick: () => console.log('Fees')
                  }
                ]
              }
            ]}
          />
        </div>
        <div className="text-xs font-medium text-slate-500 uppercase tracking-wider w-full lg:w-auto">
          <span className="inline-flex items-center gap-2">
            <Shield className="w-3 h-3" />
            <span className="hidden sm:inline">Institutional Grade Accuracy • Reconciled 2M Ago</span>
            <span className="sm:hidden">Reconciled 2M Ago</span>
          </span>
        </div>
      </motion.div>

      {/* Transactions Table */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-6"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  Execution Date
                </th>
                <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  Transaction ID
                </th>
                <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  Description
                </th>
                <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  Category
                </th>
                <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  Status
                </th>
                <th className="text-right px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  Amount (USD)
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, index) => (
                <motion.tr
                  key={txn.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-5">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{txn.date}</p>
                      <p className="text-xs text-slate-500">{txn.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-medium text-slate-700">{txn.id}</p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm text-slate-900">{txn.description}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-block px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wide ${txn.categoryColor}`}>
                      {txn.category}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${txn.statusColor.includes('emerald') ? 'bg-emerald-600' : 'bg-amber-600'}`} />
                      <span className={`text-xs font-medium ${txn.statusColor.replace('bg-', 'text-').replace('50', '700')}`}>
                        {txn.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <p className={`text-sm font-normal ${txn.amountColor}`}>{txn.amount}</p>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            Showing <span className="font-medium">1</span> - <span className="font-medium">5</span> of <span className="font-medium">142</span> transactions
          </p>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft className="w-4 h-4 text-slate-600" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-lg font-medium text-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg transition-colors text-sm font-medium text-slate-600">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg transition-colors text-sm font-medium text-slate-600">
              3
            </button>
            <span className="px-2 text-slate-400">...</span>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg transition-colors text-sm font-medium text-slate-600">
              29
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg transition-colors">
              <ChevronRight className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Regulatory Statement */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.4 }}
        className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
      >
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Regulatory Statement
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              This ledger represents a verified record of account. All transactions are subject to AML/KYC review. Discrepancies must be reported to the Global Coop Compliance Department within 48 business hours of settlement. Global Coop is an SEC-registered institutional custodian.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="text-right">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">
                Audited By
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Deloitte Financial Services
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
