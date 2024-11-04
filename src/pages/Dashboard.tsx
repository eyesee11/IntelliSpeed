import React from 'react';
import { useStore } from '../store/useStore';
import { SpeedChart } from '../components/SpeedChart';
import { VehicleList } from '../components/VehicleList';
import { Car, AlertTriangle, Gauge } from 'lucide-react';

export const Dashboard = () => {
  const { vehicles, setSelectedVehicle } = useStore();

  const stats = {
    totalVehicles: vehicles.length,
    violations: vehicles.filter(v => v.violation).length,
    averageSpeed: Math.round(
      vehicles.reduce((acc, v) => acc + v.speed, 0) / vehicles.length
    ),
  };

  return (
    <div className="min-h-screen bg-gray-100 pl-20">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-8">Traffic Monitoring Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Car className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Vehicles</p>
                <p className="text-2xl font-bold">{stats.totalVehicles}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Violations</p>
                <p className="text-2xl font-bold">{stats.violations}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Gauge className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Average Speed</p>
                <p className="text-2xl font-bold">{stats.averageSpeed} km/h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SpeedChart data={vehicles} />
          <VehicleList vehicles={vehicles} onSelect={setSelectedVehicle} />
        </div>
      </div>
    </div>
  );
};