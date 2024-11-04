import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Dashboard } from './pages/Dashboard';
import { useStore } from './store/useStore';
import { Vehicle } from './types';

// Simulated data generation
const generateMockData = (): Vehicle[] => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: `v${i}`,
    licensePlate: `ABC${1000 + i}`,
    speed: Math.floor(Math.random() * 50) + 60,
    timestamp: new Date(Date.now() - i * 300000).toISOString(),
    location: {
      lat: 40.7128 + (Math.random() - 0.5) * 0.1,
      lng: -74.006 + (Math.random() - 0.5) * 0.1,
    },
    violation: Math.random() > 0.7
      ? {
          type: 'SPEED',
          fine: Math.floor(Math.random() * 200) + 100,
        }
      : undefined,
  }));
};

function App() {
  const { setVehicles } = useStore();

  React.useEffect(() => {
    // Initialize with mock data
    setVehicles(generateMockData());

    // Simulate real-time updates
    const interval = setInterval(() => {
      setVehicles(generateMockData());
    }, 5000);

    return () => clearInterval(interval);
  }, [setVehicles]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;