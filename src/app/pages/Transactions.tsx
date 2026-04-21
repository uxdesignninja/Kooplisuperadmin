import { motion } from 'motion/react';
import { Calendar, ChevronDown, Search, ChevronLeft, ChevronRight, TrendingUp, AlertCircle, PiggyBank, CheckCircle, AlertTriangle, Clock, MoreVertical, Eye, FileText, Download, Flag, Ban } from 'lucide-react';
import { useState } from 'react';
import { Dropdown } from '../components/Dropdown';
import { Button } from '../components/Button';

const transactions = [
  {
    id: 1,
    timestamp: 'Apr 17, 2026',
    time: '10:23:15 PHT',
    memberId: '#FICCO-8821',
    memberIcon: 'corporate',
    type: 'DIVIDEND PAYOUT',
    amount: '₱746,175.00',
    status: 'VERIFIED',
    statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    statusIcon: CheckCircle,
  },
  {
    id: 2,
    timestamp: 'Apr 17, 2026',
    time: '09:45:22 PHT',
    memberId: '#FICCO-1102',
    memberIcon: 'personal',
    type: 'ASSET PURCHASE',
    amount: '₱11,592,000.00',
    status: 'FLAGGED',
    statusColor: 'text-red-700 bg-red-50 border-red-200',
    statusIcon: AlertTriangle,
  },
  {
    id: 3,
    timestamp: 'Apr 16, 2026',
    time: '08:10:30 PHT',
    memberId: '#FICCO-4580',
    memberIcon: 'corporate',
    type: 'CAPITAL INJECTION',
    amount: '₱251,160.00',
    status: 'PENDING',
    statusColor: 'text-amber-700 bg-amber-50 border-amber-200',
    statusIcon: Clock,
  },
  {
    id: 4,
    timestamp: 'Apr 16, 2026',
    time: '06:21:11 PHT',
    memberId: '#FICCO-2234',
    memberIcon: 'personal',
    type: 'DIVIDEND PAYOUT',
    amount: '₱54,096.00',
    status: 'VERIFIED',
    statusColor: 'text-[#1565C0] bg-[#1565C0]/10',
    statusIcon: CheckCircle,
  },
];

export function Transactions() {
  const [dateRange, setDateRange] = useState('Apr 10, 2026 - Apr 17, 2026');
  const [transactionType, setTransactionType] = useState('All Types');
  const [auditStatus, setAuditStatus] = useState('Any Status');

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1400px]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 sm:mb-8"
      >
        <div className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">Transaction Ledger</h1>
          <p className="text-sm text-slate-600 max-w-2xl">
            Real-time global record of all capital movements across the cooperative ecosystem. Ensure total transparency and audit-ready precision for every fractional transfer.
          </p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 mb-4 sm:mb-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div>
              <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-2">
                Date Range Selection
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white transition-all border border-slate-200/50 focus:border-blue-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-2">
                Transaction Type
              </label>
              <Dropdown
                align="left"
                trigger={
                  <button className="w-full appearance-none px-4 py-2.5 bg-slate-50 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white transition-all cursor-pointer border border-slate-200/50 focus:border-blue-300 flex items-center justify-between hover:bg-white">
                    <span>{transactionType}</span>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </button>
                }
                sections={[
                  {
                    items: [
                      {
                        title: "All Types",
                        description: "Show all transactions",
                        onClick: () => setTransactionType("All Types")
                      },
                      {
                        title: "Dividend Payout",
                        description: "Member dividend distributions",
                        onClick: () => setTransactionType("Dividend Payout")
                      },
                      {
                        title: "Asset Purchase",
                        description: "Cooperative asset acquisitions",
                        onClick: () => setTransactionType("Asset Purchase")
                      },
                      {
                        title: "Capital Injection",
                        description: "Member capital contributions",
                        onClick: () => setTransactionType("Capital Injection")
                      },
                      {
                        title: "Loan Disbursement",
                        description: "Member loan approvals",
                        onClick: () => setTransactionType("Loan Disbursement")
                      }
                    ]
                  }
                ]}
              />
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-2">
                Audit Status
              </label>
              <Dropdown
                align="left"
                trigger={
                  <button className="w-full appearance-none px-4 py-2.5 bg-slate-50 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white transition-all cursor-pointer border border-slate-200/50 focus:border-blue-300 flex items-center justify-between hover:bg-white">
                    <span>{auditStatus}</span>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </button>
                }
                sections={[
                  {
                    items: [
                      {
                        title: "Any Status",
                        description: "All audit states",
                        onClick: () => setAuditStatus("Any Status")
                      },
                      {
                        title: "Verified",
                        description: "Approved transactions",
                        onClick: () => setAuditStatus("Verified")
                      },
                      {
                        title: "Pending",
                        description: "Awaiting review",
                        onClick: () => setAuditStatus("Pending")
                      },
                      {
                        title: "Flagged",
                        description: "Requires attention",
                        onClick: () => setAuditStatus("Flagged")
                      }
                    ]
                  }
                ]}
              />
            </div>

            <div className="flex items-end sm:col-span-2 lg:col-span-1">
              <Button variant="primary" icon={Search} className="w-full justify-center">
                Run Audit
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Transaction Table */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-4 sm:mb-6"
        >
          <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  Timestamp
                </th>
                <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  Member ID
                </th>
                <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  Type
                </th>
                <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  Amount (USD)
                </th>
                <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  Audit Status
                </th>
                <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-slate-900">{transaction.timestamp}</p>
                      <p className="text-xs text-slate-500">{transaction.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        transaction.memberIcon === 'corporate'
                          ? 'bg-blue-100'
                          : 'bg-slate-100'
                      }`}>
                        {transaction.memberIcon === 'corporate' ? (
                          <svg className="w-4 h-4 text-[#1565C0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm font-normal text-slate-700">{transaction.memberId}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-normal text-slate-900">{transaction.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-normal text-[#1565C0]">{transaction.amount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <transaction.statusIcon className={`w-4 h-4 ${transaction.statusColor.split(' ')[0]}`} />
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wide border ${transaction.statusColor}`}>
                        {transaction.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Dropdown
                      align="right"
                      trigger={
                        <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-slate-300/50">
                          <MoreVertical className="w-4 h-4 text-slate-600" />
                        </button>
                      }
                      sections={[
                        {
                          title: "Transaction Actions",
                          items: [
                            {
                              icon: Eye,
                              title: "View Details",
                              description: "Full transaction info",
                              shortcut: "⌘V",
                              onClick: () => console.log('View transaction:', transaction.id)
                            },
                            {
                              icon: FileText,
                              title: "Audit Trail",
                              description: "See complete history",
                              onClick: () => console.log('Audit trail:', transaction.id)
                            },
                            {
                              icon: Download,
                              title: "Export Receipt",
                              description: "Download PDF",
                              shortcut: "⌘D",
                              onClick: () => console.log('Export:', transaction.id)
                            }
                          ]
                        },
                        {
                          title: "Security",
                          items: [
                            {
                              icon: Flag,
                              title: "Flag Transaction",
                              description: "Mark for review",
                              danger: true,
                              onClick: () => console.log('Flag:', transaction.id)
                            },
                            {
                              icon: Ban,
                              title: "Reverse Transaction",
                              description: "Initiate reversal",
                              shortcut: "⌘⇧R",
                              danger: true,
                              onClick: () => console.log('Reverse:', transaction.id)
                            }
                          ]
                        }
                      ]}
                    />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          </div>

          {/* Pagination */}
          <div className="px-4 sm:px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-slate-600 font-medium">
              Showing <span className="font-semibold">4</span> of <span className="font-semibold">1,203</span> transactions
            </p>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-slate-300/50">
                <ChevronLeft className="w-4 h-4 text-slate-600" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-slate-300/50">
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="bg-white rounded-2xl p-6 border border-slate-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">
                  Weekly Volume
                </p>
                <p className="text-4xl font-normal text-slate-900 mb-2">₱115.9M</p>
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#1565C0]" strokeWidth={3} />
                  <span className="text-sm font-medium text-[#1565C0]">+2.4%</span>
                </div>
              </div>
              <div className="w-16 h-12 flex items-end gap-0.5">
                {[40, 55, 45, 60, 50, 70, 65].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-[#1565C0]/100 rounded-t opacity-30"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.4 }}
            className="bg-white rounded-2xl p-6 border border-slate-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">
                  Audit Alerts
                </p>
                <p className="text-4xl font-normal text-red-600 mb-2">14</p>
                <p className="text-xs font-medium text-red-600">Requires immediate action</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="bg-white rounded-2xl p-6 border border-slate-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">
                  Co-op Reserves
                </p>
                <p className="text-4xl font-normal text-slate-900 mb-2">₱912.7M</p>
                <p className="text-xs font-medium text-emerald-600">Stable liquidity ratio</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
                <PiggyBank className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
