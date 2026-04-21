import { motion } from 'motion/react';
import { Shield, RefreshCw, Save, Users, Repeat, CheckCircle2, Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/Button';

export function Settings() {
  const [quantumEncryption, setQuantumEncryption] = useState(true);
  const [multiSigGate, setMultiSigGate] = useState(false);
  const [signerThreshold, setSignerThreshold] = useState(5);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1200px]">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 sm:mb-8"
      >
        <div className="flex flex-col sm:flex-row items-start justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold uppercase tracking-wider">
                System v3.4.0
              </span>
            </div>
            <h1 className="text-3xl font-semibold text-slate-900 mb-2 leading-tight">
              Institutional Governance & Security
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl">
              Configure the core financial engine of FICCO. Manage quantum-resilience parameters and member-tier economic thresholds.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <Button variant="secondary" icon={RefreshCw} className="w-full md:w-auto justify-center">
              Revert Defaults
            </Button>
            <Button variant="primary" icon={Save} className="w-full md:w-auto justify-center">
              Save Configurations
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Institutional Security Protocols */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-white rounded-2xl border border-slate-200 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#1565C0]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Institutional Security Protocols</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Advanced Core Protection</p>
              </div>
            </div>

            {/* Quantum-Resistant Encryption */}
            <div className="bg-slate-50 rounded-xl p-5 mb-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-slate-900 mb-1">Quantum-Resistant Encryption</h4>
                  <p className="text-xs text-slate-600">Enable lattice-based cryptographic algorithms for all institutional ledger entries.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer ml-4">
                  <input
                    type="checkbox"
                    checked={quantumEncryption}
                    onChange={(e) => setQuantumEncryption(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500/40 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 after:shadow-sm"></div>
                </label>
              </div>
            </div>

            {/* Multi-Sig Gate */}
            <div className="bg-slate-50 rounded-xl p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-slate-900 mb-1">Multi-Sig Gate</h4>
                  <p className="text-xs text-slate-600">Require m-of-n administrative approvals for any high-value treasury movements.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer ml-4">
                  <input
                    type="checkbox"
                    checked={multiSigGate}
                    onChange={(e) => setMultiSigGate(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500/40 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 after:shadow-sm"></div>
                </label>
              </div>

              {multiSigGate && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Signer Threshold</span>
                    <span className="text-lg font-normal text-[#1565C0]">{signerThreshold}/8</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={signerThreshold}
                    onChange={(e) => setSignerThreshold(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-slate-400 font-semibold">MIN (1)</span>
                    <span className="text-xs text-slate-400 font-semibold">MAX (10)</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Member Tier Thresholds */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="bg-white rounded-2xl border border-slate-200 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-normal text-slate-900">Member Tier Thresholds</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Staking & Contribution Limits</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              {/* Silver Tier */}
              <div className="bg-slate-50 rounded-xl p-4 border-2 border-slate-200">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Silver Tier</h4>
                    <p className="text-xs text-slate-600">Entry-level institutional participation</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Min Stake (₱USD)</p>
                  <p className="text-2xl font-normal text-slate-900">25,000</p>
                </div>
              </div>

              {/* Gold Tier */}
              <div className="bg-slate-50 rounded-xl p-4 border-2 border-slate-200">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Gold Tier</h4>
                    <p className="text-xs text-slate-600">Core cooperative membership with voting</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Min Stake (₱USD)</p>
                  <p className="text-2xl font-normal text-slate-900">100,000</p>
                </div>
              </div>

              {/* Platinum Tier */}
              <div className="bg-gradient-to-br from-[#1565C0] to-[#2D2D9E] rounded-xl p-4 border-2 border-[#1565C0] text-white">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-sm font-semibold">Platinum Tier</h4>
                    <p className="text-xs opacity-90">Strategic governance & high-yield cycle</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1 opacity-80">Min Stake (₱USD)</p>
                  <p className="text-2xl font-normal">500,000</p>
                </div>
              </div>

              {/* Define New Tier */}
              <Button
                variant="ghost"
                icon={Plus}
                className="w-full border-2 border-dashed border-slate-300 hover:border-[#1565C0] hover:bg-[#1565C0]/10 text-slate-400 hover:text-[#1565C0] justify-center p-4"
              >
                Define New Member Tier
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Dividend Cycles */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Repeat className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-normal text-slate-900">Dividend Cycles</h3>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Automated Profit Redistribution</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl p-5 border-l-4 border-[#1565C0]">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Cycle Frequency</p>
              <p className="text-2xl font-normal text-slate-900">Quarterly (90 Days)</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Next Distribution</p>
              <p className="text-2xl font-normal text-slate-900">Oct 12, 2024</p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-slate-700">Ledger Synced</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold text-slate-700">Nodes Healthy</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-slate-300/50 rounded px-2 py-1">
              Policy Documentation
            </button>
            <button className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-slate-300/50 rounded px-2 py-1">
              Audit Log
            </button>
            <button className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-slate-300/50 rounded px-2 py-1">
              Legal Terms
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
