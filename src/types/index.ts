export interface Vehicle {
  id: string;
  licensePlate: string;
  speed: number;
  timestamp: string;
  location: {
    lat: number;
    lng: number;
  };
  violation?: {
    type: 'SPEED' | 'OTHER';
    fine: number;
  };
}

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'operator';
  email: string;
}

export interface SpeedLimit {
  id: string;
  limit: number;
  zone: string;
  location: {
    lat: number;
    lng: number;
  };
}