import { motion } from 'motion/react';
import { Shield, CheckCircle, AlertTriangle, Clock, FileText, Calendar, MapPin, Phone, Mail, Building2, CreditCard, Download, GraduationCap, PlayCircle, ArrowLeft, Upload } from 'lucide-react';
import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Button } from '../components/Button';

const cooperativeMembers: Record<string, any[]> = {
  '1': [
    { id: 1, name: 'Maria Clara Santos', status: 'pending', riskLevel: 'Low', daysAgo: '1d ago', lmsStatus: 'ongoing' },
    { id: 2, name: 'Jose Rizal Reyes', status: 'verified', riskLevel: 'Low', daysAgo: '2d ago', lmsStatus: 'completed' },
    { id: 3, name: 'Ana Marie Garcia', status: 'pending', riskLevel: 'Medium', daysAgo: '3d ago', lmsStatus: 'not-started' },
    { id: 4, name: 'Roberto Cruz Mendoza', status: 'pending', riskLevel: 'Low', daysAgo: '5 hours ago', lmsStatus: 'ongoing' },
    { id: 5, name: 'Lourdes Victoria Tan', status: 'flagged', riskLevel: 'High', daysAgo: '2d ago', lmsStatus: 'ongoing' },
  ],
  '2': [
    { id: 1, name: 'Pedro Gonzales', status: 'pending', riskLevel: 'Low', daysAgo: '3 hours ago', lmsStatus: 'ongoing' },
    { id: 2, name: 'Carmen Lopez', status: 'pending', riskLevel: 'Low', daysAgo: '1d ago', lmsStatus: 'completed' },
    { id: 3, name: 'Diego Rivera', status: 'verified', riskLevel: 'Low', daysAgo: '2d ago', lmsStatus: 'completed' },
  ],
  '3': [
    { id: 1, name: 'Ricardo Fernandez', status: 'pending', riskLevel: 'Low', daysAgo: '2 hours ago', lmsStatus: 'ongoing' },
    { id: 2, name: 'Elena Morales', status: 'pending', riskLevel: 'Low', daysAgo: '4 hours ago', lmsStatus: 'ongoing' },
    { id: 3, name: 'Carlos Bautista', status: 'verified', riskLevel: 'Low', daysAgo: '1d ago', lmsStatus: 'completed' },
  ],
  '4': [
    { id: 1, name: 'Angelica Diaz', status: 'pending', riskLevel: 'Low', daysAgo: '6 hours ago', lmsStatus: 'ongoing' },
    { id: 2, name: 'Ramon Villanueva', status: 'pending', riskLevel: 'Low', daysAgo: '1d ago', lmsStatus: 'not-started' },
  ],
  '5': [
    { id: 1, name: 'Ferdinand Santos', status: 'pending', riskLevel: 'Low', daysAgo: '3 hours ago', lmsStatus: 'ongoing' },
    { id: 2, name: 'Gloria Ramos', status: 'pending', riskLevel: 'Medium', daysAgo: '5 hours ago', lmsStatus: 'not-started' },
    { id: 3, name: 'Benjamin Cruz', status: 'verified', riskLevel: 'Low', daysAgo: '1d ago', lmsStatus: 'completed' },
    { id: 4, name: 'Teresa Aquino', status: 'pending', riskLevel: 'Low', daysAgo: '8 hours ago', lmsStatus: 'ongoing' },
  ],
  '6': [
    { id: 1, name: 'Antonio Reyes', status: 'pending', riskLevel: 'Low', daysAgo: '2 hours ago', lmsStatus: 'ongoing' },
    { id: 2, name: 'Patricia Gonzalez', status: 'pending', riskLevel: 'Low', daysAgo: '4 hours ago', lmsStatus: 'ongoing' },
    { id: 3, name: 'Manuel Torres', status: 'pending', riskLevel: 'Medium', daysAgo: '6 hours ago', lmsStatus: 'not-started' },
    { id: 4, name: 'Rosa Mendoza', status: 'verified', riskLevel: 'Low', daysAgo: '1d ago', lmsStatus: 'completed' },
  ],
};

const cooperativeNames: Record<string, string> = {
  '1': 'CDO Teachers Multi-Purpose Cooperative',
  '2': 'Cagayan de Oro Transport Service Cooperative',
  '3': 'Northern Mindanao Health Workers Cooperative',
  '4': 'Lapasan Market Vendors Multi-Purpose Cooperative',
  '5': 'FICCO (Federation of International Credit Cooperatives)',
  '6': 'OIC (Oro Integrated Cooperative)',
};

export function Compliance() {
  const { cooperativeId } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const members = cooperativeMembers[cooperativeId || '1'] || cooperativeMembers['1'];
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const cooperativeName = cooperativeNames[cooperativeId || '1'] || 'Cooperative';

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadStatus(`Uploading ${file.name}...`);
      setTimeout(() => {
        setUploadStatus(`Successfully uploaded ${file.name} - ${Math.floor(Math.random() * 50 + 10)} members added to queue`);
        setTimeout(() => setUploadStatus(null), 4000);
      }, 1500);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'verified':
        return { icon: CheckCircle, color: 'text-emerald-600 bg-emerald-50', label: 'Verified' };
      case 'pending':
        return { icon: Clock, color: 'text-amber-600 bg-amber-50', label: 'Pending' };
      case 'flagged':
        return { icon: AlertTriangle, color: 'text-red-600 bg-red-50', label: 'Flagged' };
      default:
        return { icon: Clock, color: 'text-slate-600 bg-slate-50', label: 'Unknown' };
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1400px]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-4 sm:mb-6"
      >
        {/* Back Button */}
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/compliance')}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to All Cooperatives</span>
        </motion.button>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 !rounded-full bg-gradient-to-br from-[#1565C0] to-[#2D2D9E] flex items-center justify-center shadow-lg shadow-[#1565C0]/25" style={{ borderRadius: '50%' }}>
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">{cooperativeName}</h1>
              <p className="text-sm text-slate-500">{members.length} members require review</p>
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
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4 sm:gap-6">
        {/* Left Sidebar - Member List */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
        >
          <div className="p-4 border-b border-slate-200">
            <input
              type="text"
              placeholder="Search members..."
              className="w-full px-4 py-2 bg-slate-50 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:bg-white transition-all border border-slate-200/50 focus:border-blue-300"
            />
          </div>
          <div className="overflow-y-auto max-h-[calc(100vh-280px)]">
            {members.map((member, index) => {
              const badge = getStatusBadge(member.status);
              const isSelected = selectedMember.id === member.id;

              return (
                <motion.button
                  key={member.id}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                  onClick={() => setSelectedMember(member)}
                  className={`w-full px-4 py-4 border-b border-slate-100 hover:bg-slate-50 transition-colors text-left ${
                    isSelected ? 'bg-[#1565C0]/10 hover:bg-[#1565C0]/10' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className={`font-semibold text-sm ${isSelected ? 'text-blue-900' : 'text-slate-900'}`}>
                      {member.name}
                    </p>
                    <span className="text-xs text-slate-500">{member.daysAgo}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <badge.icon className={`w-3.5 h-3.5 ${badge.color.split(' ')[0]}`} />
                    <span className={`text-xs font-medium ${badge.color.split(' ')[0]}`}>
                      {badge.label}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-600">{member.riskLevel} Risk</span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Right Panel - Member Details */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-6"
        >
          {/* Header Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 !rounded-full bg-gradient-to-br from-[#1565C0] to-[#2D2D9E] flex items-center justify-center text-white font-semibold text-lg" style={{ borderRadius: '50%' }}>
                    {selectedMember.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">{selectedMember.name}</h2>
                    <p className="text-sm text-slate-500">Member ID: #FICCO-{selectedMember.id}891</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">Joined Dec 24, 2019</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-600">Last login: Today</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {(() => {
                  const badge = getStatusBadge(selectedMember.status);
                  return (
                    <>
                      <badge.icon className={`w-5 h-5 ${badge.color.split(' ')[0]}`} />
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide ${badge.color}`}>
                        {badge.label}
                      </span>
                    </>
                  );
                })()}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs text-slate-500 mb-1">Risk Level</p>
                <p className="text-lg font-normal text-slate-900">{selectedMember.riskLevel}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs text-slate-500 mb-1">KYC Score</p>
                <p className="text-lg font-normal text-emerald-600">94.2%</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs text-slate-500 mb-1">Documents</p>
                <p className="text-lg font-normal text-slate-900">8/8</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Account Information */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Account Information
              </h3>
              <div className="space-y-0 divide-y divide-slate-100">
                <div className="py-3 first:pt-0">
                  <p className="text-xs text-slate-500 mb-1.5">Full Name</p>
                  <p className="text-sm font-semibold text-slate-900">{selectedMember.name}</p>
                </div>
                <div className="py-3">
                  <p className="text-xs text-slate-500 mb-1.5">Email Address</p>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <p className="text-sm text-slate-700">juan.delacruz@email.ph</p>
                  </div>
                </div>
                <div className="py-3">
                  <p className="text-xs text-slate-500 mb-1.5">Phone Number</p>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <p className="text-sm text-slate-700">+63 917 234 5678</p>
                  </div>
                </div>
                <div className="py-3 last:pb-0">
                  <p className="text-xs text-slate-500 mb-1.5">Address</p>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5" />
                    <p className="text-sm text-slate-700">456 Rizal Avenue, Barangay San Miguel, Makati City, Metro Manila 1200</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - KYC Documents and LMS Status */}
            <div className="space-y-6">
              {/* KYC Documents */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  KYC Documents
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Valid ID (UMID/SSS)', status: 'verified', date: 'Dec 24, 2019' },
                    { name: 'Selfie Verification', status: 'verified', date: 'Jan 15, 2020' },
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          doc.status === 'verified' ? 'bg-emerald-100' : 'bg-amber-100'
                        }`}>
                          {doc.status === 'verified' ? (
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Clock className="w-4 h-4 text-amber-600" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{doc.name}</p>
                          <p className="text-xs text-slate-500">{doc.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* LMS Status */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  LMS Status
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-slate-500 mb-2">Pre-Membership Learning</p>
                    <div className="flex items-center gap-3">
                      {(() => {
                        const lmsStatus = selectedMember.lmsStatus || 'not-started';
                        const statusConfig: Record<string, {
                          icon: typeof CheckCircle;
                          color: string;
                          label: string;
                          description: string;
                        }> = {
                          'completed': {
                            icon: CheckCircle,
                            color: 'bg-emerald-100 text-emerald-700',
                            label: 'Completed',
                            description: 'All modules finished'
                          },
                          'ongoing': {
                            icon: PlayCircle,
                            color: 'bg-blue-100 text-[#0284C7]',
                            label: 'Ongoing',
                            description: '3 of 5 modules completed'
                          },
                          'not-started': {
                            icon: Clock,
                            color: 'bg-slate-100 text-slate-700',
                            label: 'Not Started',
                            description: 'Enrollment pending'
                          }
                        };
                        const config = statusConfig[lmsStatus] || statusConfig['not-started'];
                        const IconComponent = config.icon;

                        return (
                          <div className="flex-1">
                            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${config.color.split(' ')[0]}`}>
                                <IconComponent className={`w-4 h-4 ${config.color.split(' ')[1]}`} />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-semibold text-slate-900">{config.label}</p>
                                <p className="text-xs text-slate-500">{config.description}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Financial Information
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-slate-500 mb-2">Account Balance</p>
                <p className="text-3xl font-normal text-slate-900">₱144,900.00</p>
                <p className="text-xs text-emerald-600 font-medium mt-1">Available for withdrawal</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-2">Total Deposits</p>
                <p className="text-2xl font-normal text-slate-900">₱744,786.00</p>
                <p className="text-xs text-slate-500 mt-1">Since Dec 2019</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-2">Total Withdrawals</p>
                <p className="text-2xl font-normal text-slate-900">₱599,886.00</p>
                <p className="text-xs text-slate-500 mt-1">Last: 2 days ago</p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
