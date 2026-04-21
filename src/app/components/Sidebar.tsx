import { Home, Users, Receipt, Shield, Settings, HeadphonesIcon, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router';
import { useSidebar } from '../contexts/SidebarContext';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Users, label: 'Cooperatives', path: '/members' },
  { icon: Receipt, label: 'Transactions', path: '/transactions' },
  { icon: Shield, label: 'Compliance', path: '/compliance' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const bottomItems = [
  { icon: HeadphonesIcon, label: 'Support', danger: false },
  { icon: LogOut, label: 'Logout', danger: true },
];

export function Sidebar() {
  const location = useLocation();
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <motion.aside
      initial={{ x: -256, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        width: isCollapsed ? '5rem' : '16rem'
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="hidden sm:flex fixed left-0 top-16 h-[calc(100vh-4rem)] bg-slate-50 border-r border-slate-200 flex-col py-8 z-10"
      style={{ paddingLeft: isCollapsed ? '0.75rem' : '1rem', paddingRight: isCollapsed ? '0.75rem' : '1rem' }}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-8 w-6 h-6 bg-white rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm z-20"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        ) : (
          <ChevronLeft className="w-3.5 h-3.5 text-slate-600" />
        )}
      </button>

      <nav className="flex-1 space-y-1">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.div
              key={item.label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
            >
              <Link
                to={item.path}
                className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} px-4 py-3 rounded-2xl transition-all duration-200 group ${
                  isActive
                    ? 'bg-gradient-to-br from-[#1565C0] to-[#2D2D9E] text-white shadow-lg shadow-[#1565C0]/30'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon className={`w-[18px] h-[18px] ${isActive ? 'text-white' : 'text-slate-500'} ${isCollapsed ? '' : 'shrink-0'}`} />
                <AnimatePresence mode="wait">
                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-medium text-sm whitespace-nowrap overflow-hidden"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
                {isActive && !isCollapsed && (
                  <div className="ml-auto w-1 h-1 rounded-full bg-white/60" />
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      <div className="border-t border-slate-200 pt-6 space-y-1">
        {bottomItems.map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
            className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} px-4 py-3 rounded-2xl transition-all duration-200 ${
              item.danger
                ? 'text-red-600 hover:bg-red-50'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
            title={isCollapsed ? item.label : undefined}
          >
            <item.icon className={`w-[18px] h-[18px] ${item.danger ? 'text-red-600' : 'text-slate-500'} ${isCollapsed ? '' : 'shrink-0'}`} />
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="font-medium text-sm whitespace-nowrap overflow-hidden"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
    </motion.aside>
  );
}
