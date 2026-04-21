import { motion } from 'motion/react';
import { Shield, Upload, Download, Building2, Users, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';

const cooperatives = [
  {
    id: 1,
    name: 'CDO Teachers Multi-Purpose Cooperative',
    avatar: 'CT',
    pendingMembers: 12,
    approvedToday: 5,
    totalMembers: 3420,
    lastActivity: '2 hours ago',
  },
  {
    id: 2,
    name: 'Cagayan de Oro Transport Service Cooperative',
    avatar: 'TS',
    pendingMembers: 8,
    approvedToday: 2,
    totalMembers: 1850,
    lastActivity: '5 hours ago',
  },
  {
    id: 3,
    name: 'Northern Mindanao Health Workers Cooperative',
    avatar: 'HW',
    pendingMembers: 6,
    approvedToday: 3,
    totalMembers: 2100,
    lastActivity: '3 hours ago',
  },
  {
    id: 4,
    name: 'Lapasan Market Vendors Multi-Purpose Cooperative',
    avatar: 'LM',
    pendingMembers: 4,
    approvedToday: 1,
    totalMembers: 890,
    lastActivity: '6 hours ago',
  },
  {
    id: 5,
    name: 'FICCO (Federation of International Credit Cooperatives)',
    avatar: 'FC',
    pendingMembers: 24,
    approvedToday: 12,
    totalMembers: 8500,
    lastActivity: '1 hour ago',
  },
  {
    id: 6,
    name: 'OIC (Oro Integrated Cooperative)',
    avatar: 'OI',
    pendingMembers: 18,
    approvedToday: 7,
    totalMembers: 5200,
    lastActivity: '4 hours ago',
  },
];

export function CooperativeCompliance() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const totalPending = cooperatives.reduce((sum, coop) => sum + coop.pendingMembers, 0);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadStatus(`Uploading ${file.name}...`);
      // Simulate upload
      setTimeout(() => {
        setUploadStatus(`Successfully uploaded ${file.name}`);
        setTimeout(() => setUploadStatus(null), 3000);
      }, 1500);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1400px]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 !rounded-full bg-gradient-to-br from-[#1565C0] to-[#2D2D9E] flex items-center justify-center shadow-lg shadow-[#1565C0]/25" style={{ borderRadius: '50%' }}>
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">Member Approvals</h1>
              <p className="text-sm text-slate-500">{totalPending} pending members across {cooperatives.length} cooperatives</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
            />
            <Button
              variant="secondary"
              icon={Upload}
              onClick={() => fileInputRef.current?.click()}
            >
              Upload CSV
            </Button>
            <Button variant="secondary" icon={Download}>
              Export Report
            </Button>
          </div>
        </div>

        {/* Upload Status */}
        {uploadStatus && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-blue-900">{uploadStatus}</span>
          </motion.div>
        )}

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-white rounded-2xl p-6 border border-slate-200"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pending Approvals</p>
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-3xl font-semibold text-slate-900">{totalPending}</p>
            <p className="text-xs text-slate-500 mt-1">Requires review</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-2xl p-6 border border-slate-200"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Approved Today</p>
              <CheckCircle className="w-5 h-5 text-emerald-500" />
            </div>
            <p className="text-3xl font-semibold text-slate-900">
              {cooperatives.reduce((sum, coop) => sum + coop.approvedToday, 0)}
            </p>
            <p className="text-xs text-slate-500 mt-1">New members</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="bg-white rounded-2xl p-6 border border-slate-200"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Members</p>
              <Users className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-semibold text-slate-900">
              {(cooperatives.reduce((sum, coop) => sum + coop.totalMembers, 0) / 1000).toFixed(1)}K
            </p>
            <p className="text-xs text-slate-500 mt-1">Across all cooperatives</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Cooperatives List */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Cooperative
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Total Members
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Pending Approvals
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Approved Today
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Last Activity
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {cooperatives.map((coop, index) => (
                <motion.tr
                  key={coop.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                  className="hover:bg-slate-50 transition-colors cursor-pointer"
                  onClick={() => navigate(`/compliance/${coop.id}`)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 !rounded-full bg-gradient-to-br from-[#1565C0] to-[#2D2D9E] flex items-center justify-center text-white font-medium text-sm shadow-lg shadow-[#1565C0]/25" style={{ borderRadius: '50%' }}>
                        {coop.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-slate-900">{coop.name}</p>
                        <p className="text-xs text-slate-500">CDA Registered</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-slate-900">{coop.totalMembers.toLocaleString()}</p>
                    <p className="text-xs text-slate-500">Active members</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="text-sm font-semibold text-amber-700">{coop.pendingMembers}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-sm font-semibold text-emerald-700">{coop.approvedToday}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-600">{coop.lastActivity}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/compliance/${coop.id}`);
                        }}
                        className="px-4 py-2 text-sm font-medium text-[#1565C0] hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
