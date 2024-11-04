import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Map, Settings, Shield } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen w-20 bg-gray-900 text-white flex flex-col items-center py-8">
      <div className="mb-12">
        <Shield className="w-10 h-10 text-blue-400" />
      </div>
      <div className="flex flex-col gap-8">
        <Link
          to="/"
          className="p-3 rounded-lg hover:bg-gray-800 transition-colors"
          title="Dashboard"
        >
          <Activity className="w-6 h-6" />
        </Link>
        <Link
          to="/map"
          className="p-3 rounded-lg hover:bg-gray-800 transition-colors"
          title="Map View"
        >
          <Map className="w-6 h-6" />
        </Link>
        <Link
          to="/settings"
          className="p-3 rounded-lg hover:bg-gray-800 transition-colors"
          title="Settings"
        >
          <Settings className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  );
};