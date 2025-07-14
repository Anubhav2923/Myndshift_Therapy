import { useEffect, useState } from 'react';
import { useApi } from '../lib/api';
import Navbar from '../components/Navbar';
import CheckinForm from '../components/CheckinForm';
import StatsCards from '../components/StatsCards';
import CheckinHistory from '../components/CheckHistory';

function Dashboard() {
  const [activePage, setActivePage] = useState('dashboard');
  const [entries, setEntries] = useState([]);
  const { fetchWithAuth } = useApi();

  useEffect(() => {
    const loadCheckins = async () => {
      try {
        const res = await fetchWithAuth('/checkins');
        const data = await res.json();
        setEntries(data);
      } catch (err) {
        console.error('Failed to fetch check-ins', err.message);
      }
    };

    loadCheckins();
  }, []);

  const handleCheckinSubmit = (data) => {
    setEntries((prev) => [data, ...prev]);
  };

  // Stats logic remains the same
  const total = entries.length;
  const avgMood =
    total === 0 ? 0 : Math.round(entries.reduce((sum, e) => sum + e.mood, 0) / total);
  const streak = calcStreak(entries);

  function calcStreak(entries) {
    let streak = 0;
    let dates = new Set(entries.map((e) => new Date(e.date).toDateString()));
    let today = new Date();

    for (let i = 0; i < entries.length; i++) {
      let check = new Date();
      check.setDate(today.getDate() - i);
      if (dates.has(check.toDateString())) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="p-6 flex flex-col items-center">
        {activePage === 'dashboard' ? (
          <>
            <StatsCards stats={{ streak, avgMood, total }} />
            <CheckinHistory entries={entries} />
          </>
        ) : (
          <CheckinForm onSubmit={handleCheckinSubmit} />
        )}
      </main>
    </div>
  );
}

export default Dashboard;
