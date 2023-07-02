import React, { useState } from 'react';
import ShoesModal from './components/ShoesModal';

const App = () => {
  const [shoeCount, setShoeCount] = useState(70);
  const [donationCount, setDonationCount] = useState(36);

  const handleShoeChange = (newShoes) => {
    setShoeCount(newShoes + donationCount);
  };

  const handleDonationChange = (newDonations) => {
    setDonationCount(newDonations);
  };

  return (
    <div>
      <h1>Ayakkabi Uygulamasi</h1>
      <ShoesModal
        shoeCount={shoeCount}
        donationCount={donationCount}
        onShoeChange={handleShoeChange}
        onDonationChange={handleDonationChange}
      />
    </div>
  );
};

export default App;
