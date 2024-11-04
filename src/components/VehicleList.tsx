import React from 'react';
import { Vehicle } from '../types';
import { AlertTriangle, Check } from 'lucide-react';

interface VehicleListProps {
  vehicles: Vehicle[];
  onSelect: (vehicle: Vehicle) => void;
}

export const VehicleList = ({ vehicles, onSelect }: VehicleListProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Recent Vehicles</h3>
      </div>
      <div className="overflow-y-auto max-h-[600px]">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            onClick={() => onSelect(vehicle)}
            className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{vehicle.licensePlate}</p>
                <p className="text-sm text-gray-500">
                  {new Date(vehicle.timestamp).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold">
                  {vehicle.speed} km/h
                </span>
                {vehicle.violation ? (
                  <AlertTriangle className="text-red-500 w-5 h-5" />
                ) : (
                  <Check className="text-green-500 w-5 h-5" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};