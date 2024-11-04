import { create } from 'zustand';
import { Vehicle, User } from '../types';

interface AppState {
  vehicles: Vehicle[];
  currentUser: User | null;
  selectedVehicle: Vehicle | null;
  setVehicles: (vehicles: Vehicle[]) => void;
  setCurrentUser: (user: User | null) => void;
  setSelectedVehicle: (vehicle: Vehicle | null) => void;
}

export const useStore = create<AppState>((set) => ({
  vehicles: [],
  currentUser: null,
  selectedVehicle: null,
  setVehicles: (vehicles) => set({ vehicles }),
  setCurrentUser: (user) => set({ currentUser: user }),
  setSelectedVehicle: (vehicle) => set({ selectedVehicle: vehicle }),
}));