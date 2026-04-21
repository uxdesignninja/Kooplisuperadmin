import { BrowserRouter, Routes, Route } from 'react-router';
import { TopBar } from './components/TopBar';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Members } from './pages/Members';
import { MemberDetail } from './pages/MemberDetail';
import { MemberTransactions } from './pages/MemberTransactions';
import { Transactions } from './pages/Transactions';
import { CooperativeCompliance } from './pages/CooperativeCompliance';
import { Compliance } from './pages/Compliance';
import { Settings } from './pages/Settings';
import { SidebarProvider, useSidebar } from './contexts/SidebarContext';

function AppContent() {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      <TopBar />
      <Sidebar />

      <main className={`pt-16 min-h-screen transition-all duration-300 ${isCollapsed ? 'sm:ml-20' : 'sm:ml-64'}`}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members/:memberId" element={<MemberDetail />} />
          <Route path="/members/:memberId/transactions" element={<MemberTransactions />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/compliance" element={<CooperativeCompliance />} />
          <Route path="/compliance/:cooperativeId" element={<Compliance />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <AppContent />
      </SidebarProvider>
    </BrowserRouter>
  );
}