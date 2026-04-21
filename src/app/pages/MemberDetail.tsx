import { motion } from 'motion/react';
import { ArrowLeft, Edit2, TrendingUp, Download, FileText, CheckCircle, AlertTriangle, Building2, MapPin, DollarSign, Calendar, Shield, Vote, FileCheck } from 'lucide-react';
import { useParams, useNavigate } from 'react-router';
import { Button } from '../components/Button';

// Mock member data - in real app, this would come from API
const getMemberData = (id: string) => {
  const members: Record<string, any> = {
    '1': {
      name: 'Pag-IBIG Fund Multi-Purpose Cooperative',
      title: 'Premium Subscriber • 12,450 Members',
      avatar: 'PI',
      classification: 'VERIFIED COOPERATIVE',
      votingPower: 'N/A',
      memberId: 'CDA REG: 2023-001-NCR',
      totalValue: '₱125,012,750.00',
      ytdChange: 'Subscription active since Jan 2023',
      stakedEquity: 85,
      liquidAssets: 92,
      kycStatus: 'VERIFIED',
      onboardingDate: 'Jan 15, 2023',
      riskScore: 'Low (15/100)',
      taxResidency: 'Quezon City, Metro Manila',
      sourceOfWealth: 'Member Contributions & Savings',
      hasAlert: false,
      alertType: '',
      alertMessage: '',
      subWallets: [
        { type: 'SUBSCRIPTION FEE', amount: '₱50,000.00/mo', subtitle: 'Premium Plan - Annual Billing', progress: 75, icon: DollarSign, color: 'blue' },
        { type: 'MEMBER COUNT', amount: '12,450', subtitle: 'Active cooperative members', progress: 85, icon: Building2, color: 'emerald' },
        { type: 'TRANSACTION VOLUME', amount: '₱8.2M/mo', subtitle: 'Average monthly transactions', progress: 90, icon: TrendingUp, color: 'emerald' },
        { type: 'Add Service Module', amount: '', subtitle: '', progress: 0, icon: null, color: 'add' },
      ],
      governanceActivity: [
        { type: 'voted', title: 'Renewed Premium Subscription', subtitle: 'Extended annual subscription for 12 months', date: 'Jan 15, 2025', icon: Vote },
        { type: 'coauthored', title: 'Onboarded 1,250 New Members', subtitle: 'Successfully migrated members to Koopli platform', date: 'Dec 10, 2024', icon: FileCheck },
        { type: 'abstained', title: 'System Integration Completed', subtitle: 'Connected existing loan management system', date: 'Nov 08, 2024', icon: AlertTriangle },
      ]
    },
    '2': {
      name: 'Cagayan de Oro Transport Service Cooperative',
      title: 'Standard Subscriber • 1,850 Members',
      avatar: 'TS',
      classification: 'VERIFIED COOPERATIVE',
      votingPower: 'N/A',
      memberId: 'CDA REG: 2019-123-X',
      totalValue: '₱28,450,000.00',
      ytdChange: 'Subscription active since Jun 2019',
      stakedEquity: 65,
      liquidAssets: 58,
      kycStatus: 'VERIFIED',
      onboardingDate: 'Jun 10, 2019',
      riskScore: 'Low (35/100)',
      taxResidency: 'Cagayan de Oro City',
      sourceOfWealth: 'Transport Services',
      hasAlert: false,
      subWallets: [
        { type: 'SUBSCRIPTION FEE', amount: '₱35,000.00/mo', subtitle: 'Standard Plan - Annual Billing', progress: 65, icon: DollarSign, color: 'blue' },
        { type: 'MEMBER COUNT', amount: '1,850', subtitle: 'Active cooperative members', progress: 70, icon: Building2, color: 'emerald' },
        { type: 'TRANSACTION VOLUME', amount: '₱2.8M/mo', subtitle: 'Average monthly transactions', progress: 60, icon: TrendingUp, color: 'emerald' },
      ],
      governanceActivity: [
        { type: 'voted', title: 'Renewed Standard Subscription', subtitle: 'Extended subscription for 12 months', date: 'Jun 10, 2024', icon: Vote },
        { type: 'coauthored', title: 'Onboarded 180 New Members', subtitle: 'Successfully migrated members to Koopli', date: 'May 15, 2024', icon: FileCheck },
      ]
    },
    '3': {
      name: 'Northern Mindanao Health Workers Cooperative',
      title: 'Standard Subscriber • 2,100 Members',
      avatar: 'HW',
      classification: 'VERIFIED COOPERATIVE',
      votingPower: 'N/A',
      memberId: 'CDA REG: 2020-234-X',
      totalValue: '₱35,680,000.00',
      ytdChange: 'Subscription active since Mar 2020',
      stakedEquity: 68,
      liquidAssets: 72,
      kycStatus: 'VERIFIED',
      onboardingDate: 'Mar 15, 2020',
      riskScore: 'Low (28/100)',
      taxResidency: 'Cagayan de Oro City',
      sourceOfWealth: 'Healthcare Services',
      hasAlert: false,
      subWallets: [
        { type: 'SUBSCRIPTION FEE', amount: '₱38,000.00/mo', subtitle: 'Standard Plan - Annual Billing', progress: 68, icon: DollarSign, color: 'blue' },
        { type: 'MEMBER COUNT', amount: '2,100', subtitle: 'Active cooperative members', progress: 75, icon: Building2, color: 'emerald' },
        { type: 'TRANSACTION VOLUME', amount: '₱3.5M/mo', subtitle: 'Average monthly transactions', progress: 70, icon: TrendingUp, color: 'emerald' },
      ],
      governanceActivity: [
        { type: 'voted', title: 'Renewed Standard Subscription', subtitle: 'Extended subscription for 12 months', date: 'Mar 15, 2025', icon: Vote },
        { type: 'coauthored', title: 'COVID Relief Fund Distribution', subtitle: 'Distributed emergency funds to members', date: 'Jan 10, 2025', icon: FileCheck },
      ]
    },
    '4': {
      name: 'Lapasan Market Vendors Multi-Purpose Cooperative',
      title: 'Basic Subscriber • 890 Members',
      avatar: 'LM',
      classification: 'VERIFIED COOPERATIVE',
      votingPower: 'N/A',
      memberId: 'CDA REG: 2017-167-X',
      totalValue: '₱18,250,000.00',
      ytdChange: 'Subscription active since Aug 2017',
      stakedEquity: 55,
      liquidAssets: 60,
      kycStatus: 'VERIFIED',
      onboardingDate: 'Aug 22, 2017',
      riskScore: 'Low (42/100)',
      taxResidency: 'Cagayan de Oro City',
      sourceOfWealth: 'Market Vending',
      hasAlert: false,
      subWallets: [
        { type: 'SUBSCRIPTION FEE', amount: '₱20,000.00/mo', subtitle: 'Basic Plan - Annual Billing', progress: 55, icon: DollarSign, color: 'blue' },
        { type: 'MEMBER COUNT', amount: '890', subtitle: 'Active cooperative members', progress: 60, icon: Building2, color: 'emerald' },
        { type: 'TRANSACTION VOLUME', amount: '₱1.8M/mo', subtitle: 'Average monthly transactions', progress: 58, icon: TrendingUp, color: 'emerald' },
      ],
      governanceActivity: [
        { type: 'voted', title: 'Renewed Basic Subscription', subtitle: 'Extended subscription for 12 months', date: 'Aug 22, 2024', icon: Vote },
        { type: 'coauthored', title: 'Market Upgrade Project', subtitle: 'Funded market stall improvements', date: 'Jun 05, 2024', icon: FileCheck },
      ]
    },
    '5': {
      name: 'FICCO (Federation of International Credit Cooperatives)',
      title: 'Premium Subscriber • 8,500 Members',
      avatar: 'FC',
      classification: 'VERIFIED COOPERATIVE',
      votingPower: 'N/A',
      memberId: 'CDA REG: 2012-078-X',
      totalValue: '₱125,500,000.00',
      ytdChange: 'Subscription active since Apr 2012',
      stakedEquity: 92,
      liquidAssets: 95,
      kycStatus: 'VERIFIED',
      onboardingDate: 'Apr 10, 2012',
      riskScore: 'Low (12/100)',
      taxResidency: 'Cagayan de Oro City',
      sourceOfWealth: 'Member Contributions & Investments',
      hasAlert: false,
      subWallets: [
        { type: 'SUBSCRIPTION FEE', amount: '₱75,000.00/mo', subtitle: 'Premium Plan - Annual Billing', progress: 92, icon: DollarSign, color: 'blue' },
        { type: 'MEMBER COUNT', amount: '8,500', subtitle: 'Active cooperative members', progress: 95, icon: Building2, color: 'emerald' },
        { type: 'TRANSACTION VOLUME', amount: '₱12.5M/mo', subtitle: 'Average monthly transactions', progress: 90, icon: TrendingUp, color: 'emerald' },
      ],
      governanceActivity: [
        { type: 'voted', title: 'Renewed Premium Subscription', subtitle: 'Extended annual subscription', date: 'Apr 10, 2025', icon: Vote },
        { type: 'coauthored', title: 'International Partnership Established', subtitle: 'Partnership with Asian cooperative networks', date: 'Feb 15, 2025', icon: FileCheck },
      ]
    },
    '6': {
      name: 'OIC (Oro Integrated Cooperative)',
      title: 'Premium Subscriber • 5,200 Members',
      avatar: 'OI',
      classification: 'VERIFIED COOPERATIVE',
      votingPower: 'N/A',
      memberId: 'CDA REG: 2016-145-X',
      totalValue: '₱68,900,000.00',
      ytdChange: 'Subscription active since Sep 2016',
      stakedEquity: 82,
      liquidAssets: 88,
      kycStatus: 'VERIFIED',
      onboardingDate: 'Sep 18, 2016',
      riskScore: 'Low (22/100)',
      taxResidency: 'Cagayan de Oro City',
      sourceOfWealth: 'Diversified Cooperative Services',
      hasAlert: false,
      subWallets: [
        { type: 'SUBSCRIPTION FEE', amount: '₱55,000.00/mo', subtitle: 'Premium Plan - Annual Billing', progress: 82, icon: DollarSign, color: 'blue' },
        { type: 'MEMBER COUNT', amount: '5,200', subtitle: 'Active cooperative members', progress: 88, icon: Building2, color: 'emerald' },
        { type: 'TRANSACTION VOLUME', amount: '₱6.9M/mo', subtitle: 'Average monthly transactions', progress: 85, icon: TrendingUp, color: 'emerald' },
      ],
      governanceActivity: [
        { type: 'voted', title: 'Renewed Premium Subscription', subtitle: 'Extended annual subscription', date: 'Sep 18, 2024', icon: Vote },
        { type: 'coauthored', title: 'Digital Transformation Initiative', subtitle: 'Launched mobile banking for members', date: 'Nov 20, 2024', icon: FileCheck },
      ]
    }
  };

  return members[id] || members['1'];
};

export function MemberDetail() {
  const { memberId } = useParams();
  const navigate = useNavigate();
  const member = getMemberData(memberId || '1');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'VERIFIED':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'PENDING':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  const getWalletColor = (color: string) => {
    const colors = {
      blue: 'bg-[#1565C0]/100',
      red: 'bg-red-500',
      emerald: 'bg-emerald-500',
      amber: 'bg-amber-500',
      purple: 'bg-purple-500',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1400px]">
      {/* Back Button */}
      <motion.button
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => navigate('/members')}
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 lg:mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Back to Cooperatives</span>
      </motion.button>

      {/* Header Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4 sm:gap-6 mb-4 sm:mb-6"
      >
        {/* Left - Profile Info */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Avatar */}
            <div className="relative flex-shrink-0 self-center sm:self-start">
              <div className="w-24 h-24 sm:w-32 sm:h-32 !rounded-full bg-gradient-to-br from-[#1565C0] to-[#2D2D9E] flex items-center justify-center text-white text-2xl sm:text-3xl font-semibold shadow-lg" style={{ borderRadius: '50%' }}>
                {member.avatar}
              </div>
              <button className="absolute bottom-0 right-0 w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
                <Edit2 className="w-3.5 h-3.5 text-white" />
              </button>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-1.5 leading-tight">{member.name}</h1>
              <p className="text-sm text-slate-600 mb-3 sm:mb-4">{member.title}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-900 rounded-full text-[10px] font-semibold uppercase tracking-wide">
                  {member.classification}
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-[10px] font-semibold uppercase tracking-wide">
                  Voting Power: {member.votingPower}
                </span>
                <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-[10px] font-semibold uppercase tracking-wide">
                  ID: {member.memberId}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button variant="primary" icon={TrendingUp} className="w-full sm:w-auto justify-center">
                  Execute Transfer
                </Button>
                <Button variant="secondary" className="w-full sm:w-auto justify-center">
                  Freeze Account
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Financial Overview */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 sm:p-6 border border-slate-200">
          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-2">Financial DNA</p>
          <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 mb-1.5">{member.totalValue}</h2>
          <p className="text-sm text-emerald-600 font-medium mb-4 sm:mb-6">{member.ytdChange}</p>

          <div className="space-y-3.5">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-700">Staked Equity</span>
                <span className="text-xs font-normal text-slate-900">{member.stakedEquity}%</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full" style={{ width: `${member.stakedEquity}%` }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-700">Liquid Assets</span>
                <span className="text-xs font-normal text-slate-900">{member.liquidAssets}%</span>
              </div>
              <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 rounded-full" style={{ width: `${member.liquidAssets}%` }} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* Allocated Sub-Wallets */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-5 gap-2">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900">Allocated Sub-Wallets</h3>
              <button className="text-xs font-medium text-[#1565C0] hover:text-[#0284C7] text-left sm:text-right">View Ledger Detail</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {member.subWallets.map((wallet: any, index: number) => (
                wallet.color === 'add' ? (
                  <button
                    key={index}
                    className="border-2 border-dashed border-slate-300 rounded-xl p-5 hover:border-[#1565C0] hover:bg-[#1565C0]/10 transition-all text-slate-400 hover:text-[#1565C0] flex flex-col items-center justify-center gap-2"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                      <span className="text-xl font-medium">+</span>
                    </div>
                    <span className="text-xs font-medium text-center">Deposit New Sub-Wallet</span>
                  </button>
                ) : (
                  <div key={index} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-9 h-9 rounded-lg ${getWalletColor(wallet.color)} flex items-center justify-center flex-shrink-0`}>
                        {wallet.icon && <wallet.icon className="w-4 h-4 text-white" />}
                      </div>
                      <button className="text-slate-400 hover:text-slate-600">
                        <FileText className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">{wallet.type}</p>
                    {wallet.amount && <p className="text-xl font-normal text-slate-900 mb-1">{wallet.amount}</p>}
                    <p className="text-xs text-slate-600 mb-3">{wallet.subtitle}</p>
                    {wallet.progress > 0 && (
                      <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full ${getWalletColor(wallet.color)} rounded-full`} style={{ width: `${wallet.progress}%` }} />
                      </div>
                    )}
                  </div>
                )
              ))}
            </div>
          </motion.div>

          {/* Recent Governance Activity */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200"
          >
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4 sm:mb-5">Recent Governance Activity</h3>

            <div className="space-y-3">
              {member.governanceActivity.map((activity: any, index: number) => (
                <div key={index} className="flex gap-3">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      activity.type === 'voted' ? 'bg-blue-100' :
                      activity.type === 'coauthored' ? 'bg-emerald-100' :
                      'bg-amber-100'
                    }`}>
                      <activity.icon className={`w-4 h-4 ${
                        activity.type === 'voted' ? 'text-[#1565C0]' :
                        activity.type === 'coauthored' ? 'text-emerald-600' :
                        'text-amber-600'
                      }`} />
                    </div>
                    {index < member.governanceActivity.length - 1 && (
                      <div className="w-0.5 flex-1 bg-slate-200 mt-2 min-h-[20px]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 pb-4">
                    <div className="flex items-start justify-between mb-1 gap-2">
                      <h4 className="text-sm font-medium text-slate-900 flex-1">{activity.title}</h4>
                      <span className="text-xs text-slate-500 font-normal flex-shrink-0">{activity.date}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{activity.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* Compliance Dossier */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200"
          >
            <div className="flex items-center gap-2 mb-5">
              <Shield className="w-4 h-4 text-[#1565C0]" />
              <h3 className="text-base font-semibold text-slate-900">Compliance Dossier</h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">KYC/AML STATUS</p>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide border ${getStatusColor(member.kycStatus)}`}>
                  <CheckCircle className="w-3 h-3" />
                  {member.kycStatus}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Onboarding Date</p>
                  <p className="text-xs font-medium text-slate-900">{member.onboardingDate}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Risk Score</p>
                  <p className="text-xs font-medium text-slate-900">{member.riskScore}</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Tax Residency</p>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <p className="text-xs font-medium text-slate-900">{member.taxResidency}</p>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Source of Wealth</p>
                <div className="flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <p className="text-xs font-medium text-slate-900">{member.sourceOfWealth}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2">
                <button className="w-full flex items-center justify-between px-3 py-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-3.5 h-3.5 text-slate-600" />
                    <span className="text-xs font-medium text-slate-900">Annual Tax Cert</span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                </button>
                <button className="w-full flex items-center justify-between px-3 py-2.5 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors">
                  <div className="flex items-center gap-2.5">
                    <FileCheck className="w-3.5 h-3.5 text-slate-600" />
                    <span className="text-xs font-medium text-slate-900">Bank Attestation</span>
                  </div>
                  <Download className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Alert Box */}
          {member.hasAlert && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="bg-gradient-to-br from-red-600 to-red-500 rounded-2xl p-5 text-white"
            >
              <div className="flex items-start gap-2.5 mb-3">
                <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold uppercase tracking-wide mb-2">{member.alertType}</h4>
                  <p className="text-xs leading-relaxed opacity-95">{member.alertMessage}</p>
                </div>
              </div>
              <Button variant="secondary" className="w-full mt-3">
                Review Dossier
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
