import { motion } from 'motion/react';
import { Download, UserPlus, Search, SlidersHorizontal, Eye, Edit2, MoreVertical, Clock, Copy, FileText, Ban, Trash2, Filter, CheckCircle2, Users } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Dropdown } from '../components/Dropdown';
import { Button } from '../components/Button';

const members = [
  {
    id: 1,
    name: 'CDO Teachers Multi-Purpose Cooperative',
    email: 'info@cdoteachers.coop',
    avatar: 'CT',
    status: 'ACTIVE',
    statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    compliance: 'CDA REG: 2018-045-X',
    holdingValue: '₱42,850,000.00',
    holdingNote: 'Premium subscriber',
    lastActivity: '2 hours ago',
    activityNote: 'Member Application',
  },
  {
    id: 2,
    name: 'Cagayan de Oro Transport Service Cooperative',
    email: 'contact@cdotransco.ph',
    avatar: 'TS',
    status: 'ACTIVE',
    statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    compliance: 'CDA REG: 2019-123-X',
    holdingValue: '₱28,450,000.00',
    holdingNote: 'Standard subscriber',
    lastActivity: '5 hours ago',
    activityNote: 'Payment Received',
  },
  {
    id: 3,
    name: 'Northern Mindanao Health Workers Cooperative',
    email: 'info@nmhealthcoop.ph',
    avatar: 'HW',
    status: 'ACTIVE',
    statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    compliance: 'CDA REG: 2020-234-X',
    holdingValue: '₱35,680,000.00',
    holdingNote: 'Standard subscriber',
    lastActivity: '3 hours ago',
    activityNote: 'Member Approved',
  },
  {
    id: 4,
    name: 'Lapasan Market Vendors Multi-Purpose Cooperative',
    email: 'lapasanmpc@cdo.coop',
    avatar: 'LM',
    status: 'ACTIVE',
    statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    compliance: 'CDA REG: 2017-167-X',
    holdingValue: '₱18,250,000.00',
    holdingNote: 'Basic subscriber',
    lastActivity: '1 day ago',
    activityNote: 'Renewal Processed',
  },
  {
    id: 5,
    name: 'FICCO (Federation of International Credit Cooperatives)',
    email: 'info@ficco.coop',
    avatar: 'FC',
    status: 'ACTIVE',
    statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    compliance: 'CDA REG: 2012-078-X',
    holdingValue: '₱125,500,000.00',
    holdingNote: 'Premium subscriber',
    lastActivity: '1 hour ago',
    activityNote: 'Bulk Upload Completed',
  },
  {
    id: 6,
    name: 'OIC (Oro Integrated Cooperative)',
    email: 'contact@oic.coop.ph',
    avatar: 'OI',
    status: 'ACTIVE',
    statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    compliance: 'CDA REG: 2016-145-X',
    holdingValue: '₱68,900,000.00',
    holdingNote: 'Premium subscriber',
    lastActivity: '4 hours ago',
    activityNote: 'Payment Received',
  },
];

export function Members() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1400px]">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 sm:mb-8"
      >
        <div className="flex flex-col sm:flex-row items-start justify-between mb-4 sm:mb-6 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">Cooperatives</h1>
            <p className="text-sm text-slate-600 max-w-2xl">
              Complete registry of partner cooperatives subscribed to the Koopli system. Monitor subscription status, member counts, and cooperative activity.
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Button variant="secondary" icon={Download}>
                Export
              </Button>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Button variant="primary" icon={UserPlus}>
                Add Cooperative
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-white rounded-2xl p-5 border border-slate-200"
          >
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Active Now</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-normal text-slate-900">1,012</p>
              <span className="text-xs font-medium text-emerald-600">+2%</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="bg-white rounded-2xl p-5 border border-slate-200"
          >
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Pending Review</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-normal text-slate-900">184</p>
              <span className="text-xs font-medium text-red-600">Urgent</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-2xl p-5 border border-slate-200"
          >
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Total Assets</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-normal text-slate-900">₱202.8M</p>
              <span className="text-xs font-medium text-amber-600">Holding</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="bg-white rounded-2xl p-5 border border-slate-200"
          >
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Risk Level</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-normal text-slate-900">Low</p>
              <span className="text-xs font-medium text-emerald-600">94.4% Comp.</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200 mb-4 sm:mb-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
      >
        <div className="flex-1 relative order-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Filter by name, ID, or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white transition-all border border-slate-200/50 focus:border-blue-300"
          />
        </div>
        <div className="flex gap-2 sm:gap-3 order-2">
        <Dropdown
          align="left"
          trigger={
            <Button variant="tertiary" size="sm" iconRight={Filter} className="flex-1 sm:flex-initial justify-center">
              All Statuses
            </Button>
          }
          sections={[
            {
              title: "Filter by Status",
              items: [
                {
                  icon: CheckCircle2,
                  title: "All Statuses",
                  description: "Show all cooperatives",
                  onClick: () => console.log('All statuses')
                },
                {
                  icon: CheckCircle2,
                  title: "Active",
                  description: "Verified cooperatives only",
                  onClick: () => console.log('Active only')
                },
                {
                  icon: Clock,
                  title: "Pending",
                  description: "Awaiting verification",
                  onClick: () => console.log('Pending only')
                },
                {
                  icon: Users,
                  title: "Closed",
                  description: "Inactive accounts",
                  onClick: () => console.log('Closed only')
                }
              ]
            }
          ]}
        />
        <Button variant="tertiary" size="sm" className="hidden sm:flex">
          Holding Value
        </Button>
        <Dropdown
          align="left"
          trigger={
            <Button variant="tertiary" size="sm" icon={SlidersHorizontal} className="w-9 h-9 p-0 flex-shrink-0" />
          }
          sections={[
            {
              title: "Sort Options",
              items: [
                {
                  title: "Name (A-Z)",
                  description: "Alphabetical order",
                  onClick: () => console.log('Sort by name')
                },
                {
                  title: "Holding Value",
                  description: "Highest to lowest",
                  onClick: () => console.log('Sort by value')
                },
                {
                  title: "Last Activity",
                  description: "Most recent first",
                  onClick: () => console.log('Sort by activity')
                }
              ]
            }
          ]}
        />
        </div>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
      >
        <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                Member Entity
              </th>
              <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                Lifecycle Status
              </th>
              <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                Compliance
              </th>
              <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                Holding Value
              </th>
              <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                Last Activity
              </th>
              <th className="text-left px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <motion.tr
                key={member.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 !rounded-full bg-gradient-to-br from-[#1565C0] to-[#2D2D9E] flex items-center justify-center text-white font-medium text-sm" style={{ borderRadius: '50%' }}>
                      {member.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-sm text-slate-900">{member.name}</p>
                      <p className="text-xs text-slate-500">{member.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wide border ${member.statusColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {member.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-normal text-slate-700">{member.compliance}</p>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-normal text-slate-900">{member.holdingValue}</p>
                    <p className="text-xs text-slate-500">{member.holdingNote}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">{member.lastActivity}</p>
                      <p className="text-xs text-slate-500">{member.activityNote}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-slate-300/50"
                      title="View member details"
                      onClick={() => navigate(`/members/${member.id}`)}
                    >
                      <Eye className="w-4 h-4 text-slate-600" />
                    </button>
                    <button
                      className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-slate-300/50"
                      title="Edit member"
                    >
                      <Edit2 className="w-4 h-4 text-slate-600" />
                    </button>
                    <Dropdown
                      align="right"
                      trigger={
                        <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-slate-300/50">
                          <MoreVertical className="w-4 h-4 text-slate-600" />
                        </button>
                      }
                      sections={[
                        {
                          title: "Actions",
                          items: [
                            {
                              icon: Copy,
                              title: "Copy Member ID",
                              description: "Copy to clipboard",
                              shortcut: "⌘C",
                              onClick: () => console.log('Copy member ID:', member.id)
                            },
                            {
                              icon: FileText,
                              title: "View Transactions",
                              description: "Full transaction history",
                              shortcut: "⌘T",
                              onClick: () => navigate(`/members/${member.id}/transactions`)
                            },
                            {
                              icon: Download,
                              title: "Export Data",
                              description: "Download member report",
                              onClick: () => console.log('Export data')
                            }
                          ]
                        },
                        {
                          title: "Danger zone",
                          items: [
                            {
                              icon: Ban,
                              title: "Suspend Account",
                              description: "Temporarily disable access",
                              danger: true,
                              onClick: () => console.log('Suspend account')
                            },
                            {
                              icon: Trash2,
                              title: "Delete Member",
                              description: "Permanently remove",
                              shortcut: "⌘⇧D",
                              danger: true,
                              onClick: () => console.log('Delete member')
                            }
                          ]
                        }
                      ]}
                    />
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <p className="text-sm text-slate-600">Showing <span className="font-semibold">1</span> to <span className="font-semibold">6</span> of <span className="font-semibold">342</span> cooperatives</p>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-sm font-semibold text-slate-700">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg transition-colors text-sm font-semibold text-slate-600">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg transition-colors text-sm font-semibold text-slate-600">
              3
            </button>
            <span className="px-2 text-slate-400">...</span>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-lg transition-colors text-sm font-semibold text-slate-600">
              125
            </button>
          </div>
        </div>
        </div>
      </motion.div>
    </div>
  );
}
