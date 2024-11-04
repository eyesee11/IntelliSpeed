import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Vehicle } from '../types';

interface SpeedChartProps {
  data: Vehicle[];
}

export const SpeedChart = ({ data }: SpeedChartProps) => {
  const chartData = data.map(vehicle => ({
    time: new Date(vehicle.timestamp).toLocaleTimeString(),
    speed: vehicle.speed,
  }));

  return (
    <div className="h-[300px] w-full bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Speed Trends</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="speed" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};