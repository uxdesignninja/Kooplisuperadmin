import { StatCard } from '../components/StatCard';
import { LiquidityChart } from '../components/LiquidityChart';
import { Dropdown } from '../components/Dropdown';
import { Button } from '../components/Button';
import { Building2, Users, DollarSign, Activity, Download, FileText, FileSpreadsheet, Mail, ChevronDown, Coins, CreditCard, Repeat, Clock, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const pendingApprovals = [
  {
    id: 5,
    name: 'FICCO',
    fullName: 'Federation of International Credit Cooperatives',
    avatar: 'FC',
    pendingCount: 24,
    lastUpdated: '1 hour ago',
  },
  {
    id: 6,
    name: 'OIC',
    fullName: 'Oro Integrated Cooperative',
    avatar: 'OI',
    pendingCount: 18,
    lastUpdated: '4 hours ago',
  },
  {
    id: 1,
    name: 'CDO Teachers MPC',
    fullName: 'CDO Teachers Multi-Purpose Cooperative',
    avatar: 'CT',
    pendingCount: 12,
    lastUpdated: '2 hours ago',
  },
  {
    id: 3,
    name: 'NM Health Workers',
    fullName: 'Northern Mindanao Health Workers Cooperative',
    avatar: 'HW',
    pendingCount: 6,
    lastUpdated: '3 hours ago',
  },
];

const approvalStats = {
  totalPending: 60,
  approvedToday: 19,
};

const cooperativeUnifiedData = {
  '7D': [
    { id: 5, name: 'FICCO', fullName: 'Federation of International Credit Cooperatives', avatar: 'FC', totalMembers: 8500, subscribedMembers: 6800, percentage: 80, pendingCount: 24, lastUpdated: '1 hour ago' },
    { id: 6, name: 'OIC', fullName: 'Oro Integrated Cooperative', avatar: 'OI', totalMembers: 5200, subscribedMembers: 3900, percentage: 75, pendingCount: 18, lastUpdated: '4 hours ago' },
    { id: 1, name: 'CDO Teachers MPC', fullName: 'CDO Teachers Multi-Purpose Cooperative', avatar: 'CT', totalMembers: 3420, subscribedMembers: 2400, percentage: 70, pendingCount: 12, lastUpdated: '2 hours ago' },
    { id: 3, name: 'NM Health Workers', fullName: 'Northern Mindanao Health Workers Cooperative', avatar: 'HW', totalMembers: 2100, subscribedMembers: 1470, percentage: 70, pendingCount: 6, lastUpdated: '3 hours ago' },
  ],
  '30D': [
    { id: 5, name: 'FICCO', fullName: 'Federation of International Credit Cooperatives', avatar: 'FC', totalMembers: 8500, subscribedMembers: 6630, percentage: 78, pendingCount: 24, lastUpdated: '1 hour ago' },
    { id: 6, name: 'OIC', fullName: 'Oro Integrated Cooperative', avatar: 'OI', totalMembers: 5200, subscribedMembers: 3744, percentage: 72, pendingCount: 18, lastUpdated: '4 hours ago' },
    { id: 1, name: 'CDO Teachers MPC', fullName: 'CDO Teachers Multi-Purpose Cooperative', avatar: 'CT', totalMembers: 3420, subscribedMembers: 2394, percentage: 70, pendingCount: 12, lastUpdated: '2 hours ago' },
    { id: 3, name: 'NM Health Workers', fullName: 'Northern Mindanao Health Workers Cooperative', avatar: 'HW', totalMembers: 2100, subscribedMembers: 1428, percentage: 68, pendingCount: 6, lastUpdated: '3 hours ago' },
  ],
  '1Y': [
    { id: 5, name: 'FICCO', fullName: 'Federation of International Credit Cooperatives', avatar: 'FC', totalMembers: 8500, subscribedMembers: 5950, percentage: 70, pendingCount: 24, lastUpdated: '1 hour ago' },
    { id: 6, name: 'OIC', fullName: 'Oro Integrated Cooperative', avatar: 'OI', totalMembers: 5200, subscribedMembers: 3380, percentage: 65, pendingCount: 18, lastUpdated: '4 hours ago' },
    { id: 1, name: 'CDO Teachers MPC', fullName: 'CDO Teachers Multi-Purpose Cooperative', avatar: 'CT', totalMembers: 3420, subscribedMembers: 2052, percentage: 60, pendingCount: 12, lastUpdated: '2 hours ago' },
    { id: 3, name: 'NM Health Workers', fullName: 'Northern Mindanao Health Workers Cooperative', avatar: 'HW', totalMembers: 2100, subscribedMembers: 1260, percentage: 60, pendingCount: 6, lastUpdated: '3 hours ago' },
  ],
};

export function Dashboard() {
  const navigate = useNavigate();
  const [subscriptionRange, setSubscriptionRange] = useState<'7D' | '30D' | '1Y'>('7D');

  const handleDownloadUnifiedCSV = () => {
    const data = cooperativeUnifiedData[subscriptionRange];
    const csvContent = [
      ['Cooperative Name', 'Total Members', 'Subscribed Members', 'Subscription Rate', 'Pending Approvals', 'Last Updated'],
      ...data.map(coop => [
        coop.fullName,
        coop.totalMembers,
        coop.subscribedMembers,
        `${coop.percentage}%`,
        coop.pendingCount,
        coop.lastUpdated
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cooperative-analytics-${subscriptionRange}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1400px]">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2">
            Cooperative Summary
          </h1>
          <p className="text-sm sm:text-base text-slate-600">
            Operational overview for{' '}
            <span className="font-medium text-[#1565C0]">Koopli</span>
          </p>
        </div>
        <div className="flex flex-row gap-2 sm:gap-4 w-full sm:w-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <Dropdown
              align="right"
              trigger={
                <Button
                  variant="tertiary"
                  size="lg"
                  icon={Download}
                  iconRight={ChevronDown}
                >
                  Download Report
                </Button>
              }
              sections={[
                {
                  title: "Export Format",
                  items: [
                    {
                      icon: FileText,
                      title: "PDF Report",
                      description: "Formatted executive summary",
                      shortcut: "⌘P",
                      onClick: () => console.log('Export PDF')
                    },
                    {
                      icon: FileSpreadsheet,
                      title: "Excel Spreadsheet",
                      description: "Detailed data export",
                      shortcut: "⌘E",
                      onClick: () => console.log('Export Excel')
                    },
                    {
                      icon: Mail,
                      title: "Email Report",
                      description: "Send to stakeholders",
                      onClick: () => console.log('Email report')
                    }
                  ]
                }
              ]}
            />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Dropdown
              align="right"
              trigger={
                <Button
                  variant="primary"
                  size="lg"
                  iconRight={ChevronDown}
                >
                  Quick Actions
                </Button>
              }
              sections={[
                {
                  title: "Administrative Actions",
                  items: [
                    {
                      icon: Coins,
                      title: "Onboard Cooperative",
                      description: "Add new subscriber",
                      onClick: () => console.log('Onboard cooperative')
                    },
                    {
                      icon: CreditCard,
                      title: "Process Renewal",
                      description: "Subscription renewal",
                      onClick: () => console.log('Process renewal')
                    },
                    {
                      icon: Repeat,
                      title: "Generate Invoice",
                      description: "Billing management",
                      onClick: () => console.log('Generate invoice')
                    }
                  ]
                }
              ]}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 lg:mb-12">
        <StatCard
          icon={Building2}
          label="Active Subscriptions"
          value="342"
          change="+18"
          changeType="positive"
          subtitle="Cooperatives subscribed"
          trend={[60, 65, 70, 75, 80, 88, 100]}
          lastUpdated="2 min ago"
          iconColor="blue"
          delay={0.1}
        />
        <StatCard
          icon={Users}
          label="Total Member Reach"
          value="2.8M"
          change="+125K"
          changeType="positive"
          subtitle="Across all cooperatives"
          trend={[50, 55, 60, 65, 72, 80, 85]}
          lastUpdated="5 min ago"
          iconColor="emerald"
          delay={0.2}
        />
        <StatCard
          icon={DollarSign}
          label="Monthly Recurring Revenue"
          value="₱12.4M"
          change="+8.3%"
          changeType="positive"
          subtitle="Subscription revenue"
          trend={[45, 50, 55, 62, 70, 78, 82]}
          lastUpdated="1 hour ago"
          iconColor="purple"
          delay={0.3}
        />
        <StatCard
          icon={Activity}
          label="Platform Engagement"
          value="94.2%"
          change="+2.1%"
          changeType="positive"
          subtitle="Active daily users"
          trend={[85, 87, 88, 90, 91, 93, 94]}
          lastUpdated="10 min ago"
          iconColor="amber"
          delay={0.4}
        />
      </div>

      {/* Revenue Analytics - Full Width */}
      <LiquidityChart />

      {/* Unified Member Subscription Analytics */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="bg-white rounded-2xl border border-slate-200 mt-8 lg:mt-12"
      >
        {/* Header Section */}
        <div className="p-4 sm:p-6 border-b border-slate-200">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">
                Member Subscription Analytics
              </h3>
              <p className="text-xs text-slate-500">
                Track subscription rates and pending approvals across cooperatives
              </p>
            </div>
            <div className="flex items-center gap-2">
              {(['7D', '30D', '1Y'] as const).map((range) => (
                <button
                  key={range}
                  onClick={() => setSubscriptionRange(range)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all focus:outline-none ${
                    subscriptionRange === range
                      ? 'bg-gradient-to-br from-[#1565C0] to-[#2D2D9E] text-white shadow-md shadow-[#1565C0]/25 focus:ring-2 focus:ring-[#1565C0]/50'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 focus:ring-2 focus:ring-slate-300/50'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 mb-1">Total Active Members</p>
                <p className="text-2xl font-semibold text-slate-900">
                  {cooperativeUnifiedData[subscriptionRange].reduce((sum, coop) => sum + coop.totalMembers, 0).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 mb-1">Koopli App Members</p>
                <p className="text-2xl font-semibold text-slate-900">
                  {cooperativeUnifiedData[subscriptionRange].reduce((sum, coop) => sum + coop.subscribedMembers, 0).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 mb-1">Pending Review</p>
                <p className="text-2xl font-semibold text-slate-900">{approvalStats.totalPending}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 mb-1">Approved Today</p>
                <p className="text-2xl font-semibold text-slate-900">{approvalStats.approvedToday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cooperatives List */}
        <div className="divide-y divide-slate-100">
          {cooperativeUnifiedData[subscriptionRange].map((coop, index) => (
            <motion.div
              key={coop.id}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 + index * 0.05, duration: 0.3 }}
              onClick={() => navigate(`/compliance/${coop.id}`)}
              className="p-4 sm:p-5 hover:bg-slate-50 transition-colors cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 !rounded-full bg-gradient-to-br from-[#1565C0] to-[#2D2D9E] flex items-center justify-center text-white font-medium text-sm shadow-lg shadow-[#1565C0]/25 flex-shrink-0" style={{ borderRadius: '50%' }}>
                  {coop.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="font-semibold text-sm text-slate-900 group-hover:text-[#1565C0] transition-colors">
                      {coop.name}
                    </p>
                    {coop.pendingCount > 0 && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 flex-shrink-0">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span className="text-xs font-semibold text-amber-700">
                          {coop.pendingCount} pending
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>
                        <span className="font-semibold text-slate-900">{coop.subscribedMembers.toLocaleString()}</span>
                        {' '}Koopli members of{' '}
                        <span className="font-semibold text-slate-600">{coop.totalMembers.toLocaleString()}</span>
                        {' '}total
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-emerald-600">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span className="font-semibold">{coop.percentage}%</span>
                      </div>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500">Updated {coop.lastUpdated}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${coop.percentage}%` }}
                    transition={{ delay: 1.0 + index * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-gradient-to-r from-[#1565C0] to-[#22C55E] rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="p-4 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="secondary"
              onClick={() => navigate('/compliance')}
              className="flex-1 justify-center"
            >
              View All
            </Button>
            <Button
              variant="tertiary"
              icon={Download}
              onClick={handleDownloadUnifiedCSV}
              className="flex-1 justify-center"
            >
              Download CSV
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
