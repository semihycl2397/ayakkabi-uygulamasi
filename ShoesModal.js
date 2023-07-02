import React, { useState } from 'react';
import Modal from 'react-modal';

const ShoesModal = ({ shoeCount, donationCount, onShoeChange, onDonationChange }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newShoes, setNewShoes] = useState(0);
  const [newDonations, setNewDonations] = useState(0);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleShoeChange = (event) => {
    setNewShoes(parseInt(event.target.value));
  };

  const handleDonationChange = (event) => {
    setNewDonations(parseInt(event.target.value));
  };

  const handleSaveChanges = () => {
    onShoeChange(newShoes);
    onDonationChange(newDonations);
    handleCloseModal();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Ayakkabıları Düzenle</button>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <h2>Ayakkabıları Düzenle</h2>
        <label>
          Yeni Ayakkabı Sayısı:
          <input type="number" value={newShoes} onChange={handleShoeChange} />
        </label>
        <br />
        <label>
          Bağış Sayısı:
          <input type="number" value={newDonations} onChange={handleDonationChange} />
        </label>
        <br />
        <button onClick={handleSaveChanges}>Değiş
ve Kapat</button>
</Modal>
<p>Kalan Ayakkabı Sayısı: {shoeCount - donationCount}</p>
</div>
);
};

export default ShoesModal;
