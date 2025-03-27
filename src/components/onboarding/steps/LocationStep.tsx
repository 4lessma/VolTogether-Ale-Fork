
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface LocationStepProps {
  city: string;
  setCity: (city: string) => void;
}

const LocationStep = ({ city, setCity }: LocationStepProps) => {
  // Extremely simplified input handling
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get value directly, no additional processing
    const value = e.target.value;
    // Call setter immediately
    setCity(value);
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="city">In quale città vivi?</Label>
        <Input
          id="city"
          placeholder="Es. Milano, Roma, Napoli..."
          value={city}
          onChange={handleChange}
          maxLength={50}
          aria-describedby="city-description"
        />
        <p id="city-description" className="text-sm text-gray-500">
          Utilizziamo questa informazione per personalizzare le tue sfide e calcolare l'impatto ambientale locale.
        </p>
      </div>
    </div>
  );
};

export default LocationStep;
